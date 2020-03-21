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
  let i = $(this).data("index");
  tasks[i].completed = !tasks[i].completed;
  renderList();
}

function renderList() {
  $(".js-task-ul").empty();
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      $(".js-task-ul").append(
        `
      <li class="isComplete">
          ${tasks[i].name}<button  data-index=${i} class="js-taskComplete-btn btn">Complete</button>
        </li>
      `
      );
    } else {
      $(".js-task-ul").append(
        `
      <li>
          ${tasks[i].name}<button  data-index=${i} class="js-taskComplete-btn btn">Complete</button>
        </li>
      `
      );
    }
  }
}
