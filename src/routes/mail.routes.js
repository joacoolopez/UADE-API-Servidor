const { Router } = require("express");

const MailController = require("../controllers/mail.controller");

const router = Router();

router.post('/create', MailController.createMail)


module.exports = router;