const express = require('express')
const { route } = require('./models/home')
const router = express.Router()
const home = require('./models/home')
const todos = require('./models/todos')
const users = require('./models/users')

router.use('/todos', todos)
router.use('/users', users)
router.use('/', home)

module.exports = router
