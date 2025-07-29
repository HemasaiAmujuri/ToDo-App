let userTasksArray = [];
container = ""

function addTask() {
  const tasks = document.getElementById("tasks");
  const input = document.getElementById("userInput");
  const userTask = input.value;
  userTasksArray.push(userTask);
  if (userTask == "") {
    alert("please enter your task");
    return;
  }
  container = document.createElement("div");
  container.className = "nested-div";
  let nestedContainer = document.createElement("div");
  nestedContainer.className = "target-nestedContainer";
  nestedContainer.contentEditable = false;
  nestedContainer.textContent = userTask;
  container.appendChild(nestedContainer);
  input.value = "";

  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.className = "medium-buttons";
  editbtn.id = "edit-button";
  editbtn.onclick = () => {
    nestedContainer.contentEditable = true;
    nestedContainer.focus();

  const savebtn = document.createElement("button");
  savebtn.textContent = "✔";
  savebtn.className = "medium-buttons";
  savebtn.id = "submit";
  container.appendChild(savebtn);
  container.insertBefore(savebtn,editbtn);
  savebtn.onclick = () => {
    nestedContainer.contentEditable = false;
    savebtn.remove();
  };
  };

  container.appendChild(editbtn);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("medium-buttons");
  deleteButton.onclick = () => { 
    container.remove();
  }
  container.appendChild(deleteButton);
  tasks.appendChild(container);
}

function save() {
  const userTasksArrayStringify = JSON.stringify(userTasksArray);
  localStorage.setItem("data", userTasksArrayStringify);
}

function onclear() {
  localStorage.removeItem("data");
  document.getElementsByClassName("nested-div").innerHTML = "";
  window.location.reload();
  alert("data cleared successfully");
}

function savedTasks() {
  container.innerHTML  = "";
  const getUserTasks = localStorage.getItem("data");
  if(getUserTasks == null ){
     return 
  }
  const getUserTasksArrayParse = JSON.parse(getUserTasks);
  for (i = 0; i < getUserTasksArrayParse.length; i++) {
    const data = getUserTasksArrayParse[i];
    let container = document.createElement("div");
    container.className = "nested-div";
    let nestedContainer = document.createElement("div");
    nestedContainer.className = "target-nestedContainer";
    nestedContainer.innerText = data;
    container.appendChild(nestedContainer);

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.className = "medium-buttons";
    editbtn.id = "edit-button";
    editbtn.onclick = () => {
      const todoTask = nestedContainer.textContent;
      console.log(todoTask);
      nestedContainer.contentEditable = true;
      nestedContainer.focus();


    const savebtn = document.createElement("button");
    savebtn.textContent = "✔";
    savebtn.className = "medium-buttons";
    savebtn.id = "submit";
    container.appendChild(savebtn);
    container.insertBefore(savebtn,editbtn)
    savebtn.onclick = () => {
      nestedContainer.contentEditable = false;
      savebtn.remove()
    };
    };

    container.appendChild(editbtn);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("medium-buttons");
    deleteButton.onclick = () => container.remove();
    container.appendChild(deleteButton);
    tasks.appendChild(container);
  }
}
