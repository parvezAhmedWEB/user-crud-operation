const router = require("express").Router();
const authenticate = require("../middlewares/authenticate.middleware");
const baseRoute = require("./base.route");
const authRoute = require("./auth.route");
const profileRoute = require("./profile.route");
const userRoute = require("./user.route");

router.use("/", baseRoute);
router.use("/api/v1/", authRoute);
router.use("/profile", authenticate, profileRoute);
router.use("/api/v1/users", userRoute);

module.exports = router;
