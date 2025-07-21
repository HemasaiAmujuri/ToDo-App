function addTask(){
    const tasklist = document.getElementById("task-list");
    const value = document.getElementById("userInput").value;
    let listItem = document.createElement('li');
    listItem.innerText=value;
    tasklist.appendChild(listItem);   
}                                                                  




