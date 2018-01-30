import Todo from './todo';

/*
 *   Summary: Returns a new instance of a 'Project'
 *   @params: name
 *   @properties: list of todos , name 
*/

export default function Project(name){
    this._name = name;
    this._todos = [];
}

// GET functions
Project.prototype.getName = function(){
    return this._name;
}

Project.prototype.getTodos = function(){
    return this._todos;
}

// EDIT functions
Project.prototype.changeName = function(newName){
    this._name = newName;
}

Project.prototype.addTodo = function(todo){
    this._todos.push(todo);
}



