const express = require('express')
const User = require('../models/UserModel')

/* ---------------
Return informations of all Users inside the Database's table if worked and
specific error message if didnt, in json
--------------- */

exports.get_all_users = async(req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

/* ---------------
Create a User and return informations of new User if worked and
specific error message if didnt, in json
--------------- */
exports.create_user = async(req, res) => {

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        description: req.body.description
    });

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

/* ---------------
Delete a specific User given by {id} and return informations of deleted User if worked and
specific error message if didnt, in json
--------------- */

/**
 * 47
 * @param {*} req
 * @param {*} res 
 */

exports.delete_user_by_id = async(req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}