import removeTaskForm from './removeTaskForm';
import Todo from './todo';
//import createPriorityMenuButton from './priorityMenuButton';
//import todoMenu from './todoMenu';
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
    //console.log(str+" valid? "+isValid(str));
    //parse string, if invalid
    let v;
    if(v = parse(str)){
        console.log(v);
        console.log(v.getDate());
        if(v.getDate()){
            return true;
        }
    }
    console.log("not valid date");
    //let v = isValid(str);
    //console.log(v);
    //return isValid(str);
}


function _createNewTodo(){
    console.log("createNewTodo");
	//get values;
	let task = document.forms["taskForm"]["task"].value;

	let sel = document.forms["taskForm"]["selectPriority"];
	let priority = sel.options[sel.selectedIndex].text;
	// for now this date value will due
    let schedule = document.forms["taskForm"]["date"].value;
    console.log("schedule = "+schedule);


    if(getYear(schedule) < getYear(new Date())){
        console.log("yes!!!");
        schedule = getMonth(schedule)+1 + " "+getDate(schedule)+" "+getYear(new Date());
        console.log(schedule);
    }
    //if(schedule){// check if date is valid using date-fns in _validate()
        // transform given date
    //}else{
        //today = date fns today's date
    //}
	//let today = new Date();
    //console.log(today.toDateString());
    // the line below must change today.toDateString()
	//let todo = new Todo(task, today.toDateString(), priority, false);
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
    /*Get identifier*/
    let project = projects.get(document.getElementById("project").innerHTML);
    let id = project.getTodos().length - 1;
    todoDom.renderTodoElement(id,todo);
}


