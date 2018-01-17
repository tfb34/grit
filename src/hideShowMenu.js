/*DOM function
 *Summary: toggles menu , only for mobile responsive
*/
export default function hideShow(id) {
	console.log("hideShow called");
    var x = document.getElementById(id);
    console.log("before:  "+x.style.display);
    if (x.style.display === "none" || !x.style.display) {
    	if(id === "projectForm"){
    		clearProjectForm();
    	}
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    console.log(x.style.display);
}

function clearProjectForm(){
	let form = document.getElementById("projectForm");
	if(form[0].textLength >0){
		form[0].value = "";
	}
}