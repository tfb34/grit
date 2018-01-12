// todo.js
/*
 * Summary: Returns an new instance of Todo
 * 
*/
export default function Todo(task,dueDate,priority){
  this._task = task;
  this._dueDate = dueDate;
  this._priority = priority || "priority 4";
  this._completion = false;
}

// GET functions
Todo.prototype.getTask = function(){
  return this._name;
}

Todo.prototype.getDueDate = function(){
  return this._dueDate;
}

Todo.prototype.getPriority = function(){
  return this._priority;
}

Todo.prototype.getCompletion = function(){
  return this._completion;
}
// EDIT functions
Todo.prototype.changeTask = function(newTask){
  this._task = newTask;
}

Todo.prototype.changeDueDate = function(newDueDate){
  this._dueDate = newDueDate;
}

Todo.prototype.changeCompletion = function(){
  if(this._completion){
    this._completion = false;
  }
  else{
    this._completion = true;
  }
}
