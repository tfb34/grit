import saveData from './save';
// todo.js

/*
 * Summary: Returns an new instance of Todo
 * 
*/
export default function Todo(task,dueDate,priority,completion,project){
  this._task = task;
  this._dueDate = dueDate;
  this._priority = priority;
  this._completion = completion;//false
  this._project = project; 
}

// GET functions
Todo.prototype.getTask = function(){
  return this._task;
}

Todo.prototype.getDueDate = function(){
  return this._dueDate;
}

Todo.prototype.getPriority = function(){
  return this._priority;
}

Todo.prototype.getCompletionStatus = function(){
  return this._completion;
}
Todo.prototype.getProject = function(){
  return this._project;
}
// EDIT functions
Todo.prototype.changeTask = function(newTask){
  this._task = newTask;
}
Todo.prototype.changePriority = function(newPriority){
  this._priority = newPriority;
  saveData();
}

Todo.prototype.changeDueDate = function(newDueDate){
  this._dueDate = newDueDate;
  saveData();
}

Todo.prototype.changeCompletionStatus = function(){
  if(this._completion){
    this._completion = false;
  }
  else{
    this._completion = true;
  }
  saveData();
}
