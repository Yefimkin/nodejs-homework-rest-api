const {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
} = require("./contacts");

const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
} = require("./user");

module.exports = {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  // eslint-disable-next-line no-dupe-keys
  updateUserSchema,
  verifyEmailSchema,
};
