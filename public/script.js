// Orginal code from the week 3 tutorial
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

form.elements.taskName.value = "taskTest";

var taskList = [];

function addTask(name, type, rate, time, client) {
    let task = {
        name,
        type,
        id: Date.now(),
        date: new Date().toISOString(),
        rate,
        time,
        client,
    }
    taskList.push(task);
    displayTask(task);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask(
        form.elements.taskName.value,
        form.elements.taskType.value,
        form.elements.taskRate.value,
        form.elements.taskTime.value,
        form.elements.taskClient.value,
    );
})

function displayTask(task) {
    let item = document.createElement("li");
    item.setAttribute("data-id", task.id);
    item.innerHTML =
        `<p><strong>${task.name}</strong><br>${task.type}</p><span><em>${task.time} hours</em><br>${task.rate}/hr</span>`;

    tasklist.appendChild(item);

    form.reset();
}