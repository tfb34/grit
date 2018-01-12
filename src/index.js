import Todo from './todo';
import Project from './project';
import projects from './allProjects';

let priorities = ["priority 1", "priority 2", "priority 3", "priority 4"];
/*DOM functions*/

/*Returns a new task form*/

function createTaskForm(){
	console.log("creating form");
	let form = document.createElement("form");
	// task input
	let inputTask = document.createElement("input");// task input
	inputTask.setAttribute("type", "text");
	inputTask.setAttribute("placeholder","Practice guitar for 30mins");
	// priority select list
	let selectPriority = document.createElement("select");// priority 'input'
	selectPriority.id = "selectPriority";

	for(let i = 0; i<priorities.length; i++){
		let option = document.createElement("option");
		option.setAttribute("value",priorities[i]);
		option.text = priorities[i];
		selectPriority.appendChild(option);
	}
	// submit button
	let inputSubmit = document.createElement("input");
	inputSubmit.setAttribute("type","button");
	inputSubmit.id = "submitTaskButton";
	inputSubmit.setAttribute("value","Add Task");
	// cancel button
	let cancel = document.createElement("a");
	cancel.setAttribute("href","#");
	cancel.innerHTML = "Cancel";
	cancel.setAttribute("onclick","removeForm()");

	// put everything together
	form.appendChild(inputTask);
	form.appendChild(selectPriority);
	form.appendChild(inputSubmit);
	form.appendChild(cancel);

	return form;
};

function showForm(form){
	console.log("showing Form");
	document.getElementsByTagName('body')[0].appendChild(form);
};

function showTaskForm(){
	let form = createTaskForm();
	showForm(form);
}

function removeForm(){
	let body = document.getElementsByTagName('body')[0];
	let form = document.getElementsByTagName('form')[0];
	body.removeChild(form);
}

document.onreadystatechange =function(){
	if(document.readyState === "complete"){
		// setup add task button
		let b = document.getElementById("AddTaskButton");
		b.setAttribute("onclick","showTaskForm()");
	}
};

/*global scope aka available for use in index.html*/

window.removeForm = removeForm;
window.showTaskForm = showTaskForm;