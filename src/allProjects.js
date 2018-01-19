import Project from './project';
import Todo from './todo';
/*
 * Summary: Creates a single 'projects' object to organize
 *         and keep track of 'Project' instances
 * 
*/

module.exports = (
	function(){

		let list = [new Project("Shopping"), new Project("Work"), new Project("Errands"), new Project("Books to Read"), new Project("Movies to Watch")];

		function add(project){
			list.push(project);
		}

		function remove(project){
			let index = 0;
			while(index < list.length){
				if(list[index].getName() === project.getName()){
					break;
				}
				index++;
			}
			list.splice(index,1);
		}

		function get(projectName){
			let x = list.filter(function(p){
				return p.getName() === projectName;
			});
			return x[0];
		}
		function last(){
			return list[list.length-1];
		}
		/*IF Local storage exists with projects*/
		
		function initialize(){
			console.log("initialize called...");
			
			while(list.length > 0){
				list.pop();
			}

			let all_projects = JSON.parse(localStorage.getItem("projects"));
			console.log(all_projects);
			//create new project for each object in localStorage
			for(let i=0; i<all_projects.list.length;i++){
				console.log(i);
				let projectName = all_projects.list[i]._name;
				let project = new Project(projectName);
				console.log(project);
				list.push(project);
				let todos = all_projects.list[i]._todos;
				console.log(todos);
				console.log(todos.length);
                for(let x=0;x<todos.length;x++){
                	let t = todos[x];
                	let todo = new Todo(t._task,t._dueDate,t._priority,t._completion);
                	project.addTodo(todo);
                }

			}

		}
       
		return{
			list,
			add,
			get,
			last,
			initialize
		}

	}()
);
