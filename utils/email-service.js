const { NotifyClient } = require('notifications-node-client');
const config = require('../config');

const Notify = new NotifyClient(config.govukNotify.notifyApiKey);

class EmailProps {
  constructor(replyToId) {
    this.personalisation = {};
    if (replyToId) {
      this.emailReplyToId = replyToId;
    }
  }

  /**
   * Adds personalisation data to the email.
   *
   * @param {object} newPersonalisation - An object containing personalisation key-value pairs.
   */
  addPersonalisation(newPersonalisation) {
    Object.assign(this.personalisation, newPersonalisation);
  }
}

/**
 * Generates a useful error message from a typical GovUk Notify Node.js client error reponse object
 *
 * @param {object} error - An Error object.
 * @returns {string} - An error message for GovUK Notify containing key causal information.
 */
const genNotifyErrorMsg = error => {
  const errorDetails = error.response?.data ? `Cause: ${JSON.stringify(error.response.data)}` : '';
  const errorCode = error.code ? `${error.code} -` : '';
  return `${errorCode} ${error.message}; ${errorDetails}`;
};

/**
 * Sends an email using the GovUK Notify service.
 *
 * @async
 * @param {string} templateId - The ID of the email template to use.
 * @param {string} recipientEmail - The recipient's email address.
 * @param {object} personalisation - An object containing personalisation key-value pairs for the email.
 * @throws {Error} - Throws an error if the email fails to send.
 */
async function sendEmail(templateId, recipientEmail, personalisation) {
  const emailProps = new EmailProps(config.govukNotify.replyToId);

  emailProps.addPersonalisation(personalisation);

  try {
    await Notify.sendEmail(templateId, recipientEmail, emailProps);
  } catch (error) {
    const errorMsg = `GovUK Notify failed to send email: ${genNotifyErrorMsg(error)}`;
    throw new Error(errorMsg);
  }
}

module.exports = {
  sendEmail
};
