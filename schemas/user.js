const Joi = require("joi");

const user = {
  email: Joi.string().required(),
  password: Joi.string().required(),
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .default("starter")
    .optional(),
};

const registerUserSchema = Joi.object({
  email: user.email,
  password: user.password,
  subscription: user.subscription,
}).required();

const loginUserSchema = Joi.object({
  email: user.email,
  password: user.password,
  subscription: user.subscription,
}).required();

const updateUserSchema = Joi.object({
  email: user.email.optional(),
  password: user.password.optional(),
  subscription: user.subscription.optional(),
}).required();

const verifyEmailSchema = Joi.object({
  email: user.email,
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
};
