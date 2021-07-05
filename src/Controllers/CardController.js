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
    
    await Card.findOne({cardID: req.body.cardID},(err, card) =>{
        if (err) {
            res.status(400).json()
        }
    })

    const card = new Card({
        cardID: req.body.cardID,
        owner: req.body.owner,
        permission: req.body.permission
    })

    await card.save()
    .then((card) =>{
        res.status(200).json(card)
    })
    .catch(err => console.log(err))
}

exports.getCard = function (req, res) {
    res.send("Get spesific cards")
}

exports.updateCard = function (req, res) {
    res.send("Update a card")
}

exports.deleteCard = function (req, res) {
    res.send("Delete a card")
}

exports.checkPermission = function (req, res) {
    res.send("Permission a card")
}