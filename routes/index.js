const express = require('express')
const { route } = require('./models/home')
const router = express.Router()
const home = require('./models/home')
const todos = require('./models/todos')
const users = require('./models/users')
const { authenticator } = require('../middleware/auth')

router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router
