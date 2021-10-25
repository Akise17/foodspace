const axios = require('axios');
const xendit = require('xendit-node');
const { create } = require('xendit-node/src/disbursement/disburse');

module.exports = {
    createEwalletCharge: async (body) =>{
        try {
            const url = process.env.XENDIT_URL;
            const data = {
                "referenceID": `order-id-${new Date().getTime()}`,
                "currency": "IDR",
                "amount": body.amount,
                "checkoutMethod": "ONE_TIME_PAYMENT",
                "channelCode": `ID_${body.ewallet.toUpperCase()}`,
                "metadata": { 
                    "branch_area": "PLUIT",
                    "branch_city": "JAKARTA"
                }
            }

            if (body.ewallet == 'ovo') {
                data.channelProperties= {
                    "mobileNumber": body.phone.replace('0', '+62')
                }
            } else {
                data.channelProperties = {
                    "successRedirectURL": "https://redirect.me/payment"
                }
            }

            const x = new xendit({
                secretKey:
                process.env.XENDIT_API_KEY,
            });
              
            const { EWallet } = x;
            const ewalletSpecificOptions = {};
            const ew = new EWallet(ewalletSpecificOptions);
              
            const responses = await ew.createEWalletCharge(data);
            
            return responses;
        } catch (error) {
            console.log(error);
            return error;
        }
    },

    createQrCode: async (body) =>{
        try {
            const url = process.env.XENDIT_URL;
            const data = {
                "externalID": `order-id-${new Date().getTime()}`,
                "type": "DYNAMIC",
                "amount": body.amount,
                "callbackURL": "https://redirect.me/payment"
            }

            const x = new xendit({
                secretKey:
                process.env.XENDIT_API_KEY,
            });
              
            const { QrCode } = x;
            const ewalletSpecificOptions = {};
            const ew = new QrCode(ewalletSpecificOptions);
              
            const responses = await ew.createCode(data);
            
            return responses;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}