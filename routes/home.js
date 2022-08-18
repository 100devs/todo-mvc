const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//sees route and tells which controller to use; here using home controller;
//main route because '/'; sends to home.js controller;
router.get('/', homeController.getIndex)

module.exports = router