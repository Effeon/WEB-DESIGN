const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// TASK ARRAY
let tasks = [];
// SAVE TASKS TO LOCAL STORAGE
function saveTasks(){
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

// CREATE TASK FUNCTION
function createTask(taskText){
    // CREATE LI
    const li = document.createElement("li");
    //CREATE TASK TEXT SPAN
    const span = document.createElement("span");
    span.textContent = taskText;
    // COMPLETE TASK
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });
    // CREATE DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    //DELETE TASK
    deleteBtn.addEventListener("click", () => {
        li.remove();

        tasks = tasks.filter(
            (task) => task !== taskText
        );

        saveTasks();
    });
    //APPEND ELEMENTS
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

//ADD TASK BUTTON
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    //PREVENTS EMPTY TASKS
    if(taskText === ""){
        return;
    }
    // ADD TASK TO ARRAY
    tasks.push(taskText);
    //SAVE TASKS
    saveTasks();
    //CREATE TASKS
    createTask(taskText);
    //CLEAR INPUT
    taskInput.value = "";
});

//ENTER KEY SUPPORT
taskInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addBtn.click();
    }
});

//LOAD TASKS ON PAGE REFRESH
window.addEventListener("load", () => {
    const storedTasks = JSON.parse(
        localStorage.getItem("tasks")
    );

    if(storedTasks) {
        tasks = storedTasks;

        tasks.forEach((task) => {
            createTask(task);
        });
    }
});