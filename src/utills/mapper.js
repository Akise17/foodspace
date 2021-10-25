module.exports = {
    paymentRecordMapper: (body, response) => {
        const statusPembayaran = body.ewallet == 'gopay' ? response.transaction_status : response.status;
        const orderId = body.ewallet == 'gopay' ? response.order_id : response.reference_id;
        const chargeId = body.ewallet == 'gopay' ? response.transaction_id : response.id;
        const orderType = body.partner ? 'courier' : 'premium'

        return {
            externalId : '',
            amoutTotal : body.amount,
            ewallet : body.ewallet,
            noTelfon : body.phone,
            orderId,
            orderType,
            chargeId,
            keytaPointAmount : body.keyta_point_amount || 0,
            ewalletAmount : body.ewallet_amount || 0,
            statusPembayaran 
        }
    }
}