function addTask() {
  const tasklist = document.getElementById("task-list");
  const value = document.getElementById("userInput").value;
  let listItem = document.createElement("li");
  listItem.innerText = value;
  tasklist.appendChild(listItem);
  const edit = document.createElement("button");
  edit.textContent = "Edit"
  edit.classList.add('medium-buttons')
  tasklist.appendChild(edit);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add('medium-buttons')
  tasklist.appendChild(deleteButton);
}
