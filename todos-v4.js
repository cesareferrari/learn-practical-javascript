var todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My Todos:", this.todos)
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

todoList.displayTodos();
todoList.addTodo('Buy milk');
todoList.changeTodo(0, 'Buy apples');
todoList.toggleCompleted(0);
todoList.toggleCompleted(0);
