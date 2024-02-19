const { postRegister, postLogin } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/register", postRegister);
router.post("/login", postLogin);

module.exports = router;
