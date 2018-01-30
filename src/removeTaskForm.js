

function enableAddTaskButton(){
	let b = document.getElementById("AddTaskButton");
	b.setAttribute("onclick","showTaskForm()");
}


export default function removeTaskForm(){
	let body = document.getElementsByClassName('right-column')[0];
	let form = document.getElementById("taskForm");
	
	body.removeChild(form);
	enableAddTaskButton();
}
