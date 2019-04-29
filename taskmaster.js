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
        // id: makeid(6)
    }
]

// functions
var render = function () {
    container.innerHTML = '' 
    for (i = 0; i < tasks.length; i++) { // forloop dynamically creating <li> that is typed
        var node = document.createElement("li"); 
        var delBtn = document.createElement("button");
            delBtn.innerHTML = "-";
        var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
        var titlenode = document.createTextNode(tasks[i].title + " | "); 
        var descnode = document.createTextNode(tasks[i].description); 
        var RANDOM_ID = makeid(6);
        node.id = RANDOM_ID
        node.appendChild(checkbox)
        node.appendChild(delBtn)
        node.appendChild(titlenode) 
        node.appendChild(descnode)
        container.appendChild(node) 
    }
}

var addTask = function () {
    var obj = { 
        title: taskTitle.value, 
        description: taskDesc.value,
        id: makeid(6)
    }
    tasks.push(obj) 
    render(); 
    console.log(obj);
}

// var delTask = function () {
//     var toBeDeleted = node.
// }

// Make ID function 
var makeid = function (length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

// event Listiners
addBtn.addEventListener("click", addTask)

// initialize
render()
