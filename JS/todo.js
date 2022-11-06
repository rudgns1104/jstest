const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDOInput = toDoForm.querySelector("input");  //document.querySelector("#todo-form input")과 같다.

function paintToDo(newTodo){

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDOInput.value;
    toDOInput.value = "";
    paintToDo(newTodo);
} 

toDoForm.addEventListener("submit", handleToDoSubmit);