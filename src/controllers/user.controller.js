let instance = null;
const jwt = require("jsonwebtoken");
const userService = require("../services/user.service");
const authService = require("../services/auth.service");

class UserController {

    static getInstance() {
        if (!instance) {
          return new UserController();
        }
        return instance;
      }

    async createUser(req,res) {
        try {
            let newUser = await userService.createUser(req.body);
            return res.status(201).json({
                message: "Created!",
                usuario: newUser,
              });
        }catch (err){
            console.log('Error, usuario ya existente')
            return res.status(500).json({
                method: "createUsuario",
                message: err.message,
              });
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

    async getUserByID(req, res){
        try{
            const id = req.params.id
            const user = await userService.getUserByID(id);
            return res.status(200).json(user);
        } catch(err){
            console.log("error")
        }
    }

    async getUserByMail(req, res){
        try{
            const email = req.params.email
            const user = await userService.getUserByMail(email);
            return res.status(200).json(user);
        } catch(err){
            console.log("error")
        }
    }

    async login(req, res){
        try{
            const { email, password } = req.body;
            let isUserRegistered = await authService.hasValidCredentials(email, password);

            if (isUserRegistered){
                const user = await userService.getUserByMail(email);

                const token = jwt.sign(user.toJSON(), process.env.PRIVATE_KEY, {
                expiresIn: "1d",
                });

                return res.status(200).json({
                status: 200,
                token,
                message: "Token created successfully."
                });
            } else {
                return res.status(401).json({
                  message: "Unauthorized.",
                });
              }
            } catch (err) {
              console.error(err);
              return res.status(500).json({
                method: "login",
                message: err.message,
              });
            }
        }
    }


module.exports = UserController.getInstance();