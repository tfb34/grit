import removeTaskForm from './removeTaskForm';
import Todo from './todo';

import todoDom from './todoDOM';
import saveData from './save';
const isValid = require('date-fns/is_valid');
const parse = require('date-fns/parse');
const getMonth = require('date-fns/get_month');
const getDate = require('date-fns/get_date');
const isToday = require('date-fns/is_today');
const getYear = require('date-fns/get_year');
//const isBefore = require('date-fns/is_before');

export default function handleNewTodo(){
    if(!_validate()){
        return;
    }

    _createNewTodo();

    saveData();
    
    removeTaskForm();
}

/*
 * a)check if task is empty &&
 * b) check if date is valid. empty date means no schedule, still valid.
 *
 */
function _validate(){
	let isValid = false;
    let task = document.forms["taskForm"]["task"].value;
    let schedule = document.forms["taskForm"]["date"].value;

    if(_validTask(task) && _validSchedule(schedule)){
        isValid = true;
    }
    return isValid;
}

// empty string is not valid
function _validTask(str){
    let bool = false;
    if(str){
        bool = true;
    }
    return bool;
}

function _validSchedule(str){
    
    if(str.length === 0){// empty, no due date
        return true;
    }
    
    // created a date input instead of allowing user to input string for date
    // So this if statement should always return false for now
    if(getYear(str) < getYear(new Date()) || !getYear(str)){// chrome, returns 2001, firefox return NaN
        str+= " 2018";
    }

    let v;
    if(v = parse(str)){
        if(v.getDate()){
            return true;
        }
    }
    return false;
}


// create new todo and add to a project
function _createNewTodo(){
	
	let task = document.forms["taskForm"]["task"].value;

	let sel = document.forms["taskForm"]["selectPriority"];
	let priority = sel.options[sel.selectedIndex].text;
    let schedule = document.forms["taskForm"]["date"].value;

    if(schedule.length >0){
        if(getYear(schedule) < getYear(new Date()) || !getYear(schedule)){// chrome, returns 2001, firefox return NaN
            schedule+= " 2018";
        }
    }

    let projectN = document.getElementById("project").innerHTML;
    if(projectN === "Today"){
        projectN = "Inbox";
    }

    let todo = new Todo(task, schedule, priority, false, projectN);

    let project = projects.get(projectN);
    
    // add new element to project
    project.addTodo(todo);

    if(isToday(schedule)){
        project = projects.get("Today");
        project.addTodo(todo);
    }
    
    generateTodoElement(todo);
}


function generateTodoElement(todo){

    let project = projects.get(document.getElementById("project").innerHTML);
    if(project.getName()==="Today" && !isToday(todo.getDueDate())){
        return;
    }
    let id = project.getTodos().length - 1;
    todoDom.renderTodoElement(id,todo);
}


