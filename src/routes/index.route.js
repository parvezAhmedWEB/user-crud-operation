const router = require("express").Router();
const baseRoute = require("./base.route");
const authRoute = require("./auth.route");

router.use("/", baseRoute);
router.use("/api/v1/", authRoute);

module.exports = router;
