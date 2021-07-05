const {validationResult} = require('express-validator')

exports.validateRequest = function (req,res,next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
}

