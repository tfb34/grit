import Todo from './todo';
import Project from './project';
import projects from './allProjects';
import showTaskForm from './showTaskForm';
import removeTaskForm from './removeTaskForm';
import renderPage from './renderPage';
import hideShow from './hideShowMenu';
import handleNewTodo from './newTodoDOM';
import newProjectHandler from './newProjectHandler';
import buildProjectMenu from './buildProjectMenu';


let priorities = ["priority 4", "priority 3", "priority 2", "priority 1"];

/*
    Allow user to change priority of task
    1. create an icon to click on
    2. when hovering over tasktext show icon
    3.activate a listener for a click
    4. showPriorityForm, basically 4 icons/flags/wtv
    5.  when user clicks, call function
    6. this.id should return what was clicked
    7. if a flag/wtv was clicked update that element only

    P.S you may need to change the id names bc all of them are the same



/*window*/
document.onreadystatechange =function(){
	if(document.readyState === "complete"){
		buildProjectMenu();
	}
};






/*global scope aka available for use in index.html*/

window.removeTaskForm = removeTaskForm;
window.showTaskForm = showTaskForm;
window.handleNewTodo = handleNewTodo;
window.projects = projects;
window.hideShow = hideShow;
window.renderPage = renderPage;
window.newProjectHandler = newProjectHandler;
/* WORK ON PROJECT MENU*/


/*render Page needs access to hideShowMenu()*/






