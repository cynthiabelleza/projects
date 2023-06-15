// HTML elements
let listElement = document.querySelector("#app ul") as HTMLDataListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

// List
let savedList: (string | null) = localStorage.getItem("@task_list");
let list: string[] = savedList !== null && JSON.parse(savedList) || [];

// Functions
function showTasks() {
    listElement.innerHTML = "";
    list.map(item => {
        let position = list.indexOf(item);

        let todoElement = document.createElement("li");
        let taskText = document.createTextNode(item);
        let linkElement = document.createElement("a");
        let linkText = document.createTextNode("Delete");
        linkElement.setAttribute("href", "#");
        linkElement.setAttribute("onclick", `deleteTask(${position})`);
        linkElement.setAttribute("style", "margin-left: 10px");

        linkElement.appendChild(linkText);
        todoElement.appendChild(taskText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
}

function addTask(): boolean | void {
    if(inputElement.value === "") {
        alert("Enter a task.");
        return false;
    } else {
        let inputTask: string = inputElement.value;    
        
        list.push(inputTask);
        inputElement.value = "";
        
        showTasks();
        saveData();
    }
}

function saveData() {
    localStorage.setItem("@task_list", JSON.stringify(list));    
}

function deleteTask(position: number) {
    list.splice(position, 1);
    showTasks();
    saveData();
}

showTasks();
buttonElement.onclick = addTask;

