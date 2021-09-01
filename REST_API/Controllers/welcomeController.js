const express = require('express')

exports.welcome = async(req, res) => {
    res.json("Bienvenue sur l'API officiel de KODLY")
}