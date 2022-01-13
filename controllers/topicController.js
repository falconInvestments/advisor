// require the db created in the index file
const db = require('../models/index')

// get the topics model
const Topic = db.Topics

// main work
const addTopic = async (req, res) => {
    let input_data = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
     }
     // using the builtin 'create' function on Topic Model
     const topic = await Topic.create(input_data)
     
     // send a 200 response with the created entry
     res.status(200).send(topic)
}

const getAllTopics = async (req, res) => {

    // using the builtin 'findAll' function on Topic Model
    let topics = await Topic.findAll({
        include: db.Tips
    });
    res.status(200).send(topics)
}

const getOneTopic = async (req, res) => {
    
    // getting the id from the params in the req
    let id = req.params.id

    // using the builtin 'findAll' function on Topic Model
    let topics = await Topic.findOne({where: {id: id}, include: db.Tips})
    res.status(200).send(topics)
}

const updateTopic = async (req, res) => {
    let id = req.params.id

    // using the builtin 'findAll' function on Topic Model
    const topic = await Topic.update(req.body, { where: {id: id}})
    res.status(200).send(topic)
}

const deleteTopic = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Topic Model
    await Topic.destroy({where :{id: id}})
    res.status(200).send(`topic with id: ${id} is deleted`)
}

// export all the controller functions
module.exports = {
    addTopic,
    getAllTopics,
    getOneTopic,
    updateTopic,
    deleteTopic
}
