"use strict";
// HTML elements
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
// List
let savedList = localStorage.getItem("@task_list");
let list = savedList !== null && JSON.parse(savedList) || [];
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
function addTask() {
    if (inputElement.value === "") {
        alert("Enter a task.");
        return false;
    }
    else {
        let inputTask = inputElement.value;
        list.push(inputTask);
        inputElement.value = "";
        showTasks();
        saveData();
    }
}
function saveData() {
    localStorage.setItem("@task_list", JSON.stringify(list));
}
function deleteTask(position) {
    list.splice(position, 1);
    showTasks();
    saveData();
}
showTasks();
buttonElement.onclick = addTask;
