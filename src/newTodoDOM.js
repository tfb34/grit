import removeTaskForm from './removeTaskForm';
import Todo from './todo';

import todoDom from './todoDOM';
import saveData from './save';
const isValid = require('date-fns/is_valid');
const parse = require('date-fns/parse');
const getMonth = require('date-fns/get_month');
const getDate = require('date-fns/get_date');
//const isBefore = require('date-fns/is_before');

export default function handleNewTodo(){
    if(!_validate()){
        console.log("not valid");
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
    console.log("_validate called");
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
    console.log("_validTask called");
    let bool = false;
    if(str){
        bool = true;
    }
    return bool;
}

function _validSchedule(str){
    console.log("_validSchedule called");
    if(str.length === 0){// empty, no due date
        return true;
    }
    console.log("about to call isValid");
    console.log(str);
    
    if(getYear(str) < getYear(new Date()) || !getYear(str)){// chrome, returns 2001, firefox return NaN
        str+= " 2018";
        console.log("Added 2018 at end of str.."+str);
    }

    let v;
    if(v = parse(str)){
        console.log(v);
        console.log(v.getDate());
        if(v.getDate()){
            return true;
        }
    }
    console.log("not valid date");
    return false;
}


function _createNewTodo(){
    console.log("createNewTodo");
	
	let task = document.forms["taskForm"]["task"].value;

	let sel = document.forms["taskForm"]["selectPriority"];
	let priority = sel.options[sel.selectedIndex].text;
    let schedule = document.forms["taskForm"]["date"].value;
    console.log("schedule = "+schedule);

    if(schedule.length >0){
        if(getYear(schedule) < getYear(new Date()) || !getYear(schedule)){// chrome, returns 2001, firefox return NaN
            schedule+= " 2018";
            console.log("Added 2018 at end of str.."+schedule);
        }
    }
    
    let todo = new Todo(task, schedule, priority, false);

    console.log(todo);
	//add new element to project
    let project = projects.get(document.getElementById("project").innerHTML);
    console.log("line39");
    project.addTodo(todo);
    console.log("line41");
    generateTodoElement(todo);
}

function generateTodoElement(todo){
    console.log("generateTodoElement");
    let project = projects.get(document.getElementById("project").innerHTML);
    let id = project.getTodos().length - 1;
    todoDom.renderTodoElement(id,todo);
}


