var todoList = {
  todos: [],
  displayTodos: function() {

    if (this.todos.length === 0) {
      console.log('Your Todo list is empty!');
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
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
todoList.addTodo('Buy apples');
todoList.addTodo('Get gas');
todoList.toggleCompleted(1);
todoList.toggleCompleted(2);
