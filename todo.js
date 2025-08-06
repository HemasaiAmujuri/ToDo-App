let localStorageArray = [];
let UIArray = [];
let savedTasksDisplayed = false;

function addTask() {
  const tasks = document.getElementById("tasks");
  const input = document.getElementById("userInput");
  const userTask = input.value;
  UIArray.push(userTask);
  if (userTask == "") {
    alert("please enter your task");
    return;
  }
  const container = document.createElement("div");
  container.className = "nested-div";
  container.id=`container-${UIArray.length}`
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

    if (container.querySelector('.save-btn')) return;

  const savebtn = document.createElement("button");
  savebtn.textContent = "✔";
  savebtn.className = "medium-buttons save-btn";
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
    let nestedDiv = container.querySelector('div');
    const text = nestedDiv.textContent;
    const index = UIArray.indexOf(text)
    if( index > -1){
      UIArray.splice(index,1)
    }
    container.remove();
  }
  container.appendChild(deleteButton);
  tasks.appendChild(container);
}

function save() {
  if( UIArray.length  == 0 ){
      alert("No tasks to save");
      return;
  }
  localStorage.clear();
  let localStorageArray = [...UIArray]
  const localStorageArrayStringfy = JSON.stringify(localStorageArray);
  localStorage.setItem("Saved-tasks", localStorageArrayStringfy);
  alert("Data Saved Successfully")
}

function onclear() {
  localStorage.removeItem("Saved-tasks");
  document.getElementsByClassName("nested-div").innerHTML = "";
  window.location.reload();
  alert("Data cleared successfully");
}

function savedTasks() {
  const SavedTasksString = localStorage.getItem("Saved-tasks");
  console.log(SavedTasksString);

  const SavedTasks = JSON.parse(SavedTasksString);
  if(SavedTasks == null ){
     alert("No Saved tasks");
     return;
  }

  if(savedTasksDisplayed){
    if(SavedTasks.every(element => UIArray.includes(element))){
    alert("All previous Saved Tasks displayed");
    return;
    }
  }
  const elementsNotInUI = SavedTasks.filter(item => !UIArray.includes(item));

    if(elementsNotInUI == 0){
      alert("All saved tasks already displayed")
    }
  
  if(elementsNotInUI.length > 0){
  for (i = 0; i < elementsNotInUI.length; i++) {
    if( i === elementsNotInUI.length-1 ){
       savedTasksDisplayed = true;
    }
    const data = elementsNotInUI[i];
    UIArray.push(data);
    console.log(UIArray,"1")
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
    deleteButton.onclick = () => {
      let nestedDiv = container.querySelector('div')
      let text = nestedDiv.textContent;
      const index = UIArray.indexOf(text)
      if( index > -1){
        UIArray.splice(index,1)
      }
      container.remove();
    }
    container.appendChild(deleteButton);
    tasks.appendChild(container);
  }
}
}
