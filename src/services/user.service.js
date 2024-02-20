const User = require("../models/user.model");

const findUsers = async () => {
  return await User.find(
    {},
    {
      password: 0,
    }
  );
};
const findUserById = async ({ userId }) => {
  return await User.findOne(
    { _id: userId },
    {
      password: 0,
    }
  );
};
const deleteUser = async ({ userId }) => {
  return await User.deleteOne(
    { _id: userId },
    {
      password: 0,
    }
  );
};

module.exports = { findUsers, findUserById, deleteUser };
