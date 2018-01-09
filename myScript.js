
console.log("myScript.js");

/*todo object*/

const todo = (task,dueDate,priority)=>{
	let priorityLevel = priority || "priority 4";
	let completed = false;
	let project = null; // todo does not need one
	return{
		task,
		dueDate,
		priorityLevel,
		completed
	}
};

// edit given todo
let editTodo(todo) = {
	changeTask(newTask){
		todo.task = newTask;
	},
	changeProject(newProject){
		todo.project = newProject;
	},
	changeDueDate(newDate){
		todo.dueDate = newDate;
	},
	changePriority(newPriority){
		todo.priorityLevel = newPriority;
	},
	completed(){
		completed = true;
	}
};
// list of all projects
let projects = [];

// project object
// todos are stored under a project. If project is deleted so are the tasks
const project = (name) => {
	let todos = [];
	return {
		name,
		todos
	}
}

//let projects = ["Shopping","Work","Personal","Errands","Movies to watch"];

// create new project
let projectMaker = {
	addProject(name){
		if(name.length > 0){
			let p = project(name);
			projects.push(p);
			return true;
		}else{
			return false;
		}
	}

};

// create default project for user
projectMaker.addProject("default");