'use strict'; // makes sure file is interpreted in strict mode by JS interpreter

angular.module('todoListApp')
  .controller('mainCtrl', function($scope, dataService) {
    $scope.helloConsole = dataService.helloConsole;
    
    $scope.addTodo = function() {
      var todo = {name: "This is a new todo."};
      $scope.todos.unshift(todo);
    };
    
    dataService.getTodos(function(response) {
      console.log(response.data);
      $scope.todos = response.data;
    });
    
    $scope.deleteTodo = function(todo, $index) { // can be $index or index
      dataService.deleteTodo(todo);
      $scope.todos.splice($index, 1); // can be $index or index - in HTML must be $index
    };
    
    $scope.saveTodos = function() {
      var filteredTodos = $scope.todos.filter(function(todo) {
        if(todo.edited) {
          return todo;
        };
      })
      dataService.saveTodos(filteredTodos);
    };
  })