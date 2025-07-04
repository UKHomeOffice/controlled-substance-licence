const { NotifyClient } = require('notifications-node-client');
const config = require('../config');
const { generateErrorMsg } = require('../utils');

const Notify = new NotifyClient(config.govukNotify.notifyApiKey);

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
  const emailProps = {
    personalisation,
    emailReplyToId: config.govukNotify.replyToId
  };


  try {
    await Notify.sendEmail(templateId, recipientEmail, emailProps);
  } catch (error) {
    const errorMsg = `GovUK Notify failed to send email: ${generateErrorMsg(error)}`;
    throw new Error(errorMsg);
  }
}

module.exports = {
  sendEmail,
  prepareUpload: Notify.prepareUpload
};
