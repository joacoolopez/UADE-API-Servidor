const mailModel = require('../models/Mail');

class UserService {
    async createMail(mail){
        try{
            await mailModel.create(mail);
            return mail;
        }catch(err){
            console.log('error 2')
        }
    }
}

module.exports = new UserService();