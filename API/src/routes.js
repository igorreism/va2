const express = require('express')

const routes = express.Router()

const TodoController = require('./controllers/TodoController')

routes.get('/dressrobe', TodoController.list)
routes.post('/dressrobe', TodoController.create)

module.exports = routes