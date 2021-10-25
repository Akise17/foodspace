const validator = require('validator');
const auth = require('../../services/authenticationService')

exports.signup = async (req, res, next) => {
  try {
    const errorMessages = [];

    console.log(req.body);
    let user = await auth.checkUser(req.body)

    console.log("User: ", user);
    if (user != null){
      errorMessages.push('Username already exist');
    }

    if (validator.isEmpty(req.body.username)) {
      errorMessages.push('Username is not valid');
    }

    if (validator.isEmpty(req.body.password)) {
      errorMessages.push('password is not valid');
    }

    if (errorMessages.length > 0) {
      return next({ message: errorMessages, status: 400 });
    }

    next();
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const errorMessages = [];

    if (validator.isEmpty(req.body.username)) {
      errorMessages.push('Username is not valid');
    }

    if (validator.isEmpty(req.body.password)) {
      errorMessages.push('password is not valid');
    }

    if (errorMessages.length > 0) {
      return next({ message: errorMessages, status: 400 });
    }

    next();
  } catch (error) {
    next(error);
  }
};