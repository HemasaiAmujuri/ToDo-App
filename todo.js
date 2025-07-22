function addTask() {
  const tasks = document.getElementById("tasks");
  const input = document.getElementById("userInput");
  const userTask = input.value;
  if (userTask == "") {
    alert("please enter your task");
    return;
  }
  let container = document.createElement("div");
  container.className = "nested-div";
  let paragraph = document.createElement("p");
  paragraph.className = "target-paragraph";
  paragraph.textContent = userTask;
  container.appendChild(paragraph);
  input.value = "";
  
  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.className="medium-buttons";
  editbtn.onclick = () => {
    const tasks = paragraph.textContent;
    console.log(tasks)
    const input1 = document.createElement("input");
    input1.type = "text";
    input1.value = tasks;
    console.log(input1);
    container.insertBefore(input1,paragraph);
  };
  
  container.appendChild(editbtn);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("medium-buttons");
  deleteButton.onclick = () => container.remove();
  container.appendChild(deleteButton);
  tasks.appendChild(container);
}

function save() {
  const data = document.getElementById("tasks");
  const nesteddivData = data.querySelector(".nested-div .target-paragraph");
  const paragraph = nesteddivData.textContent;
  localStorage.setItem("data", paragraph);
}

function onclear() {
  alert("1");
  localStorage.removeItem("data");
}
