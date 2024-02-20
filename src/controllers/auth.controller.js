const {
  postRegisterService,
  postLoginService,
} = require("../services/auth.service");

const postRegister = async (req, res) => {
  try {
    const { username, email, password, roles, accountStatus } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data",
      });
    }
    const user = await postRegisterService({
      username,
      email,
      password,
      roles,
      accountStatus,
    });
    const data = {
      id: user._id,
      username: user.username,
      email: user.email,
      roles: user.roles[0],
      accountStatus: user.accountStatus,
    };
    return res.status(201).json({
      success: true,
      message: "Register new user.",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Not register user.",
      error: error.message,
    });
  }
};
const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data",
      });
    }
    const token = await postLoginService({ email, password });
    return res.status(200).json({
      success: true,
      message: "Login user.",
      token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Not login user.",
      error: error.message,
    });
  }
};
module.exports = { postRegister, postLogin };
