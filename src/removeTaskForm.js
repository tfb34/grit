

function enableAddTaskButton(){
	let b = document.getElementById("AddTaskButton");
	b.setAttribute("onclick","showTaskForm()");
}


export default function removeTaskForm(){
	let body = document.getElementsByTagName('body')[0];
	let form = document.getElementsByTagName('form')[0];
	body.removeChild(form);
	enableAddTaskButton();
}
