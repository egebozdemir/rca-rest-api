const express = require('express');
const CardController = require('../Controllers/CardController');
const Validator  = require('../Middlewares/Validator');
const ValidationRules = require('../Middlewares/ValidationRules');
const router = express.Router();

router.get('/',CardController.getCards)

router.post('/',ValidationRules.CreateCard,Validator.validateRequest, CardController.createCard)

router.get('/:cardID', CardController.getCard)

router.put('/:cardID',CardController.updateCard)

router.delete('/:cardID',CardController.deleteCard)

router.get('/:cardID/permission',CardController.checkPermission)

module.exports = router;