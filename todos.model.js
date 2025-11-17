const todos = new Map();

let id = 1;

const todo = {
  id: 1,
  task: "Learning node js",
  completed: false,
  dueDate: new Date(),
};

// intialize this above data
todos.set(todo.id, todo);

// todo :: 
function existsTodoId(id) {
    return todos.has(id);
}

// todo :: get all todos

function getAllTodos() {
  return Array.from(todos.values());
}

// todo :: get one todo [id]
function getTodoId(id) {
  return todos.get(id);
}
// todo :: Create todo

function addNewTodo(newTodo) {
    id++;
    const todoToAdd = {
      id,
      completed: false,
      dueDate: new Date(),
      ...newTodo,
    };
    todos.set(id, todoToAdd);
    return todoToAdd;
  }

// todo :: update | edit todo [id]

// todo :: update | edit todo [id]
function updateTodo(id, updatedTodo) {
    const targetTodo = todos.get(id);
    if (targetTodo) {
      Object.assign(targetTodo, updatedTodo);
      return targetTodo;
    }
    return null;
  }
  
// todo :: mark todo as completed [id]
function completedTodo(id) {
    const todo = todos.get(id);
    if (todo) {
      todo.completed = true;
      return todo;
    }
    return null;
  }
  
// todo :: delete  todo [id]

function deleteTodo(id) {
  const success = todos.delete(id);
  id--;
  return success;
}

module.exports = {
    existsTodoId,
    getTodoId,
    getAllTodos,
    addNewTodo,
    completedTodo,
    deleteTodo,
    updateTodo

}