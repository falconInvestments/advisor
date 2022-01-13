// require the db created in the index file
const db = require('../models/index')

// get the Tips model
const Tip = db.Tips;

// main work
const addTip = async (req, res) => {
    let input_data = {
        label: req.body.label,
        info: req.body.info,
     }
     // using the builtin 'create' function on Tip Model
     const tip = await Tip.create(input_data)

     // send a 200 response with the created entry
     res.status(200).send(tip)
}

const getAllTips = async (req, res) => {

    // using the builtin 'findAll' function on Tip Model
    let tips = await Tip.findAll({})
    res.status(200).send(tips)
}

const getOneTip = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id

    // using the builtin 'findAll' function on Tip Model
    let tips = await Tip.findOne({where: {id: id}})
    res.status(200).send(tips)
}

const updateTip = async (req, res) => {
    let id = req.params.id

    // using the builtin 'findAll' function on Tip Model
    const tip = await Tip.update(req.body, { where: {id: id}})
    res.status(200).send(tip)
}

const deleteTip = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Tip Model
    await Tip.destroy({where :{id: id}})
    res.status(200).send(`tip with id: ${id} is deleted`)
}

// export all the controller functions
module.exports = {
    addTip,
    getAllTips,
    getOneTip,
    updateTip,
    deleteTip
} 
