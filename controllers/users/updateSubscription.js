const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const userId = req.user._id;

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
