const { Router } = require("express");

const UserController = require("../controllers/user.controller");

const router = Router();

router.post('/create', UserController.createUser)

router.get('/', UserController.getUsers)

module.exports = router;