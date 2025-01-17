// const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SEND_GRIP_API_KEY);
// const sendEmail = {
//   to: "xapoja4937@fom8.com",
//   from: "xapoja4937@fom8.com",
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(sendEmail)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// module.exports = sendEmail;

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SEND_GRIP_API_KEY } = process.env;

sgMail.setApiKey(SEND_GRIP_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "xapoja4937@fom8.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
