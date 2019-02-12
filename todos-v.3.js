var todoList = {
  todos: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
  displayTodos: function() {
    console.log("My Todos:", this.todos)
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

todoList.displayTodos();
todoList.addTodo('Buy milk');
todoList.changeTodo(0, 'Buy apples');
todoList.deleteTodo(2);

