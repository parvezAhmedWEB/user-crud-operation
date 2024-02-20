const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const key = require("../../config/config").token.key;

const findOneUser = async ({ email }) => {
  return await User.findOne({ email });
};
const postLoginService = async ({ email, password }) => {
  const user = await findOneUser({ email });
  if (!user) {
    throw Error("User not found.");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("Password does not match.");
  }
  const data = {
    id: user._id,
    username: user.username,
    email: user.email,
    roles: user.roles[0],
    accountStatus: user.accountStatus,
  };
  return jwt.sign(data, key, { expiresIn: "5h" });
};

const postRegisterService = async ({
  username,
  email,
  password,
  roles,
  accountStatus,
}) => {
  const user = await findOneUser({ email });
  if (user) {
    throw Error("User already exists");
  }
  const hashPassword = await bcrypt.hash(password, saltRounds);
  const userData = new User({
    username,
    email,
    password: hashPassword,
    roles: roles ? roles : ["STUDENT"],
    accountStatus: accountStatus ? accountStatus : "PENDING",
  });
  const newUser = await userData.save();
  return newUser;
};
module.exports = { postRegisterService, postLoginService };
