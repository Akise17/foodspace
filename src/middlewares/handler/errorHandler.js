module.exports = function(err, req, res, next) {
    if (err) {
      if (err.status) {
        res.status(err.status).json({
          meta: {
            code: err.status,
            message: err.message,
          },
          data: []
        });
      } else if (err.response && err.response.data) {
        res.status(400).json({
          meta: {
            code: 400,
            message: err.response.data.error,
          },
          data: []
        });
      } else {
        res.status(404).json({
          meta: {
            code: 404,
            message: `${err.name}: ${err.message}`,
          },
          data: []
        });
      }
    }
  };