const {
  existsTodoId,
  getTodoId,
  getAllTodos,
  addNewTodo,
  completedTodo,
  updateTodo,
  deleteTodo,
} = require("../../models/todos.model");

function httpGetAllTodos(req, res) {
  return res.status(200).json(getAllTodos());
}

function httpGetTodo(req, res) {
  const todoId = Number(req.params.id);
  if (!existsTodoId(todoId)) {
    return res.status(404).json({
      error: "Task not found",
    });
  }
  return res.status(200).json(getTodoId(todoId));
}
function httpAddNewTodo(req, res) {
  const todo = req.body;
  if (!todo.task) {
    return res.status(400).json({
      error: "Missing required todo property",
    });
  }

  const savedTodo = addNewTodo(todo);
  return res.status(201).json(savedTodo);
}

function httpDeleteTodo(req, res) {
  const todoId = Number(req.params.id);
  if (!existsTodoId(todoId)) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  const deletedTodo = deleteTodo(todoId);
  return res.status(200).json(deletedTodo);
}

function httpUpdateTodo(req, res) {
  const todoId = Number(req.params.id);
  const updatedTodo = req.body;

  if (!existsTodoId(todoId)) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  const updated = updateTodo(todoId, updatedTodo);

  if (updated) {
    return res.status(200).json(updated);
  } else {
    return res.status(500).json({
      error: "Failed to update todo",
    });
  }
}

function httpDoneTodo(req, res) {
  const todoId = Number(req.params.id);

  if (!existsTodoId(todoId)) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  const completed = completedTodo(todoId);
  if (completed) {
    return res.status(200).json(completed);
  } else {
    return res.status(500).json({
      error: "Failed to mark todo as done",
    });
  }
}

module.exports = {
  httpAddNewTodo,
  httpDeleteTodo,
  httpDoneTodo,
  httpGetAllTodos,
  httpGetTodo,
  httpUpdateTodo,
};