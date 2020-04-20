const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const sortAsec = document.querySelector(".sort-az");
const sortDsec = document.querySelector(".sort-za");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
sortAsec.addEventListener("click", (event) => sortlist(event, false));
sortDsec.addEventListener("click", (event) => sortlist(event, true));

function addTodo(event) {
  event.preventDefault();
  console.log("Inside addTodo");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("comp-btn");
  todoDiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trsh-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trsh-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "comp-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function sortlist(event, descFlag) {
  event.preventDefault();
  const list = todoList.getElementsByTagName("li");
  var vals = [];
  for (var i = 0, l = list.length; i < l; i++) {
    vals.push(list[i].innerHTML);
  }
  vals.sort();
  if (descFlag) {
    vals.reverse();
  }

  for (var i = 0, l = list.length; i < l; i++) {
    list[i].innerHTML = vals[i];
  }
}
