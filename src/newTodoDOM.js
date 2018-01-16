import removeTaskForm from './removeTaskForm';
import Todo from './todo';

export default function handleNewTodo(){
    if(!validateForm()){
        console.log("not valid");
        return;
    }
    createNewTodo();
    removeTaskForm();
}


function validateForm(){
	let isValid = false;
	if(document.forms["taskForm"]["task"].value){
		isValid = true;
	}
	return isValid;
}

function createNewTodo(){
    console.log("createNewTodo");
	//get values;
	let task = document.forms["taskForm"]["task"].value;

	let sel = document.forms["taskForm"]["selectPriority"];
	let priority = sel.options[sel.selectedIndex].text;
	// for now this date value will due
	let today = new Date();
	date = today.toDateString();
	let todo = new Todo(task, date, priority);
	//add new element to project
    let project = projects.get(document.getElementById("project").innerHTML);
    project.addTodo(todo);
    updateTodoDOMList(todo);
}

function updateTodoDOMList(todo){
    console.log("updateTodoDOMList");
    let li = document.createElement("li");
    li.setAttribute("class","clearfix todo");

    let div = document.createElement("div");
    div.setAttribute("class","taskStatus");

    let p = document.createElement("p");
    p.innerHTML = todo.getTask();

    li.appendChild(div);
    li.appendChild(p);
    document.getElementById("list").appendChild(li);
    //add priority color
    showPriority(div,todo);
}


function showPriority(divx,todo){
    let div = divx.classList;
    let p = todo.getPriority();

    if(p === "priority 1"){
        div.add("p1Color");
    }else if(p === "priority 2"){
        div.add("p2Color");
    }else if(p === "priority 3"){
        div.add("p3Color");
    }else{
        div.add("p4Color");
    }
    console.log(div);

}
