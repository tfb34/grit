/*DOM function
 *Summary: toggles menu , only for mobile responsive
*/
export default function hideShow(id) {
	console.log("hideShow called");
    console.log(id);
    var x = document.getElementById(id);
    console.log("before:  "+x.style.display);
    let width = (window.innerWidth > 0)? window.innerWidth : document.documentElement.clientWidth;
    if (x.style.display === "none" || !x.style.display) {
        console.log(id);
    	if(id === "projectForm"){
    		clearProjectForm();
    	}
        x.style.display = "block";
    } else {

        console.log("device width: "+width);
        x.style.display = "none";
        if(width >= 700 && id === "menu"){
            x.style.display = "block";
        }
    } 
    console.log(x.style.display);
}

function clearProjectForm(){
    console.log("cleaning project form");
	let form = document.getElementById("projectForm");
	if(form[0].value.length >0){

		form[0].value = "";
        console.log(form[0].value.length);
	}
}