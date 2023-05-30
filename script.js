const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Btn = document.getElementById("btn");

function addTask() {
  if (inputBox.value === "") {
    alert("You have to write something");
  } else {
    let li = document.createElement("li");
    listContainer.appendChild(li);
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = "\u00d7";
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function setData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
