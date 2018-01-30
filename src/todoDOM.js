import todoMenu from './todoMenu';
const format = require('date-fns/format');
const isThisWeek = require('date-fns/is_this_week');
const isToday = require('date-fns/is_today');
const isTomorrow = require('date-fns/is_tomorrow');
const isYesterday = require('date-fns/is_yesterday');
const isPast = require('date-fns/is_past');

/**
 * Summary: these functions GENERATE or EDIT the tags/elements for
 * a todo object 
 *
 */

module.exports = (
	function(){
		
		function renderTodoElement(index, todo){

	        let li = document.createElement("li");
	        li.setAttribute("class","clearfix todo");
	        li.setAttribute("id", "todo"+index);

	        let innerDiv1 = _createBubbleWrapper(index);

	        let innerDiv2 = _createTaskWrapper();

	        let innerDiv3 = _createScheduleWrapper();

	        let innerDiv4 = _createMenuWrapper(index);  
 

	        let div = _createPriorityBubble(index);// bubble
	        innerDiv1.appendChild(div);
	        _addPriorityColor(div,todo);

	        let p = _createTaskElement(index,todo); // task
	        innerDiv2.appendChild(p);

	        let pSchedule = _createScheduleElement(todo);// due date
	        innerDiv3.appendChild(pSchedule);
	        //let f = createPriorityForm();
	        let b = todoMenu.createTodoMenuButton();// import
	        innerDiv4.appendChild(b);

	        let f = todoMenu.createTodoMenu(index);

	        li.appendChild(innerDiv1);
	        li.appendChild(innerDiv2);
	        li.appendChild(innerDiv3);
	        li.appendChild(innerDiv4);
	        li.appendChild(f);
	        
	        document.getElementById("list").appendChild(li);
	        _editTodoStatus(p,index,todo);
		}

		function _createBubbleWrapper(index){
			let innerDiv1 = document.createElement("div");
	        innerDiv1.setAttribute("class","statusWrapper");
	        innerDiv1.setAttribute("id", "statusWrapper"+index);
	        innerDiv1.setAttribute("onclick","toggleCompletion(this.id)");
	        return innerDiv1;
		}
		function _createTaskWrapper(){
			let innerDiv2 = document.createElement("div");
	        innerDiv2.setAttribute("class","taskWrapper");
	        return innerDiv2;
		}

		function _createScheduleWrapper(){
			let innerDiv3 = document.createElement("div");
			innerDiv3.setAttribute("class","scheduleWrapper");
			return innerDiv3;
		}

		function _createMenuWrapper(index){
			let innerDiv4 = document.createElement("div");
	        innerDiv4.setAttribute("class","todoMenuWrapper");
	        // set identifier
	        let todoID = "todoMenu"+index;
	        let handler = "hideShow('"+todoID+"')";
	        innerDiv4.setAttribute("onclick",handler);
	        return innerDiv4;
		}
		function _createPriorityBubble(index){
			let div = document.createElement("div");
	        div.setAttribute("class","taskStatus");
	        div.setAttribute("id","status"+index);

	  		_addPriorityColor
	        return div;
		}
		function _createTaskElement(index,todo){
			let p = document.createElement("p");
			let id = "task"+index;
			p.setAttribute("id",id);
	        p.innerHTML = todo.getTask();
	        return p;
		}

		function _createScheduleElement(todo){
			let p = document.createElement("p");
			let str = todo.getDueDate();
			
			if(!isToday(str) && isPast(str)){
				p.setAttribute("class","red");
			}else{
				p.setAttribute("class","grey");
			}
			
			// assume date has month day
			if(str){// format it. 1) Jan 4 2) yesterday 3)tomorrow 4)Wednesday
				if(!isThisWeek(str)){
					str = format(str,"MMM D");
				}
				else if(isToday(str)){
					str = "Today";
				}else if(isYesterday(str)){
					str = "Yesterday";
				}else if(isTomorrow(str)){
					str = "Tomorrow";
				}else{
					str = format(str, "dddd");
				}

			}else{
				console.log("no schedule = "+str);
			}
			p.innerHTML = str;

	        return p;
		}

		// Adds initially selected color to identify level of importance
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

		}

		// display indication that todo has been completed
		function _editTodoStatus(p,index,todo){
	
			let li = document.getElementById("todo"+index);
	        if(todo.getCompletionStatus()){//true, undo 
        		li.style.backgroundColor = "rgb(226, 224, 224,0.5)";
        		p.style.textDecorationLine = "line-through";
    		}else{
        		p.style.textDecorationLine = "none";
        		li.style.backgroundColor = "white";
    		}
		}
		
		/*public functions*/
		return{
			renderTodoElement
		}
	}()
);