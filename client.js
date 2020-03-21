const tasks = [];

$(document).ready(init);

function init() {
  $(".js-addTask-form").on("submit", addTask);
  $(".js-task-ul").on("click", ".js-taskComplete-btn", completeTask);
}

function addTask(event) {
  //  adds task to tasks array on form submit
  event.preventDefault();
  tasks.push({
    name: $(".js-addTask-input").val(),
    completed: false
  });
  $(".js-addTask-input").val("");
  renderList();
}

function completeTask() {
  //  inverts task object completed property
  let i = $(this).data("index");
  tasks[i].completed = !tasks[i].completed;
  renderList();
}

function renderList() {
  //  renders js-task-ul to screen
  $(".js-task-ul").empty();
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      //  complete task, disabled button
      $(".js-task-ul").append(
        `
      <li class="isComplete">
          ${tasks[i].name}<button  data-index=${i} class="js-taskComplete-btn btn" disabled>Complete</button>
        </li>
      `
      );
    } else {
      //  incomplete task, complete button is enabled
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
