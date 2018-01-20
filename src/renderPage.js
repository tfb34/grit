import hideShow from './hideShowMenu';
import todoDOM from './todoDOM';
const format = require('date-fns/format');
//import createPriorityMenuButton from './priorityMenuButton';


/* 
 *  @params: project name
 *  Generates tags/elements in DOM to showcase todos under given project
*/
export default function renderPage(projectName){
    console.log("You clicked on "+projectName);
    hideShow("menu");
    let x = document.getElementById('project');
    if(x.innerHTML === projectName){
        return;
    }
    _cleanPage();

    x.innerHTML = projectName;

    if(projectName === "Today" || projectName === "Inbox"){
        _setupDate();
        _hideSettings();
    }else{
        _showSettings();
    }
    _displayTodos(projectName);
    
}

function _setupDate(){
    console.log("setupDate called");
    document.getElementById('date').innerHTML = format(new Date(),'dddd DD MMMM');
}

function _hideSettings(){
    document.getElementById('settings-icon').style.display = "none";
}

function _showSettings(){
    document.getElementById('settings-icon').style.display = "block";
}
/* Private. Removes all todos/tasks from page */
function _cleanPage(){
    let taskList = document.getElementById('list');
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    document.getElementById('date').innerHTML = "";
}


function _displayTodos(projectName){
    console.log("displayTodos called...");
    let project = projects.get(projectName);
    console.log("ok");
    console.log(project);

    let todos = project.getTodos();

    for(let index=0;index<todos.length;index++){
        todoDOM.renderTodoElement(index, todos[index]);
    }

}

