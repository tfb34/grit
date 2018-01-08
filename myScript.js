console.log("myScript.js");

/*todo object*/

const todo = (task,dueDate,priority)=>{
	let priorityLevel = priority || "priority 4";
	let completed = false;
	return{
		task,
		dueDate,
		priorityLevel,
		completed
	}
};