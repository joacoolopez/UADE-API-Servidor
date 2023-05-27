const userModel = require('../models/User');

class UserService {
    async createUser(user){
        try{
            await userModel.create(user);
            return user;
        }catch(err){
            console.log('error 2')
        }
    }

    async getUsers(){
        try{
            const users = await userModel.find()
            return users;
        } catch(err){
            throw new error ("Error in getUsers service")
        }
    }
}

module.exports = new UserService();