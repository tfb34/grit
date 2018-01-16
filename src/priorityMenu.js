

export default function createPriorityMenuButton(){
    let outerDiv = document.createElement("div");
    outerDiv.setAttribute("id","priorityMenu");

    let innerDiv = document.createElement("div");
    let innerDiv2 = document.createElement("div");
    let innerDiv3 = document.createElement("div");

    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(innerDiv2);
    outerDiv.appendChild(innerDiv3);
    
    return outerDiv;
}