const { body } = require('express-validator')
const { Users } = require('../models')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

module.exports = {
    signUp: async (body) => {
        
        const salt = await bcrypt.genSalt(10);
        let password = await bcrypt.hash(body.password, salt);

        users = await Users.create({
            username: body.username,
            password: password,
            role: body.role
        })

        return users
    },

    checkUser: async (body) => {
        user = await Users.findOne({
            where: {
                username: body.username
            }
        })
        return user
    },

    signIn: async (body) => {
        user = await Users.findOne({
            where: {
                username: body.username
            }
        })
        if (user) {
            const validPassword = await bcrypt.compare(body.password, user.password);
            if (validPassword) {
                const token = jwt.sign(
                    { 
                        user_id: user.id, 
                        username: user.username 
                    },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "1d",
                    }
                );
                console.log(token);
                console.log(user);
                user = user.toJSON();
                user.token = token;
                user = Object.defineProperty(user, 'token', {
                    value: token
                })
                return user
            } else {
                return false
            }
        }
    }
}