const tasks = [];

$(document).ready(init);

function init() {
  console.log("jq-on");
  $(".js-addTask-form").on("submit", addTask);
  $(".js-task-ul").on("click", ".js-taskComplete-btn", completeTask);
}

function addTask(event) {
  event.preventDefault();
  tasks.push({
    name: $(".js-addTask-input").val(),
    completed: false
  });
  $(".js-addTask-input").val("");
  renderList();
}

function completeTask() {
  console.log($(this).parent()); // TODO: Finish getting data from index
}

function renderList() {
  $(".js-task-ul").empty();
  for (let i = 0; i < tasks.length; i++) {
    $(".js-task-ul")
      .append(
        `
    <li>
        ${tasks[i].name}<button class="js-taskComplete-btn">Complete</button>
      </li>
    `
      )
      .data("index", i);
  }
}
