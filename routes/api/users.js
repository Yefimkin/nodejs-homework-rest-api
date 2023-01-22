const express = require("express");
const {
  validation,
  ctrlWrapper,
  authentication,
  upload,
} = require("../../middleware");

const {
  users: {
    register,
    login,
    getCurrent,
    logout,
    updateSubscription,
    updateAvatar,
    verifyEmail,
    sendVerifyEmail,
  },
} = require("../../controllers");

const {
  registerUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
} = require("../../schemas");
const router = express.Router();

const userRegisterValidation = validation(registerUserSchema);
const userLoginValidation = validation(loginUserSchema);
const userUpdateValidation = validation(updateUserSchema);
const userMailValidation = validation(verifyEmailSchema);

router.post("/register", userRegisterValidation, ctrlWrapper(register));
router.post("/login", userLoginValidation, ctrlWrapper(login));
router.get("/current", authentication, ctrlWrapper(getCurrent));
router.post("/logout", authentication, ctrlWrapper(logout));
router.patch(
  "/users",
  authentication,
  userUpdateValidation,
  ctrlWrapper(updateSubscription)
);
router.patch(
  "/avatars",
  authentication,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);
router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));
router.post("/verify", userMailValidation, ctrlWrapper(sendVerifyEmail));

module.exports = router;
