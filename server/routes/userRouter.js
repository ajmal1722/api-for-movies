const express = require('express');
const route = express()
const homeRoute = require('../controller/userController');

route.get('/', homeRoute)

module.exports = route