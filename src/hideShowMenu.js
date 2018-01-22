/*DOM function
 *Summary: toggles menu , only for mobile responsive
*/
export default function hideShow(id) {
	console.log("hideShow called");
    console.log(id);
    var x = document.getElementById(id);
    console.log("before:  "+x.style.display);
    if (x.style.display === "none" || !x.style.display) {
        console.log(id);
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
    console.log("cleaning project form");
	let form = document.getElementById("projectForm");
    console.log(form);
    console.log(form[0].value.length);
    console.log(form[0]);
    console.log(form[0].value);
    console.log(form[0].value.length);
	if(form[0].value.length >0){

		form[0].value = "";
        console.log(form[0].value.length);
	}
}