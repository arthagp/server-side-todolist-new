const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController')

router.get('/all-todos', TodoController.getAllTodos);
router.post('/create-todo', TodoController.createTodo);
router.put('/update-todo/:todoId', TodoController.updateTodo)
router.delete('/delete-todo/:todoId', TodoController.deleteTodo)

module.exports = router