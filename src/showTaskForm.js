
/* public function
 * creates,shows form for new task,
 * and disables 'add task' button in DOM
*/

export default function showTaskForm(){
	let form = createTaskForm();
	showForm(form);
	disableAddTaskButton();
}

let priorities = ["priority 4", "priority 3", "priority 2", "priority 1"];

/*Returns a form for a new task*/
function createTaskForm(){
	console.log("creating form");
	let form = document.createElement("form");
	form.setAttribute("name","taskForm");
	// task input
	let inputTask = document.createElement("input");// task input
	inputTask.setAttribute("name","task");
	inputTask.setAttribute("type", "text");
	inputTask.setAttribute("placeholder","Practice guitar for 30mins");
	// priority select list
	let selectPriority = document.createElement("select");// priority 'input'
	selectPriority.id = "selectPriority";
	selectPriority.setAttribute("name","selectPriority");

	for(let i = 0; i<priorities.length; i++){
		let option = document.createElement("option");
		option.setAttribute("value",priorities[i]);
		option.text = priorities[i];
		selectPriority.appendChild(option);
	}
	// submit button
	let inputSubmit = document.createElement("input");
	inputSubmit.setAttribute("type","button");
	inputSubmit.id = "submitTaskButton";
	inputSubmit.setAttribute("value","Add Task");
	inputSubmit.setAttribute("onclick","handleNewTodo()");
	// cancel button
	let cancel = document.createElement("a");
	cancel.setAttribute("href","#");
	cancel.innerHTML = "Cancel";
	cancel.setAttribute("onclick","removeTaskForm()");

	// put everything together
	form.appendChild(inputTask);
	form.appendChild(selectPriority);
	form.appendChild(inputSubmit);
	form.appendChild(cancel);

	return form;
};

// figure out where to show form in DOM
function showForm(form){
	console.log("showing Form");
	document.getElementsByTagName('body')[0].appendChild(form);
};

/*Private*/
function disableAddTaskButton(){
	let b = document.getElementById("AddTaskButton");
	b.setAttribute("onclick","");
}