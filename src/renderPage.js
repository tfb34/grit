import hideShow from './hideShowMenu';
/*
    <li class="clearfix todo">
                <div class="taskStatus"></div>
                <p>Get groceries for dinner</p>
                <p>Chores</p>
            </li>
*/
export default function renderPage(projectName){
    console.log("You clicked on "+projectName);
    /*
        1. close menu.done
        2. change header to project name
        3. remove current list and propagate div
            with current project's list
            propogateDOMtaskList()
    */
    hideShow("menu");
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