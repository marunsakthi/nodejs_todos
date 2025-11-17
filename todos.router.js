const express = require("express");

const {
  httpAddNewTodo,
  httpDeleteTodo,
  httpDoneTodo,
  httpGetAllTodos,
  httpGetTodo,
  httpUpdateTodo,
} = require("./todos.controller");

const todoRouter = express.Router();

todoRouter.get('/',httpGetAllTodos)
todoRouter.get('/:id',httpGetTodo)
todoRouter.post('/',httpAddNewTodo)
todoRouter.put('/:id',httpUpdateTodo)
todoRouter.delete('/:id',httpDeleteTodo)
todoRouter.patch('/:id',httpDoneTodo)


module.exports = todoRouter;

