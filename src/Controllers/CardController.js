var Card = require("../Models/Card")


exports.getCards = function (req, res) {
    Card.find().then(cards =>{
        res.status(200).json(cards.map(card => {
            return {
                id: card._id,
                owner: card.owner,
                cardID: card.cardID,
                permission: card.permission
            }
        }))
    })
    .catch(err =>{
        res.status(500).json(err)
    })
}

exports.createCard = async function (req, res) {
    
    var card = await Card.findOne({cardID: req.body.cardID})
    if(card){
        return res.status(400).json({error:"Already exists!"})
    }

    const newCard = new Card({
        cardID: req.body.cardID,
        owner: req.body.owner,
        permission: req.body.permission
    })

    await newCard.save()
    .then((card) =>{
        return res.status(200).json(card)
    })
    .catch(err => console.log(err))
}

exports.getCard = async function (req, res) {
    const cardID = req.params.cardID
    const card = await Card.findOne({cardID: cardID})

    if(card){
        return res.status(200).json(card)
    }else{
        return res.status(404).json({})
    }
}

exports.updateCard = async function (req, res) {
    const cardID = req.params.cardID
    const card = await Card.findOne({cardID: cardID})
    if (card) {
        const updatedCard = await Card.findOneAndUpdate({cardID: cardID},req.body,{new:true,useFindAndModify:false}).catch(err => console.log(err))
        return res.status(200).json(updatedCard)
    }else{
        return res.status(404).json({error:"Card not found!"})
    }
}

exports.deleteCard = async function (req, res) {
    await Card.findOneAndDelete({cardID:req.params.cardID}).then(card =>{
        if(card){
            return res.status(200).json(card)
        }else{
            return res.status(404).json({error:"Card not found!"})
        }
        
    })
    .catch(err => console.log(err))
}

exports.checkPermission = async function (req, res) {
    const card = await Card.findOne({cardID:req.params.cardID})
    if (card == null) {
        return res.status(200).json({permission:false})
    }
    return res.status(200).json({permission:card.permission})
}