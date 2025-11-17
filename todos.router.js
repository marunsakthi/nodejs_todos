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
todoRouter.post('/:id',httpUpdateTodo)
todoRouter.delete('/:id',httpDeleteTodo)

module.exports = todoRouter;