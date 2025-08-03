// utils/emailService.js
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({ to, subject, text, attachments = [] }) => {
  const msg = {
    to,
    from: 'noreply@mexausa.org', // ✅ replace with verified sender
    subject,
    text,
    attachments,
  };

  try {
    await sgMail.send(msg);
    console.log(`📧 Email sent to ${to}`);
  } catch (error) {
    console.error('❌ SendGrid error:', error.response?.body || error);
  }
};

module.exports = sendEmail;
