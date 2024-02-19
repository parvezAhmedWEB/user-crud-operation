const router = require("express").Router();
const authenticate = require("../middlewares/authenticate.middleware");
const baseRoute = require("./base.route");
const authRoute = require("./auth.route");
const profileRoute = require("./profile.route");

router.use("/", baseRoute);
router.use("/api/v1/", authRoute);
router.use("/profile", authenticate, profileRoute);

module.exports = router;
