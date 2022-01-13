// the router file contains all the routes that can be accessed
const tipController = require('../controllers/tipController.js')

// create a Router object from express
const router = require('express').Router()

// add a new tip to the table
router.post('/', tipController.addTip)

// access all the tip in the table
router.get('/', tipController.getAllTips)

// access one tip by id
router.get('/:id', tipController.getOneTip)

// modify one tip by id
router.put('/:id', tipController.updateTip)

// delete one tip by id
router.delete('/:id', tipController.deleteTip)

module.exports = router