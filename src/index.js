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
import saveData from './save';

let priorities = ["priority 4", "priority 3", "priority 2", "priority 1"];

// Allows data to persist
if(localStorage.getItem('projects') && localStorage.getItem('themeColor')){
    
    projects.initialize();
}else{
    saveData();
    localStorage.setItem("themeColor",JSON.stringify('color1'));
}

// Saves navbar color user has chosen
function saveColor(color){
    localStorage.setItem("themeColor",JSON.stringify(color));
}

// Allows user to 'check' or undo 'check' on a given todo
function toggleCompletion(id){

    let i = getIndex(id);
    let project = projects.get(document.getElementById('project').innerHTML);
    let todo = project.getTodos()[i];
    let p = document.getElementById("task"+i);
    let li = document.getElementById("todo"+i);

    if(todo.getCompletionStatus()){//true, undo 
        li.style.backgroundColor = "white";
        p.style.textDecorationLine = "none";
    }else{
        p.style.textDecorationLine = "line-through";
        li.style.backgroundColor = "rgba(226, 224, 224,0.5)";
    }

    todo.changeCompletionStatus();
}

// Allows user to change priority of given todo
function changeToPriority4(id){
    changePriority(4,id) // red
}

function changeToPriority3(id){
    changePriority(3,id)// orange
}
function changeToPriority2(id){
    changePriority(2,id)// yellow
}
function changeToPriority1(id){
    changePriority(1,id)// grey
}


function changePriority(priorityNum,id){
    // update data
    let projectName = document.getElementById("project").innerHTML;
    let project = projects.get(projectName);
    let i = getIndex(id);
    let todo = project.getTodos()[i];

    todo.changePriority("priority "+priorityNum);

    // update front-end
    let todoDOM = document.getElementById("status"+i);
    let c = "taskStatus p"+priorityNum+"Color";
    todoDOM.className = c;
    //toggle menu
    hideShow("todoMenu"+i);
}

// Given: a string with numbers. (e.g. "book10")
// Return: number found in string. (returns 10);
function getIndex(id){
    let index = parseInt(id.match(/(\d[\d\.]*)/g));
    return index;
}


function deleteProject(){
    let projectName = document.getElementById('project').innerHTML;
    let answer = window.confirm("Are you sure you want to delete project "+projectName+"?");
   
    if(answer){
        projects.remove(projectName);
        saveData();
        buildProjectMenu();
        location.reload();
    }
    hideShow('settings');
    /*render default page and build project menu again*/
}

function changeTheme(id){
    let color = getComputedStyle(document.body).getPropertyValue('--'+id);
    let html = document.getElementsByTagName('html')[0];
    html.style.setProperty("--navbar-color", color);
    saveColor(id);
}

function clearData(){
    let answer = window.confirm("Are you sure you want to remove ALL data? ");
    if(answer){
        localStorage.removeItem('projects');
        localStorage.removeItem('themeColor');
        location.reload();
    }
}

// start

document.onreadystatechange =function(){
	if(document.readyState === "complete"){
		buildProjectMenu();
        renderPage("Today");
        hideShow("menu");

        changeTheme(JSON.parse(localStorage.getItem('themeColor')));
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
window.toggleCompletion  = toggleCompletion;
window.deleteProject = deleteProject;
window.changeTheme = changeTheme;
window.clearData = clearData;







