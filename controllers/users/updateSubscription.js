const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const userId = req.user._id;
  const userPassword = req.body.password;
  if (userPassword) {
    // eslint-disable-next-line no-undef
    req.body.password = bcrypt.hashSync(userPassword, bcrypt.genSaltSync(10));
  }

  const result = await User.findOneAndUpdate({ userId }, { ...req.body });
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = updateSubscription;
