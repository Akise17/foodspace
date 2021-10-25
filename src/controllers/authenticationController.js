const {validationResult} = require('express-validator');
const { logError } = require('../../config/logger')
const {responses} = require('../res');
const auth = require('../services/authenticationService')

exports.signup = async(req, res, next) => {
    try {
        const signup = await auth.signUp(req.body)
        return responses(201, 'success', signup, res)
    } catch (ex) {
        logError.error('message:', ex)
        next(ex)        
    }
}

exports.login = async(req, res, next) => {
    try {
        const login = await auth.signIn(req.body)
        if (login){
            return responses(200, 'success', login, res)
        } else {
            return responses(404, 'Not Found', [], res)
        }
    } catch (ex) {
        logError.error('message:', ex)
        next(ex)        
    }
}
