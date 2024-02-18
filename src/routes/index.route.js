const router = require("express").Router();
const baseRoute = require("./base.route");

router.get("/", baseRoute);

module.exports = router;
