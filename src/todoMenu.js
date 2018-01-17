
/*
 * Summary: A single 'todoMenu' object to generate todo related
 *          DOM elements such as status, task, and menu
 * 
*/

module.exports = (
	function(){

        function createTodoMenuButton(todoID){
            let id = "todoMenu"+todoID;
            let handler = "hideShow('"+id+"')";// problem may be here
            let outerDiv = document.createElement("div");
            outerDiv.setAttribute("class","todoMenuButton");
            outerDiv.setAttribute("onclick",handler);

            let innerDiv = document.createElement("div");
            let innerDiv2 = document.createElement("div");
            let innerDiv3 = document.createElement("div");

            outerDiv.appendChild(innerDiv);
            outerDiv.appendChild(innerDiv2);
            outerDiv.appendChild(innerDiv3);
    
            return outerDiv;
		}

    
		function createTodoMenu(todoID){
            console.log("createTodoMenu");
            let id = "todoMenu"+todoID;
			let menu  = document.createElement("div");
            menu.setAttribute("class","todoMenu");
            menu.setAttribute("id",id);
            // add things to menu here
            console.log("line 38");
            let pOptions = _createPriorityOptions(todoID);
            console.log(menu);
            menu.appendChild(pOptions);
            console.log(menu);
            return menu;
		}
        function _createPriorityOptions(todoID){
            let id = "todoMenu"+todoID;
            let outerDiv = document.createElement("div");

            outerDiv.setAttribute("class","priorityOptions");

            let header = document.createElement("p");
            header.innerHTML = "Priority";

            let innerDiv = document.createElement("div");
            innerDiv.setAttribute("class","wrapper");

            let icon4 = document.createElement("div");
            icon4.setAttribute("class","priorityOption p4Color");
            icon4.setAttribute("id",id)
            icon4.setAttribute("onclick","changeToPriority4(this.id)");

            let icon3 = document.createElement("div");
            icon3.setAttribute("class","priorityOption p3Color");
            icon3.setAttribute("id",id)
            icon3.setAttribute("onclick","changeToPriority3(this.id)");

            let icon2 = document.createElement("div");
            icon2.setAttribute("class","priorityOption p2Color");
            icon2.setAttribute("id",id)
            icon2.setAttribute("onclick","changeToPriority2(this.id)");

            let icon1 = document.createElement("div");
            icon1.setAttribute("class","priorityOption p1Color");
            icon1.setAttribute("id",id)
            icon1.setAttribute("onclick","changeToPriority1(this.id)");

            innerDiv.appendChild(icon4);
            innerDiv.appendChild(icon3);
            innerDiv.appendChild(icon2);
            innerDiv.appendChild(icon1);

            outerDiv.appendChild(header);
            outerDiv.appendChild(innerDiv);
            console.log(outerDiv);
            return outerDiv;
        }

		
		return{
			createTodoMenuButton,
            createTodoMenu

		}

	}()
);
