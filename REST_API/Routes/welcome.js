const express = require('express')
const router = express.Router()

const WelcomeController = require('../Controllers/welcomeController');

// Welcome message when getting `/api/`
router.get('/', WelcomeController.welcome);

module.exports = router