let instance = null;
const userService = require("../services/user.service");

class UserController {

    static getInstance() {
        if (!instance) {
          return new UserController();
        }
        return instance;
      }

    async createUser(req,res) {
        try {
            console.log(req.body)
            let newUser = await userService.createUser(req.body);
            return res.status(201).json({
                message: "Created!",
                usuario: newUser,
              });
        }catch (err){
            console.log('error')
        }
    }

    async getUsers(req, res){
        try{
            const users = await userService.getUsers();
            return res.status(200).json(users);
        } catch(err){
            console.log("error")
        }
    }
}

module.exports = UserController.getInstance();