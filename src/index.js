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

//import getDate from '../node_modules/date-fns/get_date'
const format = require('date-fns/format');
const isValid = require('date-fns/is_valid');
const parse = require('date-fns/parse');

const isPast = require('date-fns/is_past');
const isThisWeek = require('date-fns/is_this_week');
const getYear = require('date-fns/get_year');
const getMonth = require('date-fns/get_month');
const getDate = require('date-fns/get_date');
var isToday = require('date-fns/is_today');
//import todoDOM from './todoDOM';

let priorities = ["priority 4", "priority 3", "priority 2", "priority 1"];

if(localStorage.getItem('projects') && localStorage.getItem('themeColor')){
    console.log("localStorage found");
    projects.initialize();
    console.log(localStorage.getItem('themeColor'));

}else{
    saveData();
    localStorage.setItem("themeColor",JSON.stringify('color1'));
}



function saveColor(color){
    console.log("saving color "+ color);
    localStorage.setItem("themeColor",JSON.stringify(color));

}
//local storage works!
// new features
// allow user to destroy projects
// use date-fns

// think about what happens when user checks out a task
// toggle works but when do you delete it from projects








// get the id, look up todo, update backend, add decoration
/*check the todo's project. then check if current date is today remove it from today as well*/
// when renderpage it should check if complete  = true. then add class to show that its been crossed out
function toggleCompletion(id){
    console.log("toggleComplete...");
    console.log(id);
    let i = getIndex(id);
    let project = projects.get(document.getElementById('project').innerHTML);
    console.log(project);
    console.log(i);
    let todo = project.getTodos()[i];
    console.log(todo);
    console.log(todo.getCompletionStatus());
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
    
    console.log(todo.getCompletionStatus());
}

/*stays here*/
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

// may want to export this
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


function deleteProject(){
    let projectName = document.getElementById('project').innerHTML;
    console.log(projectName);
    let answer = window.confirm("Are you sure you want to delete project "+projectName+"?");
    console.log(answer);
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
    console.log("looking for color: "+color);
    var html = document.getElementsByTagName('html')[0];
    html.style.setProperty("--navbar-color", color);
    saveColor(id);
}
/*window*/



document.onreadystatechange =function(){
	if(document.readyState === "complete"){
		buildProjectMenu();
        renderPage("Today");
        hideShow("menu");
        console.log(
            format(new Date(),'dddd DD MMMM')
        );

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
//testing format
window.format = format;
window.isValid = isValid;
window.parse = parse;
window.isPast = isPast;
window.isThisWeek = isThisWeek;
window.getYear = getYear;
window.getMonth = getMonth;
window.getDate = getDate;
window.isToday = isToday;
/*render Page needs access to hideShowMenu()*/






