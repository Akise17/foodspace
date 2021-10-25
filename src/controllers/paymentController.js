const {validationResult} = require('express-validator');
const {responses} = require('../res');
const {createQrCode} = require('../services/xenditService')
module.exports = {
    create : async (req, res, next) => {
        try {
            const errors = validationResult(req);
            let response;

            if (!errors.isEmpty()) {
                console.log(errors);
                const erroyArray = errors.array();
                return responses(400, erroyArray[0].msg, [], res)
            }
            
            const body = req.body;
            if (['ovo', 'shopeepay', 'dana', 'linkaja', 'paymaya'].includes(body.ewallet)) {
                response = await createQrCode(body)

                if (typeof response.status == 'number') {
                    return responses(response.status, response.message, [], res)
                } else {
                    return responses(200, 'success', response, res)
                }
            } 
        } catch (error) {
            next(error)
            console.log(error);
        }
    }
}