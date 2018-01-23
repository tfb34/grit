!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,n){function o(e,t){if(s(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=t||{},o=n.additionalDigits;o=null==o?p:Number(o);var c=r(e),d=a(c.date,o),g=d.year,m=d.restDateString,v=u(m,g);if(v){var h,y=v.getTime(),T=0;return c.time&&(T=i(c.time)),c.timezone?h=l(c.timezone):(h=new Date(y+T).getTimezoneOffset(),h=new Date(y+T+h*f).getTimezoneOffset()),new Date(y+T+h*f)}return new Date(e)}function r(e){var t,n={},o=e.split(g);if(m.test(o[0])?(n.date=null,t=o[0]):(n.date=o[0],t=o[1]),t){var r=_.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}function a(e,t){var n,o=h[t],r=T[t];if(n=y.exec(e)||r.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=v.exec(e)||o.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}function u(e,t){if(null===t)return null;var n,o,r,a;if(0===e.length)return o=new Date(0),o.setUTCFullYear(t),o;if(n=b.exec(e))return o=new Date(0),r=parseInt(n[1],10)-1,o.setUTCFullYear(t,r),o;if(n=M.exec(e)){o=new Date(0);var u=parseInt(n[1],10);return o.setUTCFullYear(t,0,u),o}if(n=w.exec(e)){o=new Date(0),r=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return o.setUTCFullYear(t,r,i),o}if(n=D.exec(e))return a=parseInt(n[1],10)-1,c(t,a);if(n=A.exec(e)){a=parseInt(n[1],10)-1;return c(t,a,parseInt(n[2],10)-1)}return null}function i(e){var t,n,o;if(t=x.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*d;if(t=E.exec(e))return n=parseInt(t[1],10),o=parseFloat(t[2].replace(",",".")),n%24*d+o*f;if(t=C.exec(e)){n=parseInt(t[1],10),o=parseInt(t[2],10);var r=parseFloat(t[3].replace(",","."));return n%24*d+o*f+1e3*r}return null}function l(e){var t,n;return(t=k.exec(e))?0:(t=S.exec(e))?(n=60*parseInt(t[2],10),"+"===t[1]?-n:n):(t=I.exec(e),t?(n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n):0)}function c(e,t,n){t=t||0,n=n||0;var o=new Date(0);o.setUTCFullYear(e,0,4);var r=o.getUTCDay()||7,a=7*t+n+1-r;return o.setUTCDate(o.getUTCDate()+a),o}var s=n(12),d=36e5,f=6e4,p=2,g=/[T ]/,m=/:/,v=/^(\d{2})$/,h=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],y=/^(\d{4})/,T=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],b=/^-(\d{2})$/,M=/^-?(\d{3})$/,w=/^-?(\d{2})-?(\d{2})$/,D=/^-?W(\d{2})$/,A=/^-?W(\d{2})-?(\d{1})$/,x=/^(\d{2}([.,]\d*)?)$/,E=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,C=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,_=/([Z+-].*)$/,k=/^(Z)$/,S=/^([+-])(\d{2})$/,I=/^([+-])(\d{2}):?(\d{2})$/;e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){this._task=e,this._dueDate=t,this._priority=n,this._completion=o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(r);o.prototype.getTask=function(){return this._task},o.prototype.getDueDate=function(){return this._dueDate},o.prototype.getPriority=function(){return this._priority},o.prototype.getCompletionStatus=function(){return this._completion},o.prototype.changeTask=function(e){this._task=e},o.prototype.changePriority=function(e){this._priority=e,(0,a.default)()},o.prototype.changeDueDate=function(e){this._dueDate=e,(0,a.default)()},o.prototype.changeCompletionStatus=function(){this._completion?this._completion=!1:this._completion=!0,(0,a.default)()}},function(e,t,n){"use strict";function o(){console.log("saveData..."),localStorage.setItem("projects",JSON.stringify(a.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(9),a=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,n){function o(e){var t=r(e);return t.setHours(0,0,0,0),t}var r=n(0);e.exports=o},function(e,t,n){"use strict";function o(e){this._name=e,this._todos=[]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(1);!function(e){e&&e.__esModule}(r);o.prototype.getName=function(){return this._name},o.prototype.getTodos=function(){return this._todos},o.prototype.changeName=function(e){this._name=e},o.prototype.addTodo=function(e){this._todos.push(e)}},function(e,t,n){"use strict";function o(e){console.log("hideShow called"),console.log(e);var t=document.getElementById(e);console.log("before:  "+t.style.display),"none"!==t.style.display&&t.style.display?t.style.display="none":(console.log(e),"projectForm"===e&&r(),t.style.display="block"),console.log(t.style.display)}function r(){console.log("cleaning project form");var e=document.getElementById("projectForm");console.log(e),console.log(e[0].value.length),console.log(e[0]),console.log(e[0].value),console.log(e[0].value.length),e[0].value.length>0&&(e[0].value="",console.log(e[0].value.length))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){function o(e,t,n){var o=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",a=n||{},u=a.locale,i=p.format.formatters,l=p.format.formattingTokensRegExp;u&&u.format&&u.format.formatters&&(i=u.format.formatters,u.format.formattingTokensRegExp&&(l=u.format.formattingTokensRegExp));var c=d(e);return f(c)?r(o,i,l)(c):"Invalid Date"}function r(e,t,n){var o,r,u=e.match(n),i=u.length;for(o=0;o<i;o++)r=t[u[o]]||g[u[o]],u[o]=r||a(u[o]);return function(e){for(var t="",n=0;n<i;n++)u[n]instanceof Function?t+=u[n](e,g):t+=u[n];return t}}function a(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function u(e,t){t=t||"";var n=e>0?"-":"+",o=Math.abs(e),r=Math.floor(o/60),a=o%60;return n+i(r,2)+t+i(a,2)}function i(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}var l=n(23),c=n(26),s=n(14),d=n(0),f=n(8),p=n(28),g={M:function(e){return e.getMonth()+1},MM:function(e){return i(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return i(e.getDate(),2)},DDD:function(e){return l(e)},DDDD:function(e){return i(l(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return c(e)},WW:function(e){return i(c(e),2)},YY:function(e){return i(e.getFullYear(),4).substr(2)},YYYY:function(e){return i(e.getFullYear(),4)},GG:function(e){return String(s(e)).substr(2)},GGGG:function(e){return s(e)},H:function(e){return e.getHours()},HH:function(e){return i(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return i(g.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return i(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return i(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return i(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return i(e.getMilliseconds(),3)},Z:function(e){return u(e.getTimezoneOffset(),":")},ZZ:function(e){return u(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};e.exports=o},function(e,t,n){function o(e){return r(e,{weekStartsOn:1})}var r=n(13);e.exports=o},function(e,t,n){function o(e){if(r(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}var r=n(12);e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(4),a=o(r),u=n(1),i=o(u);e.exports=function(){function e(e){u.push(e)}function t(e){for(var t=0;t<u.length&&u[t].getName()!==e;)t++;u.splice(t,1)}function n(e){return console.log("inside get"),u.filter(function(t){return t.getName()===e})[0]}function o(){return u[u.length-1]}function r(){for(console.log("initialize called...");u.length>0;)u.pop();var e=JSON.parse(localStorage.getItem("projects"));console.log(e);for(var t=0;t<e.list.length;t++){console.log(t);var n=e.list[t]._name,o=new a.default(n);console.log(o),u.push(o);var r=e.list[t]._todos;console.log(r),console.log(r.length);for(var l=0;l<r.length;l++){var c=r[l];if(!c._completion){var s=new i.default(c._task,c._dueDate,c._priority,c._completion);o.addTodo(s)}}}}var u=[new a.default("Inbox"),new a.default("Today"),new a.default("Shopping"),new a.default("Work"),new a.default("Errands"),new a.default("Books to Read"),new a.default("Movies to Watch")];return{list:u,add:e,get:n,last:o,initialize:r,remove:t}}()},function(e,t,n){"use strict";function o(){document.getElementById("AddTaskButton").setAttribute("onclick","showTaskForm()")}function r(){var e=document.getElementsByTagName("body")[0],t=document.getElementById("taskForm");e.removeChild(t),o()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";var o=n(22),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(6),u=n(15),i=n(33),l=n(34),c=n(35),s=n(16);e.exports=function(){function e(e,a){console.log("generateTodoElement called...");var u=document.createElement("li");u.setAttribute("class","clearfix todo"),u.setAttribute("id","todo"+e);var i=t(e),l=n(),c=o(),s=d(e),h=f(e);i.appendChild(h),m(h,a);var y=p(e,a);l.appendChild(y);var T=g(a);c.appendChild(T);var b=r.default.createTodoMenuButton();s.appendChild(b);var M=r.default.createTodoMenu(e);u.appendChild(i),u.appendChild(l),u.appendChild(c),u.appendChild(s),u.appendChild(M),document.getElementById("list").appendChild(u),v(y,e,a)}function t(e){var t=document.createElement("div");return t.setAttribute("class","statusWrapper"),t.setAttribute("id","statusWrapper"+e),t.setAttribute("onclick","toggleCompletion(this.id)"),t}function n(){var e=document.createElement("div");return e.setAttribute("class","taskWrapper"),e}function o(){var e=document.createElement("div");return e.setAttribute("class","scheduleWrapper"),e}function d(e){var t=document.createElement("div");t.setAttribute("class","todoMenuWrapper");var n="todoMenu"+e,o="hideShow('"+n+"')";return t.setAttribute("onclick",o),t}function f(e){var t=document.createElement("div");return t.setAttribute("class","taskStatus"),t.setAttribute("id","status"+e),t}function p(e,t){var n=document.createElement("p"),o="task"+e;return n.setAttribute("id",o),n.innerHTML=t.getTask(),n}function g(e){var t=document.createElement("p"),n=e.getDueDate();return console.log("Testing if past element"),console.log(s(n)),!i(n)&&s(n)?t.setAttribute("class","red"):t.setAttribute("class","grey"),console.log(n),n?u(n)?i(n)?(console.log("isToday -> true"),n="Today"):c(n)?(console.log("isYesterday -> true"),n="Yesterday"):l(n)?(console.log("isTomorrow -> true"),n="Tomorrow"):(console.log("weekday"),n=a(n,"dddd")):(console.log("not scheduled for this week"),n=a(n,"MMM D")):console.log("no schedule = "+n),t.innerHTML=n,t}function m(e,t){var n=e.classList,o=t.getPriority();"priority 1"===o?n.add("p1Color"):"priority 2"===o?n.add("p2Color"):"priority 3"===o?n.add("p3Color"):n.add("p4Color"),console.log(n)}function v(e,t,n){console.log("_editTodoStatus.."),console.log(n.getCompletionStatus());var o=document.getElementById("todo"+t);n.getCompletionStatus()?(o.style.backgroundColor="rgb(226, 224, 224,0.5)",e.style.textDecorationLine="line-through"):(e.style.textDecorationLine="none",o.style.backgroundColor="white"),console.log(n.getCompletionStatus())}return{renderTodoElement:e}}()},function(e,t){function n(e){return e instanceof Date}e.exports=n},function(e,t,n){function o(e,t){var n=t?Number(t.weekStartsOn)||0:0,o=r(e),a=o.getDay(),u=(a<n?7:0)+a-n;return o.setDate(o.getDate()-u),o.setHours(0,0,0,0),o}var r=n(0);e.exports=o},function(e,t,n){function o(e){var t=r(e),n=t.getFullYear(),o=new Date(0);o.setFullYear(n+1,0,4),o.setHours(0,0,0,0);var u=a(o),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var l=a(i);return t.getTime()>=u.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}var r=n(0),a=n(7);e.exports=o},function(e,t,n){function o(e,t){return r(new Date,e,t)}var r=n(32);e.exports=o},function(e,t,n){function o(e){return r(e).getTime()<(new Date).getTime()}var r=n(0);e.exports=o},function(e,t,n){function o(e){return r(e).getMonth()}var r=n(0);e.exports=o},function(e,t,n){function o(e){return r(e).getDate()}var r=n(0);e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){console.log("toggleComplete..."),console.log(e);var t=s(e),n=m.default.get(document.getElementById("project").innerHTML);console.log(n),console.log(t);var o=n.getTodos()[t];console.log(o),console.log(o.getCompletionStatus());var r=document.getElementById("task"+t),a=document.getElementById("todo"+t);o.getCompletionStatus()?(a.style.backgroundColor="white",r.style.textDecorationLine="none"):(r.style.textDecorationLine="line-through",a.style.backgroundColor="rgb(226, 224, 224,0.5)"),o.changeCompletionStatus(),console.log(o.getCompletionStatus())}function a(e){c(4,e)}function u(e){c(3,e)}function i(e){c(2,e)}function l(e){c(1,e)}function c(e,t){console.log("changePriority");var n=document.getElementById("project").innerHTML,o=m.default.get(n),r=s(t);console.log("line52");var a=o.getTodos()[r];a.changePriority("priority "+e),console.log(a);var u=document.getElementById("status"+r);console.log(u);var i="taskStatus p"+e+"Color";console.log(i),u.className=i,(0,D.default)("todoMenu"+r)}function s(e){return console.log("getIndex"),parseInt(e.match(/(\d[\d\.]*)/g))}function d(){var e=document.getElementById("project").innerHTML;console.log(e);var t=window.confirm("Are you sure you want to delete project "+e+"?");console.log(t),t&&(m.default.remove(e),(0,I.default)(),(0,k.default)(),location.reload()),(0,D.default)("settings")}var f=n(1),p=(o(f),n(4)),g=(o(p),n(9)),m=o(g),v=n(20),h=o(v),y=n(10),T=o(y),b=n(21),M=o(b),w=n(5),D=o(w),A=n(36),x=o(A),E=n(37),C=o(E),_=n(38),k=o(_),S=n(2),I=o(S),j=n(6),P=n(8),Y=n(0),F=n(16),H=n(15),B=n(39),O=n(17),L=n(18);localStorage.getItem("projects")?(console.log("localStorage found"),m.default.initialize()):(0,I.default)(),document.onreadystatechange=function(){"complete"===document.readyState&&((0,k.default)(),(0,M.default)("Today"),(0,D.default)("menu"),console.log(j(new Date,"dddd DD MMMM")))},window.removeTaskForm=T.default,window.showTaskForm=h.default,window.handleNewTodo=x.default,window.projects=m.default,window.hideShow=D.default,window.renderPage=M.default,window.newProjectHandler=C.default,window.changeToPriority4=a,window.changeToPriority3=u,window.changeToPriority2=i,window.changeToPriority1=l,window.toggleCompletion=r,window.deleteProject=d,window.format=j,window.isValid=P,window.parse=Y,window.isPast=F,window.isThisWeek=H,window.getYear=B,window.getMonth=O,window.getDate=L},function(e,t,n){"use strict";function o(){a(r()),u()}function r(){console.log("creating form");var e=document.createElement("form");e.setAttribute("name","taskForm"),e.setAttribute("id","taskForm");var t=document.createElement("input");t.setAttribute("name","task"),t.setAttribute("type","text"),t.setAttribute("placeholder","Practice guitar for 30mins"),t.setAttribute("class","formTextInput formTaskInput"),t.setAttribute("maxlength","100");var n=document.createElement("input");n.setAttribute("name","date"),n.setAttribute("type","text"),n.setAttribute("placeholder","Schedule"),n.setAttribute("class","formTextInput formTaskInput formDateInput");var o=document.createElement("select");o.id="selectPriority",o.setAttribute("name","selectPriority");for(var r=0;r<i.length;r++){var a=document.createElement("option");a.setAttribute("value",i[r]),a.text=i[r],o.appendChild(a)}var u=document.createElement("input");u.setAttribute("type","button"),u.id="submitTaskButton",u.setAttribute("value","Add Task"),u.setAttribute("onclick","handleNewTodo()"),u.setAttribute("class","formButton");var l=document.createElement("a");return l.setAttribute("href","#"),l.innerHTML="Cancel",l.setAttribute("onclick","removeTaskForm()"),l.setAttribute("class","cancelButton"),e.appendChild(t),e.appendChild(n),e.appendChild(u),e.appendChild(l),e.appendChild(o),e}function a(e){console.log("showing Form"),document.getElementsByTagName("body")[0].appendChild(e)}function u(){document.getElementById("AddTaskButton").setAttribute("onclick","")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=["priority 4","priority 3","priority 2","priority 1"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){console.log("You clicked on "+e),(0,d.default)("menu");var t=document.getElementById("project");t.innerHTML!==e&&(l(),t.innerHTML=e,"Today"===e||"Inbox"===e?(a(),u()):i(),c(e))}function a(){console.log("setupDate called"),document.getElementById("date").innerHTML=g(new Date,"dddd DD MMMM")}function u(){document.getElementById("settings-icon").style.display="none"}function i(){document.getElementById("settings-icon").style.display="block"}function l(){for(var e=document.getElementById("list");e.firstChild;)e.removeChild(e.firstChild);document.getElementById("date").innerHTML=""}function c(e){console.log("displayTodos called..."),console.log(e);var t=projects.get(e);console.log("ok"),console.log(t);for(var n=t.getTodos(),o=0;o<n.length;o++)p.default.renderTodoElement(o,n[o])}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var s=n(5),d=o(s),f=n(11),p=o(f),g=n(6)},function(e,t,n){"use strict";e.exports=function(){function e(){var e=document.createElement("div");e.setAttribute("class","todoMenuButton");var t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");return e.appendChild(t),e.appendChild(n),e.appendChild(o),e}function t(e){console.log("createTodoMenu");var t="todoMenu"+e,o=document.createElement("div");o.setAttribute("class","todoMenu"),o.setAttribute("id",t),console.log("line 38");var r=n(e);return console.log(o),o.appendChild(r),console.log(o),o}function n(e){var t="todoMenu"+e,n=document.createElement("div");n.setAttribute("class","priorityOptions");var o=document.createElement("p");o.innerHTML="Priority";var r=document.createElement("div");r.setAttribute("class","wrapper");var a=document.createElement("div");a.setAttribute("class","priorityOption p4Color"),a.setAttribute("id",t),a.setAttribute("onclick","changeToPriority4(this.id)");var u=document.createElement("div");u.setAttribute("class","priorityOption p3Color"),u.setAttribute("id",t),u.setAttribute("onclick","changeToPriority3(this.id)");var i=document.createElement("div");i.setAttribute("class","priorityOption p2Color"),i.setAttribute("id",t),i.setAttribute("onclick","changeToPriority2(this.id)");var l=document.createElement("div");return l.setAttribute("class","priorityOption p1Color"),l.setAttribute("id",t),l.setAttribute("onclick","changeToPriority1(this.id)"),r.appendChild(a),r.appendChild(u),r.appendChild(i),r.appendChild(l),n.appendChild(o),n.appendChild(r),console.log(n),n}return{createTodoMenuButton:e,createTodoMenu:t}}()},function(e,t,n){function o(e){var t=r(e);return u(t,a(t))+1}var r=n(0),a=n(24),u=n(25);e.exports=o},function(e,t,n){function o(e){var t=r(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}var r=n(0);e.exports=o},function(e,t,n){function o(e,t){var n=r(e),o=r(t),i=n.getTime()-n.getTimezoneOffset()*a,l=o.getTime()-o.getTimezoneOffset()*a;return Math.round((i-l)/u)}var r=n(3),a=6e4,u=864e5;e.exports=o},function(e,t,n){function o(e){var t=r(e),n=a(t).getTime()-u(t).getTime();return Math.round(n/i)+1}var r=n(0),a=n(7),u=n(27),i=6048e5;e.exports=o},function(e,t,n){function o(e){var t=r(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),a(n)}var r=n(14),a=n(7);e.exports=o},function(e,t,n){var o=n(29),r=n(30);e.exports={distanceInWords:o(),format:r()}},function(e,t){function n(){function e(e,n,o){o=o||{};var r;return r="string"==typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),o.addSuffix?o.comparison>0?"in "+r:r+" ago":r}var t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:e}}e.exports=n},function(e,t,n){function o(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["AM","PM"],l=["am","pm"],c=["a.m.","p.m."],s={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?i[1]:i[0]},a:function(e){return e.getHours()/12>=1?l[1]:l[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){s[e+"o"]=function(t,n){return r(n[e](t))}}),{formatters:s,formattingTokensRegExp:a(s)}}function r(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}var a=n(31);e.exports=o},function(e,t){function n(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var r=o.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}var o=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=n},function(e,t,n){function o(e,t,n){var o=r(e,n),a=r(t,n);return o.getTime()===a.getTime()}var r=n(13);e.exports=o},function(e,t,n){function o(e){return r(e).getTime()===r(new Date).getTime()}var r=n(3);e.exports=o},function(e,t,n){function o(e){var t=new Date;return t.setDate(t.getDate()+1),r(e).getTime()===r(t).getTime()}var r=n(3);e.exports=o},function(e,t,n){function o(e){var t=new Date;return t.setDate(t.getDate()-1),r(e).getTime()===r(t).getTime()}var r=n(3);e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){if(!a())return void console.log("not valid");l(),(0,h.default)(),(0,d.default)()}function a(){console.log("_validate called");var e=!1,t=document.forms.taskForm.task.value,n=document.forms.taskForm.date.value;return u(t)&&i(n)&&(e=!0),e}function u(e){console.log("_validTask called");var t=!1;return e&&(t=!0),t}function i(e){if(console.log("_validSchedule called"),0===e.length)return!0;console.log("about to call isValid"),console.log(e),(getYear(e)<getYear(new Date)||!getYear(e))&&(e+=" 2018",console.log("Added 2018 at end of str.."+e));var t=void 0;return!(!(t=y(e))||(console.log(t),console.log(t.getDate()),!t.getDate()))||(console.log("not valid date"),!1)}function l(){console.log("createNewTodo");var e=document.forms.taskForm.task.value,t=document.forms.taskForm.selectPriority,n=t.options[t.selectedIndex].text,o=document.forms.taskForm.date.value;console.log("schedule = "+o),o.length>0&&(getYear(o)<getYear(new Date)||!getYear(o))&&(o+=" 2018",console.log("Added 2018 at end of str.."+o));var r=new p.default(e,o,n,!1);console.log(r);var a=projects.get(document.getElementById("project").innerHTML);console.log("line39"),a.addTodo(r),console.log("line41"),c(r)}function c(e){console.log("generateTodoElement");var t=projects.get(document.getElementById("project").innerHTML),n=t.getTodos().length-1;m.default.renderTodoElement(n,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var s=n(10),d=o(s),f=n(1),p=o(f),g=n(11),m=o(g),v=n(2),h=o(v),y=(n(8),n(0));n(17),n(18)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e=document.getElementById("projectForm");if(console.log("newProjectHandler..."+e),a(e)){var t=new s.default(e[0].value);projects.add(t),(0,f.default)(),u(),console.log("calling hideShow"+e.id),(0,l.default)(e.id)}}function a(e){var t=!0,n=projects.get(e[0].value),o=e[0].textLength;return(n||o<=0)&&(t=!1),t}function u(){var e=document.getElementById("projectList"),t=document.createElement("li");t.setAttribute("id",projects.last().getName()),t.setAttribute("onclick","renderPage(this.id)");var n=document.createElement("p");n.innerHTML=projects.last().getName(),t.appendChild(n),e.appendChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(5),l=o(i),c=n(4),s=o(c),d=n(2),f=o(d)},function(e,t,n){"use strict";function o(){var e=document.getElementById("menu"),t=r(),n=a(),o=u();e.appendChild(t),e.appendChild(o),e.appendChild(n),document.getElementById("projectForm").style.display="none",e.style.display="none"}function r(){var e=document.createElement("ul");e.setAttribute("id","projectList");for(var t=2;t<projects.list.length;t++){var n=document.createElement("li");n.setAttribute("id",projects.list[t].getName()),n.setAttribute("onclick","renderPage(this.id)");var o=document.createElement("p");o.innerHTML=projects.list[t].getName(),n.appendChild(o),e.appendChild(n)}return e}function a(){var e=document.createElement("span"),t=document.createElement("span"),n=document.createElement("a");return e.setAttribute("id","AddProject"),e.setAttribute("onclick","hideShow('projectForm')"),t.innerHTML="+",n.innerHTML="Add Project",n.setAttribute("href","#"),e.appendChild(t),e.appendChild(n),e}function u(){var e=document.createElement("form");e.setAttribute("id","projectForm");var t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","projectName"),t.setAttribute("id","projectTextBox"),t.setAttribute("maxlength","30"),t.setAttribute("class","formTextInput");var n=document.createElement("input");n.setAttribute("type","button"),n.setAttribute("id","AddProjectButton"),n.setAttribute("value","Add Project"),n.setAttribute("onclick","newProjectHandler()"),n.setAttribute("class","formButton");var o=document.createElement("a");return o.setAttribute("href","#"),o.innerHTML="Cancel",o.setAttribute("onclick","hideShow('projectForm')"),o.setAttribute("class","cancelButton"),e.appendChild(t),e.appendChild(n),e.appendChild(o),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){function o(e){return r(e).getFullYear()}var r=n(0);e.exports=o}]);