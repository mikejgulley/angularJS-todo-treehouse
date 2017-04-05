'use strict';

angular.module('todoListApp')
  .service('dataService', function($http) {
    // this refers to the service
    this.helloConsole = function() {
      console.log('This is the helloCosole service!');
    };
    
    this.getTodos = function(callback) {
      // $http.get returns a promise
      // A promise represents the eventual result of an asynchronous operation. It is a placeholder into which the successful result value or reason for failure will materialize.
      $http.get('mock/todos.json')
        .then(callback);
    };
    
    this.deleteTodo = function(todo) {
      console.log('The ' + todo.name + ' todo has been deleted!');
      // other logic
    };
    
    this.saveTodos = function(todos) {
      console.log(todos.length + ' todos have been saved!');
      // other logic
    };
  });