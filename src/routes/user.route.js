const {
  getUserById,
  deleteUserById,
  patchUserById,
  getUsers,
  postUser,
} = require("../controllers/user.controller");

const router = require("express").Router();

/**
 * ! Get user by ID
 * @route /api/v1/users/:userId
 */
router.get("/:userId", getUserById);

/**
 * ! Delete user by ID
 * @route /api/v1/users/:userId
 */
router.delete("/:userId", deleteUserById);

/**
 * ! Update user by ID
 * @route /api/v1/users/:userId
 */
router.patch("/:userId", patchUserById);

/**
 * ! Get all users
 * @route /api/v1/users
 */
router.get("/", getUsers);

/**
 * ! Create user
 * @route /api/v1/users/
 */
router.post("/", postUser);

module.exports = router;
