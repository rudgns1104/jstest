const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDOInput = toDoForm.querySelector("input");  //document.querySelector("#todo-form input")과 같다.

const TODOS_KEY = "todos";

const toDos = [];

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { 
    event.preventDefault();
    const newTodo = toDOInput.value;
    toDOInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
} 

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
}
