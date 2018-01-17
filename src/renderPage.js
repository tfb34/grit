import hideShow from './hideShowMenu';
import todoMenu from './todoMenu';
//import createPriorityMenuButton from './priorityMenuButton';
/*
    <li class="clearfix todo">
                <div class="taskStatus"></div>
                <p>Get groceries for dinner</p>
                <p>Chores</p>
            </li>
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

/* 
 *  @params: project name
 *  Generates tags/elements in DOM to showcase todos in given 
*/
function _displayTodos(projectName){
    console.log("displayTodos called...");
    let project = projects.get(projectName);
    let todos = project.getTodos();
    for(let i=0;i<todos.length;i++){

        let li = document.createElement("li");
        li.setAttribute("class","clearfix todo");
        li.setAttribute("id", "todo"+i);

        let div = document.createElement("div");
        div.setAttribute("class","taskStatus");
        div.setAttribute("id","status"+id);

        let p = document.createElement("p");
        
        p.innerHTML = todos[i].getTask();

        //let f = createPriorityForm();
        let b = todoMenu.createTodoMenuButton(i);
        let f = todoMenu.createTodoMenu();

        li.appendChild(div);
        li.appendChild(p);
        li.appendChild(b);
        li.appendChild(f);
        
        document.getElementById("list").appendChild(li);
    }

}

