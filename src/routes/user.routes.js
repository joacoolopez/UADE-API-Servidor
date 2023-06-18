const { Router } = require("express");

const UserController = require("../controllers/user.controller");

const router = Router();
const validateJwt = require("../middlewares/jwtValidator")

router.post('/create', UserController.createUser)

router.get('/', validateJwt, UserController.getUsers)

router.get('/:id', UserController.getUserByID)

router.get('/email/:email', UserController.getUserByMail)

router.post('/login', UserController.login)

module.exports = router;