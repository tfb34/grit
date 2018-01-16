import hideShow from './hideShowMenu';
import Project from './project';

export default function newProjectHandler(){
    let form = document.getElementById("projectForm");
    if(validate(form)){
        let project = new Project(form[0].value);
        projects.add(project);
        updateProjectDOMList();
        hideShow(form.id);
    }
}

function validate(form){
    let bool = true;
    let value = projects.get(form[0].value);
    let textLength = form[0].textLength;
    if(value || textLength <=0){
        bool = false;
    }
    return bool;
}

function updateProjectDOMList(){
    let ul = document.getElementById("projectList");

    let li = document.createElement("li");
    //li.setAttribute("id",projects.list[i].getName());
    li.setAttribute("id",projects.last().getName());
    li.setAttribute("onclick","renderPage(this.id)");
    let p = document.createElement("p");
    p.innerHTML = projects.last().getName();
    li.appendChild(p);
    ul.appendChild(li);   
}
