/*DOM function
 *Summary: toggles menu , only for mobile responsive
*/
export default function hideShow(id) {
	console.log("hideShow called");
    var x = document.getElementById(id);
    if (x.style.display === "none") {
    	if(id === "projectForm"){
    		clearProjectForm();
    	}
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function clearProjectForm(){
	let form = document.getElementById("projectForm");
	if(form[0].textLength >0){
		form[0].value = "";
	}
}