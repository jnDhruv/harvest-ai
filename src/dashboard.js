import api from "./modules/api";

import "./styles/home.css";
import "./styles/input.css";
import "./styles/dashboard.css";

document.addEventListener("DOMContentLoaded", async function () {
  const userData = JSON.parse(localStorage.getItem("farmDetails"));

  const response = await api.getData(userData);

  updateDataInHtml(12, 3.8, [
    { task: "use urea to increase yield by 8%" },
    { task: "Medium Priority: Apply Phosphorus-based fertilizer to Field" },
    {
      task: "Low Priority: use irrigation techniques such as surface irrigation to increase yield by 3%",
    },
  ]);

  const taskButtons = document.querySelectorAll(".task-done-btn");

  taskButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const listItem = this.parentElement;
      const taskTextNode = listItem.childNodes[0];

      const wrapper = document.createElement("span");
      wrapper.style.textDecoration = "line-through";
      wrapper.textContent = taskTextNode.textContent;

      listItem.replaceChild(wrapper, taskTextNode);

      listItem.style.opacity = "0.6";

      this.textContent = "Completed";
      this.disabled = true;
      this.style.backgroundColor = "rgba(13, 148, 13, 1)";
      this.style.cursor = "default";
    });
  });
});

function updateDataInHtml(days, yieldPercent, recommendations) {
  let daysPrint = document.querySelector("#weather-status");
  daysPrint.textContent = `${days} days left`;

  let yieldPercentPrint = document.querySelector("#yield-prediction");
  yieldPercentPrint.textContent = `${yieldPercent} Ton/hectares`;

  let taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";

  recommendations.forEach((element, index) => {
    let taskItem = document.createElement("li");
    taskItem.id = `task-${index}`;
    taskItem.textContent = element.task;

    let doneBtn = document.createElement("button");
    doneBtn.classList.add("task-done-btn");
    doneBtn.textContent = "Mark as Done";

    taskItem.appendChild(doneBtn);
    taskList.appendChild(taskItem);
  });
}
