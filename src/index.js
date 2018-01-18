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
//import todoDOM from './todoDOM';

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

// onclick to each option in todoMenu, with specific id
// when clicked -> toggleMenu and update todo status backend and frontend

//onclick, toggleMenu  on todomenubutton */


function changeToPriority4(id){
    changePriority(4,id)
}

function changeToPriority3(id){
    changePriority(3,id)
}
function changeToPriority2(id){
    changePriority(2,id)
}
function changeToPriority1(id){
    changePriority(1,id)
}

function changePriority(priorityNum,id){
    console.log("changePriority");
    /*backend*/
    let projectName = document.getElementById("project").innerHTML;
    let project = projects.get(projectName);
    let i = getIndex(id);
    console.log("line52");
    let todo = project.getTodos()[i];
    todo.changePriority("priority "+priorityNum);
    console.log(todo);
    /*front-end*/
    let todoDOM = document.getElementById("status"+i);
    console.log(todoDOM);
    let c = "taskStatus p"+priorityNum+"Color";
    console.log(c);
    todoDOM.className = c;
    /*toggle menu*/
    hideShow("todoMenu"+i);
}

// Given: a string with numbers. (e.g. "book10")
// Return: number found in string. (returns 10);
function getIndex(id){
    console.log("getIndex")
    let index = parseInt(id.match(/(\d[\d\.]*)/g));
    return index;
}
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
window.changeToPriority4 = changeToPriority4;
window.changeToPriority3 = changeToPriority3;
window.changeToPriority2 = changeToPriority2;
window.changeToPriority1 = changeToPriority1;
/*render Page needs access to hideShowMenu()*/






