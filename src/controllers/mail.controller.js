let instance = null;
const mailService = require("../services/mail.service");

class MailController {

    static getInstance() {
        if (!instance) {
          return new MailController();
        }
        return instance;
      }

    async createMail(req,res){
        try{
            let newMail = await mailService.createMail(req.body);
            return res.status(201).json({
                message: "Created!",
                usuario: newMail,
              });
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = MailController.getInstance();