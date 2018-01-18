import todoMenu from './todoMenu';
/*Summary: these functions GENERATE or EDIT the tags/elements for
 * a todo object */

module.exports = (
	function(){
		
		function renderTodoElement(index, todo){
			console.log("generateTodoElement called...");

	        let li = document.createElement("li");
	        li.setAttribute("class","clearfix todo");
	        li.setAttribute("id", "todo"+index);

	        let innerDiv1 = _createBubbleWrapper();

	        let innerDiv2 = _createTaskWrapper();

	        let innerDiv3 = _createMenuWrapper(index);  
 

	        let div = _createPriorityBubble(index);
	        innerDiv1.appendChild(div);
	        _addPriorityColor(div,todo);

	        let p = _createTaskElement(todo);
	        innerDiv2.appendChild(p);
	        //let f = createPriorityForm();
	        let b = todoMenu.createTodoMenuButton();// import
	        innerDiv3.appendChild(b);

	        let f = todoMenu.createTodoMenu(index);

	        li.appendChild(innerDiv1);
	        li.appendChild(innerDiv2);
	        li.appendChild(innerDiv3);
	        li.appendChild(f);
	        
	        document.getElementById("list").appendChild(li);
		}

		function _createBubbleWrapper(){
			let innerDiv1 = document.createElement("div");
	        innerDiv1.setAttribute("class","statusWrapper");
	        return innerDiv1;
		}
		function _createTaskWrapper(){
			let innerDiv2 = document.createElement("div");
	        innerDiv2.setAttribute("class","taskWrapper");
	        return innerDiv2;
		}
		function _createMenuWrapper(index){
			let innerDiv3 = document.createElement("div");
	        innerDiv3.setAttribute("class","todoMenuWrapper");
	        // set identifier
	        let todoID = "todoMenu"+index;
	        let handler = "hideShow('"+todoID+"')";
	        innerDiv3.setAttribute("onclick",handler);
	        return innerDiv3;
		}
		function _createPriorityBubble(index){
			let div = document.createElement("div");
	        div.setAttribute("class","taskStatus");
	        div.setAttribute("id","status"+index);

	  		_addPriorityColor
	        return div;
		}
		function _createTaskElement(todo){
			let p = document.createElement("p");
	        p.innerHTML = todo.getTask();
	        return p;
		}

		/*Adds color to identify level of importance*/
		function _addPriorityColor(d,todo){
		    let div = d.classList;
		    let p = todo.getPriority();

		    if(p === "priority 1"){
		        div.add("p1Color");
		    }else if(p === "priority 2"){
		        div.add("p2Color");
		    }else if(p === "priority 3"){
		        div.add("p3Color");
		    }else{
		        div.add("p4Color");
		    }
		    console.log(div);

		}

		/*public functions*/
		return{
			renderTodoElement
		}
	}()
);