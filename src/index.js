import Todo from './todo';
import Project from './project';
import projects from './allProjects';
import showTaskForm from './showTaskForm';
import removeTaskForm from './removeTaskForm';
import renderPage from './renderPage';
import hideShowMenu from './hideShowMenu';
import handleNewTodo from './newTodoDOM';
/*put a max on project Name length*/

let priorities = ["priority 4", "priority 3", "priority 2", "priority 1"];


/*
 *add new PROJECT FUNCTIONALITY
 * 1. create an 'Add project' button
   2. create a form to add a new project< 2 inputs(type: text, button), 1 a link for cancel>
   2. private onclick, showProjectForm() used by 'add project' public
   3. private onclick, removeProjectForm() used by 'cancel' AND 'handleNewProject'- both public
   4. handleNewProject() ~> public function
      validateProject first
      create new project
      push project in projects
      updateProjectDOMList() summary: appends new project to DOM
      call hideShowMenu() // close menu
      renderPage(projectName);
*/


// creates a DOM list of current projects
// should be called ONCE at the start of
// page load. localstorage may have to work with this later
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
		projectDOMList();
	}
};






/*global scope aka available for use in index.html*/

window.removeTaskForm = removeTaskForm;
window.showTaskForm = showTaskForm;
window.handleNewTodo = handleNewTodo;
window.projects = projects;
window.hideShowMenu = hideShowMenu;
window.renderPage = renderPage;

/* WORK ON PROJECT MENU*/


/*render Page needs access to hideShowMenu()*/






