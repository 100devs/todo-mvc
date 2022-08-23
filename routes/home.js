const express = require('express') // use express
const router = express.Router() //  ???
const homeController = require('../controllers/home') //where to find homeController

router.get('/', homeController.getIndex)  // for a get request made to this route use homeController (defined on line three)

module.exports = router  //export this to other files using router