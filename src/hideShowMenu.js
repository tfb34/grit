/**
 *  Summary: toggles given menu
 */

export default function hideShow(id) {
	
    let x = document.getElementById(id);
    let width = (window.innerWidth > 0)? window.innerWidth : document.documentElement.clientWidth;
    
    if (x.style.display === "none" || !x.style.display) {
    	if(id === "projectForm"){
    		clearProjectForm();
    	}
        x.style.display = "block";
    } else {

        x.style.display = "none";
        if(width >= 700 && id === "menu"){
            x.style.display = "block";
        }
    } 
}

// Removes any present data from previous inputs
function clearProjectForm(){
	let form = document.getElementById("projectForm");
	if(form[0].value.length >0){
		form[0].value = "";
	}
}