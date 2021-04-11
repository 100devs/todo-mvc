// file sees the route and tells what controller to run
// look at url and determine what controller to run!
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// request coming in on main route and use homeController in controller file
router.get('/', homeController.getIndex) 

module.exports = router