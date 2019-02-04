

var todos = [
  { todoText: "One", todoStatus: false },
  { todoText: "Three", todoStatus: false }
];

var todoInput = document.querySelector("#todo-text");
var button = document.querySelector(".add-todo");

function addTodo() {
  if (todoInput.value) {
    var newTodo = {
      todoText: todoInput.value,
      todoStatus: false
    };
    todos.push(newTodo);
    displayTodo();
  }
  todoInput.value = "";
}
function toggleTodo(e) {
  var id = e.target.dataset.index;
  todos[id].todoStatus = !todos[id].todoStatus;
}

function displayTodo() {
  todos.forEach((todo, index) => {
    var list = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("data-index", index);
    var span = document.createElement("span");
    span.textContent = todo.todoText;
    list.appendChild(checkBox);
    list.appendChild(span);
    document.querySelector("ul").appendChild(list);
    checkBox.addEventListener("click", toggleTodo);
  });
}

button.addEventListener("click", addTodo);
