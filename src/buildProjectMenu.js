//import projects from './allProjects';
//import Project from './project';
// creates a DOM list of current projects
// should be called ONCE at the start of
// page load. localstorage may have to work with this later
export default function buildProjectMenu(){
    let menu = document.getElementById("menu");
 	let ul = createProjectDOMList();
    let b = createAddProjectButton();
    let f = createProjectForm();

    menu.appendChild(ul);
    menu.appendChild(f);
    menu.appendChild(b);
    document.getElementById("projectForm").style.display = "none";

 	menu.style.display ="none";
}

function createProjectDOMList(){
    let ul = document.createElement("ul");
    ul.setAttribute("id","projectList");
    for(let i = 0;i<projects.list.length;i++){
        let li = document.createElement("li");
        li.setAttribute("id",projects.list[i].getName());

        li.setAttribute("onclick","renderPage(this.id)");
        let p = document.createElement("p");
        p.innerHTML = projects.list[i].getName();
        li.appendChild(p);
        ul.appendChild(li);

    }
    return ul;
}
function createAddProjectButton(){
     /*create + Add project button*/
    let s = document.createElement("span");
    let s2 = document.createElement("span");
    let a = document.createElement("a");

    s.setAttribute("id","AddProject");
    s.setAttribute("onclick","hideShow('projectForm')");
    s2.innerHTML="+";
    a.innerHTML="Add Project";
    a.setAttribute("href","#");
    s.appendChild(s2);
    s.appendChild(a);

    return s;
}

//2. create a form to add a new project< 2 inputs(type: text, button), 1 a link for cancel>
// Returns a form for project
function createProjectForm(){
    let form = document.createElement("form");
    form.setAttribute("id","projectForm");

    let textInput = document.createElement("input");
    textInput.setAttribute("type","text");
    textInput.setAttribute("name","projectName");
    textInput.setAttribute("id","projectTextBox");
    textInput.setAttribute("maxlength","30");
    textInput.setAttribute("class","formTextInput");
    
    let submitButton = document.createElement("input");
    submitButton.setAttribute("type","button");
    submitButton.setAttribute("id","AddProjectButton");
    submitButton.setAttribute("value","Add Project");
    submitButton.setAttribute("onclick","newProjectHandler()");
    submitButton.setAttribute("class","formButton");

    let a = document.createElement("a");
    a.setAttribute("href","#");
    a.innerHTML="Cancel";
    a.setAttribute("onclick","hideShow('projectForm')");
    a.setAttribute("class","cancelButton");

    form.appendChild(textInput);
    form.appendChild(submitButton);
    form.appendChild(a);
    return form;
}