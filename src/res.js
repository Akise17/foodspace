module.exports = {
    responses: (statusCode, message, value, res) => {
        const payload = {
          meta: {
            code: statusCode,
            message: message,
          },
          data: value,
        };

        res.status(statusCode).json(payload);
      },
}