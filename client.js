const tasks = [];

$(document).ready(init);

function init() {
  console.log("jq-on");
  $(".js-addTask-form").on("submit", addTask);
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

function renderList() {
  $(".js-task-ul").empty();
  for (let item of tasks) {
    $(".js-task-ul").append(`
    <li>
        ${item.name}<button class="js-taskComplete-btn">Complete</button>
      </li>
    `);
  }
}
