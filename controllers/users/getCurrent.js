// const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { name, email } = req.user;

  res.status(201).json({
    status: "succes",
    code: 200,
    data: {
      user: {
        email,
        name,
      },
    },
  });
};

module.exports = getCurrent;
