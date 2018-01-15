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
/*put a max on project Name length*/

let priorities = ["priority 4", "priority 3", "priority 2", "priority 1"];

/*
    fix navbar
*/


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






