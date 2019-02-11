var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

function displayTodos() {
  console.log("My Todos:", todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
