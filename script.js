let inputElm = document.querySelector("#taskInput")
let btn = document.querySelector("#addBtn")
let ulEl = document.querySelector("#taskList")
let totalTasksElm = document.querySelector("#totalTasks")
let completedTasksElm = document.querySelector("#completedTasks")

let totalTasks = 0;


btn.addEventListener("click", () => {
    todo();
    updateTaskCounts();
})

function updateTaskCounts() {
    totalTasks = ulEl.children.length;
    totalTasksElm.textContent = totalTasks;
}


function todo() {
    if (inputElm.value === "") {
        alert("No task is given!")
    }
    else {
        let value = inputElm.value;

        let liEl = document.createElement("li")
        liEl.innerHTML = value;

        ulEl.append(liEl);

        let trashElm = document.createElement("div")
        trashElm.innerHTML = `<span class="delete">❌</span>`;
        liEl.append(trashElm);

        inputElm.value = "";

        trashElm.addEventListener("click", () => {
            liEl.remove();
            updateTaskCounts();
        })
    }
}