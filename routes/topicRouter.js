// the router file contains all the routes that can be accessed
const topicController = require('../controllers/topicController.js')

// create a Router object from express
const router = require('express').Router()

// add a new topic to the table
router.post('/', topicController.addTopic)

// access all the topic in the table
router.get('/', topicController.getAllTopics)

// access one topic by id
router.get('/:id', topicController.getOneTopic)

// modify one topic by id
router.put('/:id', topicController.updateTopic)

// delete one topic by id
router.delete('/:id', topicController.deleteTopic)

module.exports = router