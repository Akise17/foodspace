const validate = require('../middlewares/validations/authenticationValidation')
const {
    signup,
    login
} = require('../controllers/authenticationController');
const express = require('express')
const router = express.Router()

router.post('/signup', validate.signup, signup);
router.post('/login', validate.login, login);

module.exports = router