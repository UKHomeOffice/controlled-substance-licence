const { NotifyClient } = require('notifications-node-client');
const config = require('../config');
const { generateErrorMsg } = require('../utils');

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
    const errorMsg = `GovUK Notify failed to send email: ${generateErrorMsg(error)}`;
    throw new Error(errorMsg);
  }
}

module.exports = {
  sendEmail
};
