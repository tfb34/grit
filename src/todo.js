// todo.js

export default(task,dueDate,priority)=>{

  let priorityLevel = priority || "priority 4";
  let completion = false;
  let project = null; // todo does not need one

/*Show functions*/
  const getTask=()=>{
    return task;
  };

  const getDueDate=()=>{
    return dueDate;
  };

  const getPriority=()=>{
    return priorityLevel;
  };

  const getCompletion=()=>{
    return completion;
  };

  const getProject=()=>{
    return project;
  };
/* Edit functions*/
  const changeTask = newTask => {
    task = newTask;
  };

  const changeDueDate= newDate=>{
    dueDate = newDate;
  };
  const changeCompletion =()=>{
    if(completion){
      completion = false;
    }else{
      completion = true;
    }
  };
  const changeProject=newProject=>{
    project = newProject;
  };
  return{
    task,
    dueDate,
    priorityLevel,
    completion,
    changeTask,
    getTask
  }
};