const { create } = require('../models/ToDo')
const ToDo = require('../models/ToDo')

const todoController = require('../models/ToDo')

module.exports = {

    list(req, res){
        const todos = ToDo.list()
        return res.json(todos)
    },

    create(req, res){
        const todo = req.body
        ToDo.create(todo)
        return res.json(todo)
    }
}