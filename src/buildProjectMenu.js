
export default function buildProjectMenu(){
    let menu = document.getElementById("menu");
 	let ul = _createProjectDOMList();
    let b = _createAddProjectButton();
    let f = _createProjectForm();

    menu.appendChild(ul);
    menu.appendChild(f);
    menu.appendChild(b);
}

function _createProjectDOMList(){
    let ul = document.createElement("ul");
    ul.setAttribute("id","projectList");
    // do not include the first 2 projects 'inbox' and 'today'
    for(let i = 2;i<projects.list.length;i++){
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
function _createAddProjectButton(){
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


// Returns a form for creating a new project
function _createProjectForm(){
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