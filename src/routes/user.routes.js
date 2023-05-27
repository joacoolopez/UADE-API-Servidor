const { Router } = require("express");

const UserController = require("../controllers/user.controller");

const router = Router();

router.post('/create', UserController.createUser)

router.get('/', UserController.getUsers)

router.get('/:id', UserController.getUserByID)

router.get('/email/:email', UserController.getUserByMail)

router.post('/login', UserController.login)

module.exports = router;