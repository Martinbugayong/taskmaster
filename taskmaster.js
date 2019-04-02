// get elements
var container = document.getElementById("task_container")
var buttonElement = document.getElementById("addBtn");
var taskTitle = document.getElementById("taskTitle");
var taskDesc = document.getElementById("taskDesc");

// state
var tasks = [
    {
        title: "task1",
        description: "desc1",
    },
    {
        title: "task2",
        description: "desc2",
    },
    {
        title: "task3",
        description: "desc3",
    }
]

// functions
var render = function () {
    container.innerHTML = '' 
    for (i = 0; i < tasks.length; i++) { // forloop dynamically creating <li> that is typed
        var node = document.createElement("li"); 
        var titlenode = document.createTextNode(tasks[i].title); 
        var descnode = document.createTextNode(tasks[i].description); 
        node.appendChild(titlenode) 
        node.appendChild(descnode) 
        container.appendChild(node) 
    }
}

var addTask = function () {
    var obj = { 
        title: taskTitle.value, 
        description: taskDesc.value 
    }
    tasks.push(obj) 
    render(); 
}

// event Listiners
addBtn.addEventListener("click", addTask)

// initialize
render()