import removeTaskForm from './removeTaskForm';
import Todo from './todo';
//import createPriorityMenuButton from './priorityMenuButton';
//import todoMenu from './todoMenu';
import todoDom from './todoDOM';
import saveData from './save';

export default function handleNewTodo(){
    if(!_validate()){
        console.log("not valid");
        return;
    }

    _createNewTodo();

    saveData();
    
    removeTaskForm();
}


function _validate(){
	let isValid = false;
	if(document.forms["taskForm"]["task"].value){
		isValid = true;
	}
	return isValid;
}

function _createNewTodo(){
    console.log("createNewTodo");
	//get values;
	let task = document.forms["taskForm"]["task"].value;

	let sel = document.forms["taskForm"]["selectPriority"];
	let priority = sel.options[sel.selectedIndex].text;
	// for now this date value will due
	let today = new Date();
    console.log(today.toDateString());
	let todo = new Todo(task, today.toDateString(), priority, false);
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


