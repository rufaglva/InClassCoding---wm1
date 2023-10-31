const toDoForm = document.querySelector("form"),
  toDoList = document.querySelector("ul");

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.querySelector(`input[type="text"]`);
  const inputValue = input.value;
  const newTask = document.createElement("li");
  const taskTitle = document.createElement("p");
  taskTitle.innerText = inputValue;
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-check";
  icon.addEventListener("click", function () {
    taskTitle.classList.toggle("line-through");
  });
  newTask.appendChild(taskTitle);
  newTask.appendChild(icon);
  toDoList.appendChild(newTask);
  input.value = "";
});