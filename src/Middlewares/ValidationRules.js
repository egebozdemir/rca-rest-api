const { body, param } = require('express-validator');

exports.CreateCard = [
    body('owner').isString().exists(),
    body('cardID').isString().isNumeric().exists(),
    body('permission').isBoolean().optional()
]

exports.GetCard = [
    param("cardID").isString().isNumeric().exists(),
]

exports.UpdateCard = [
    param("cardID").isString().isNumeric().exists(),
]


