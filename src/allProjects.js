import Project from './project'
/*
 * Summary: Creates a single 'projects' object to organize
 *         and keep track of 'Project' instances
 * 
*/

module.exports = (
	function(){

		let list = [new Project("Shopping"), new Project("Work"), new Project("Errands"), new Project("Books to Read"), new Project("Movies to Watch")];

		function add(project){
			list.push(x);
		}

		function find(){

		}
		return{
			list,
			add
		}

	}()
);
