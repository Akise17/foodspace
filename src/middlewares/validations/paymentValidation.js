const {body} = require('express-validator');

module.exports = {
  validate: (method) => {
    switch (method) {
      case 'create': {
        return [
          body('amount', 'Amount is required').exists(),
          body('ewallet', 'Ewallet is required').exists(),
          body('phone', 'Phone is required').exists()
        ];
      };
    }
  },
};