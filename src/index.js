import Todo from './todo';
import Project from './project';
import projects from './allProjects';
import showTaskForm from './showTaskForm';
import removeForm from './removeForm';

/*put a max on project Name length*/

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

 		li.setAttribute("onclick","renderPage(this.id)");
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


function handleNewTodo(){
    if(!validateForm()){
        console.log("not valid");
        return;
    }
    createNewTodo();
    removeForm();
}

function createNewTodo(){
    console.log("createNewTodo");
	//get values;
	let task = document.forms["taskForm"]["task"].value;

	let sel = document.forms["taskForm"]["selectPriority"];
	let priority = sel.options[sel.selectedIndex].text;
	// for now this date value will due
	let today = new Date();
	date = today.toDateString();
	let todo = new Todo(task, date, priority);
	//add new element to project
    let project = projects.get(document.getElementById("project").innerHTML);
    project.addTodo(todo);
    updateTodoDOMList(todo)
}
/*global scope aka available for use in index.html*/

window.removeForm = removeForm;
window.showTaskForm = showTaskForm;
window.handleNewTodo = handleNewTodo;
window.projects = projects;
window.hideShowMenu = hideShowMenu;
window.renderPage = renderPage;

/* WORK ON PROJECT MENU*/


/*render Page needs access to hideShowMenu()*/

/*
    <li class="clearfix todo">
                <div class="taskStatus"></div>
                <p>Get groceries for dinner</p>
                <p>Chores</p>
            </li>
*/
function renderPage(projectName){
    console.log("You clicked on "+projectName);
    /*
        1. close menu.done
        2. change header to project name
        3. remove current list and propagate div
            with current project's list
            propogateDOMtaskList()
    */
    hideShowMenu();
    let x = document.getElementById('project');
    if(x.innerHTML === projectName){
        return;
    }
    cleanPage();
    x.innerHTML = projectName;
    taskDOMList(projectName);

}

function cleanPage(){
    let taskList = document.getElementById('list');
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    document.getElementById('date').innerHTML = "";
}


function taskDOMList(projectName){
    console.log("taskDOMList called...");
    let project = projects.get(projectName);
    let todos = project.getTodos();
    for(let i=0;i<todos.length;i++){

        let li = document.createElement("li");
        li.setAttribute("class","clearfix todo");

        let div = document.createElement("div");
        div.setAttribute("class","taskStatus");

        let p = document.createElement("p");
        console.log("line 155");
        p.innerHTML = todos[i].getTask();

        li.appendChild(div);
        li.appendChild(p);
        document.getElementById("list").appendChild(li);
    }

}


function updateTodoDOMList(todo){
    let li = document.createElement("li");
    li.setAttribute("class","clearfix todo");

    let div = document.createElement("div");
    div.setAttribute("class","taskStatus");

    let p = document.createElement("p");
    p.innerHTML = todo.getTask();

    li.appendChild(div);
    li.appendChild(p);
    document.getElementById("list").appendChild(li);
}


