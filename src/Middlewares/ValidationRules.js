const { body } = require('express-validator');

exports.CreateCard = [
    body('owner').isString().exists(),
    body('cardID').isString().isNumeric().exists(),
    body('permission').isBoolean().optional()
]

