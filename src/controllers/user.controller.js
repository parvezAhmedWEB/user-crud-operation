const { postRegisterService } = require("../services/auth.service");
const {
  findUsers,
  findUserById,
  deleteUser,
} = require("../services/user.service");

const getUsers = async (_req, res) => {
  try {
    const users = await findUsers();
    return res.status(200).json({
      success: true,
      message: "All users data",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await findUserById({ userId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User data",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
const postUser = async (req, res) => {
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
      message: "Create new user.",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const patchUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, roles, accountStatus } = req.body;
    const user = await findUserById({ userId });
    if (!user) {
      res.status(500).json({
        success: false,
        message: "User not found.",
      });
    }
    user.name = username ?? user.username;
    user.roles = roles ?? user.roles;
    user.accountStatus = accountStatus ?? user.accountStatus;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Update user.",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await deleteUser({ userId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }
    return res.status(203).json({
      success: true,
      message: "Delete user.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
module.exports = {
  getUsers,
  getUserById,
  postUser,
  patchUserById,
  deleteUserById,
};
