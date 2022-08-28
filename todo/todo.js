let addTodoButton = document.getElementById("addTodo");
let inputField = document.getElementById("inputField");
let todoContainer = document.getElementById("todoContainer");

addTodoButton.addEventListener("click",function(){
    let paragraph = document.createElement("p");

paragraph.classList.add("paragraph-styling");

paragraph.innerText = inputField.ariaValueMax;
todoContainer.append(paragraph);
inputField.value="";

paragraph.addEventListener("click", function(){
paragraph.style.textDecoration =" line-through";
});

paragraph.addEventListener("dblclick",function(){
todoContainer.removeChild(paragraph);
});
});