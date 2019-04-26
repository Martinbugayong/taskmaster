// get elements
var container = document.getElementById("task_container")
var buttonElement = document.getElementById("addBtn");
var taskTitle = document.getElementById("taskTitle");
var taskDesc = document.getElementById("taskDesc");

// "state"
var tasks = [
    {
        title: "Example Task Title",
        description: "This is the decription, Check the checkbox when the task is done",
    }
]

// functions
var render = function () {
    container.innerHTML = '' 
    for (i = 0; i < tasks.length; i++) { // forloop dynamically creating <li> that is typed
        var node = document.createElement("li"); 
        /* var delBtn = document.createElement("button");
            delBtn.innerHTML = "-";*/
        var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
        var titlenode = document.createTextNode(tasks[i].title + " | "); 
        var descnode = document.createTextNode(tasks[i].description); 
        node.appendChild(titlenode) 
        node.appendChild(descnode)
        //node.appendChild(delBtn)
        node.appendChild(checkbox)
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