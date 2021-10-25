const { validate } = require('../middlewares/validations/paymentValidation')
const payment = require('../controllers/paymentController');
const express = require('express')
const router = express.Router()

router.post('/', validate('create'), payment.create);

module.exports = router