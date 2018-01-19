import projects from './allProjects';

/*Summary: called every time user changes data*/
export default function saveData(){
	console.log("saveData...");
	localStorage.setItem("projects",JSON.stringify(projects));
}