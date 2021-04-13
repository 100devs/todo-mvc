// we only doing one thing -- files sees the route and tells what controller handles the request
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// the controller that handles the request -- handles our home/main pages
// determines that requests made on the main router are set to the home controller using the getIndex method of the home controller 
router.get('/', homeController.getIndex) 

module.exports = router