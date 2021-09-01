const express = require('express')
const router = express.Router()

const User = require('../models/UserModel')

const UserController = require('../Controllers/userController');
const getUserMiddleware = require('../Middlewares/get-user')

/* ---------------
      ROUTES
--------------- */

// Getting All
router.get('/all', UserController.get_all_users);

// Create one user
router.post('/create', UserController.create_user);

// Delete one user
router.delete('/del/:id', getUserMiddleware.getUser, UserController.delete_user_by_id);

module.exports = router