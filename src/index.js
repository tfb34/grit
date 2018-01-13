import Todo from './todo';
import Project from './project';
import projects from './allProjects';
import showTaskForm from './showTaskForm';
import removeForm from './removeForm';

let priorities = ["priority 4", "priority 3", "priority 2", "priority 1"];
/*DOM functions*/

/*features projects as list*/
function hideShowMenu() {
	console.log("hideShowMenu called");
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


// creates a DOM list of current projects
// should be called ONCE at the start of
// page load
function projectDOMList(){
	console.log("projectDOMList");
 	let ul = document.createElement("ul");
 	ul.setAttribute("id","projectList");
 	for(let i = 0;i<projects.list.length;i++){
 		let li = document.createElement("li");
 		li.setAttribute("id",projects.list[i].getName());
 		let p = document.createElement("p");
 		p.innerHTML = projects.list[i].getName();
 		li.appendChild(p);
 		ul.appendChild(li);
 	}
 	
 	let e = document.getElementById("menu");
 	e.appendChild(ul);
 	e.style.display ="none";
}







document.onreadystatechange =function(){
	if(document.readyState === "complete"){
		// setup add task button
		let b = document.getElementById("AddTaskButton");
		b.setAttribute("onclick","showTaskForm()");
		projectDOMList();
	}
};

/*private used by createNewTodo*/
function validateForm(){
	let isValid = false;
	if(document.forms["taskForm"]["task"].value){
		isValid = true;
	}
	return isValid;
}


function createNewTodo(){
	if(!validateForm()){
		console.log("not valid");
		return;
	}
	//get values;
	let task = document.forms["taskForm"]["task"].value;

	let sel = document.forms["taskForm"]["selectPriority"];
	let priority = sel.options[sel.selectedIndex].text;
	// for now this date value will due
	let today = new Date();
	date = today.toDateString();
	let todo = new Todo(task, date, priority);
	console.log(todo);// debugging
	return todo;
}
/*global scope aka available for use in index.html*/

window.removeForm = removeForm;
window.showTaskForm = showTaskForm;
window.createNewTodo = createNewTodo;
window.projects = projects;
window.hideShowMenu = hideShowMenu;
/* WORK ON PROJECT MENU*/