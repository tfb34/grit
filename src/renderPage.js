import hideShow from './hideShowMenu';
import todoDOM from './todoDOM';
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
    _displayTodos(projectName);
    
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
    let todos = project.getTodos();
    for(let index=0;index<todos.length;index++){
        todoDOM.renderTodoElement(index, todos[index]);
    }

}

