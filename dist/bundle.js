!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function o(e,t,n){this._task=e,this._dueDate=t,this._priority=n,this._completion=!1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,o.prototype.getTask=function(){return this._task},o.prototype.getDueDate=function(){return this._dueDate},o.prototype.getPriority=function(){return this._priority},o.prototype.getCompletion=function(){return this._completion},o.prototype.changeTask=function(e){this._task=e},o.prototype.changeDueDate=function(e){this._dueDate=e},o.prototype.changeCompletion=function(){this._completion?this._completion=!1:this._completion=!0}},function(e,t,n){"use strict";function o(e){this._name=e,this._todos=[]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(0);!function(e){e&&e.__esModule}(r);o.prototype.getName=function(){return this._name},o.prototype.getTodos=function(){return this._todos},o.prototype.changeName=function(e){this._name=e},o.prototype.addTodo=function(e){this._todos.push(e)}},function(e,t,n){"use strict";function o(e){console.log("hideShow called");var t=document.getElementById(e);"none"===t.style.display?("projectForm"===e&&r(),t.style.display="block"):t.style.display="none"}function r(){var e=document.getElementById("projectForm");e[0].textLength>0&&(e[0].value="")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(){document.getElementById("AddTaskButton").setAttribute("onclick","showTaskForm()")}function r(){var e=document.getElementsByTagName("body")[0],t=document.getElementById("taskForm");e.removeChild(t),o()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(0),i=(o(r),n(1)),u=(o(i),n(5)),d=o(u),a=n(6),c=o(a),l=n(3),s=o(l),p=n(7),m=o(p),f=n(2),h=o(f),v=n(8),g=o(v),y=n(9),b=o(y),_=n(10),A=o(_);document.onreadystatechange=function(){"complete"===document.readyState&&(0,A.default)()},window.removeTaskForm=s.default,window.showTaskForm=c.default,window.handleNewTodo=g.default,window.projects=d.default,window.hideShow=h.default,window.renderPage=m.default,window.newProjectHandler=b.default},function(e,t,n){"use strict";var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o);e.exports=function(){function e(e){o.push(e)}function t(e){return o.filter(function(t){return t.getName()===e})[0]}function n(){return o[o.length-1]}var o=[new r.default("Shopping"),new r.default("Work"),new r.default("Errands"),new r.default("Books to Read"),new r.default("Movies to Watch")];return{list:o,add:e,get:t,last:n}}()},function(e,t,n){"use strict";function o(){i(r()),u()}function r(){console.log("creating form");var e=document.createElement("form");e.setAttribute("name","taskForm"),e.setAttribute("id","taskForm");var t=document.createElement("input");t.setAttribute("name","task"),t.setAttribute("type","text"),t.setAttribute("placeholder","Practice guitar for 30mins");var n=document.createElement("select");n.id="selectPriority",n.setAttribute("name","selectPriority");for(var o=0;o<d.length;o++){var r=document.createElement("option");r.setAttribute("value",d[o]),r.text=d[o],n.appendChild(r)}var i=document.createElement("input");i.setAttribute("type","button"),i.id="submitTaskButton",i.setAttribute("value","Add Task"),i.setAttribute("onclick","handleNewTodo()");var u=document.createElement("a");return u.setAttribute("href","#"),u.innerHTML="Cancel",u.setAttribute("onclick","removeTaskForm()"),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(u),e}function i(e){console.log("showing Form"),document.getElementsByTagName("body")[0].appendChild(e)}function u(){document.getElementById("AddTaskButton").setAttribute("onclick","")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var d=["priority 4","priority 3","priority 2","priority 1"]},function(e,t,n){"use strict";function o(e){console.log("You clicked on "+e),(0,d.default)("menu");var t=document.getElementById("project");t.innerHTML!==e&&(r(),t.innerHTML=e,i(e))}function r(){for(var e=document.getElementById("list");e.firstChild;)e.removeChild(e.firstChild);document.getElementById("date").innerHTML=""}function i(e){console.log("taskDOMList called...");for(var t=projects.get(e),n=t.getTodos(),o=0;o<n.length;o++){var r=document.createElement("li");r.setAttribute("class","clearfix todo");var i=document.createElement("div");i.setAttribute("class","taskStatus");var u=document.createElement("p");console.log("line 155"),u.innerHTML=n[o].getTask(),r.appendChild(i),r.appendChild(u),document.getElementById("list").appendChild(r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(2),d=function(e){return e&&e.__esModule?e:{default:e}}(u)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){if(!i())return void console.log("not valid");u(),(0,c.default)()}function i(){var e=!1;return document.forms.taskForm.task.value&&(e=!0),e}function u(){console.log("createNewTodo");var e=document.forms.taskForm.task.value,t=document.forms.taskForm.selectPriority,n=t.options[t.selectedIndex].text,o=new Date;date=o.toDateString();var r=new s.default(e,date,n);projects.get(document.getElementById("project").innerHTML).addTodo(r),d(r)}function d(e){console.log("updateTodoDOMList");var t=document.createElement("li");t.setAttribute("class","clearfix todo");var n=document.createElement("div");n.setAttribute("class","taskStatus");var o=document.createElement("p");o.innerHTML=e.getTask(),t.appendChild(n),t.appendChild(o),document.getElementById("list").appendChild(t),console.log("no problem")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a=n(3),c=o(a),l=n(0),s=o(l)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e=document.getElementById("projectForm");if(e[0].textLength<=0)console.log("Minimum characters: 1");else{var t=new c.default(e[0].value);projects.add(t),i(),(0,d.default)(e.id)}}function i(){var e=document.getElementById("projectList"),t=document.createElement("li");t.setAttribute("id",projects.last().getName()),t.setAttribute("onclick","renderPage(this.id)");var n=document.createElement("p");n.innerHTML=projects.last().getName(),t.appendChild(n),e.appendChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=n(2),d=o(u),a=n(1),c=o(a)},function(e,t,n){"use strict";function o(){var e=document.getElementById("menu"),t=r(),n=i(),o=u();e.appendChild(t),e.appendChild(o),e.appendChild(n),document.getElementById("projectForm").style.display="none",e.style.display="none"}function r(){var e=document.createElement("ul");e.setAttribute("id","projectList");for(var t=0;t<projects.list.length;t++){var n=document.createElement("li");n.setAttribute("id",projects.list[t].getName()),n.setAttribute("onclick","renderPage(this.id)");var o=document.createElement("p");o.innerHTML=projects.list[t].getName(),n.appendChild(o),e.appendChild(n)}return e}function i(){var e=document.createElement("span"),t=document.createElement("span"),n=document.createElement("a");return e.setAttribute("id","AddProject"),e.setAttribute("onclick","hideShow('projectForm')"),t.innerHTML="+",n.innerHTML="Add Project",n.setAttribute("href","#"),e.appendChild(t),e.appendChild(n),e}function u(){var e=document.createElement("form");e.setAttribute("id","projectForm");var t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","projectName");var n=document.createElement("input");n.setAttribute("type","button"),n.setAttribute("id","AddProjectButton"),n.setAttribute("value","Add Project"),n.setAttribute("onclick","newProjectHandler()");var o=document.createElement("a");return o.setAttribute("href","#"),o.innerHTML="Cancel",o.setAttribute("onclick","hideShow('projectForm')"),e.appendChild(t),e.appendChild(n),e.appendChild(o),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o}]);