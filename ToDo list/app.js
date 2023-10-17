// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listners

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deletecheck);
filterOption.addEventListener("click",filtertodo);

// Functions
function addTodo(event){

    // prevent form from submitting
    event.preventDefault();
    
    // creating todoDIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // creating newTodo

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // completed / check-mark button

    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    
    // Trash button
    const trashButton = document.createElement('button');4
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to ul with class "todo-list"
    todoList.appendChild(todoDiv);

    // to clear the input value
    todoInput.value = ""; 
}

function deletecheck(e){
    const item = e.target;

    //delete todo

    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation

        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
    }
    // check mark

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filtertodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
            break;

            case "uncompleted" :
                if(!todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}
























// // selectors 


// const todoInput = document.querySelector('.todo-input');
// const todoButton = document.querySelector('.todo-button');
// const todoList= document.querySelector('.todo-list');

// // Event listners
// todoButton.addEventListener("click",addTodo);
// const chked_item = document.querySelector(".complete-btn");
// // const rmv_item = document.querySelector(".trash-btn");



// // chked_item.addEventListener("click",checked_item);
// // Functions


// function addTodo(event){
    
//     //prevent form from submitting
//     event.preventDefault();
//     //Todo div

//     // const todoDiv = document.createElement("div");
//     // todoDiv.classList.add("todo");

//     // create li 
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todoInput.value;
//     newTodo.classList.add("todo-item");

//     // todoDiv.appendChild(newTodo);

//     // Check mark button

//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class = "fas fa-check"></i>'; 
//     completedButton.classList.add("complete-btn");
//     newTodo.appendChild(completedButton);

//     // Check trash button

//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//     trashButton.classList.add("trash-btn");
//     newTodo.appendChild(trashButton);

//     //APPEND TO LIST
//     todoList.appendChild(newTodo);

//     //clear todoinput value
//     todoInput.value = "";
//     // const rmv_item = document.querySelector(".trash-btn");
//     // trashButton.addEventListener("click",deleteCheck);
// }

// function deleteCheck(){
//     // const element = document.querySelector(".to");
//     // const activeLink = document.querySelector(".todo-item")
//     // if (activeLink) {
//     //     activeLink.classList.remove("active")
//     //   }
//     // element.classList.add("delete-animation");
//     // element.addEventListener("animationend",() =>{
//     //     element.remove();
//     // });
    
// }
// $(".trash-btn").click(function() {
//     var $row = $(this).closest("li");
//     alert("jquewry");
// });

// // function checked_item(){
// //     const x =document.querySelector(".todo-item");
// //     x.classList.toggle("checked-decoration");

// // }

// // // Event listners
// // todoButton.addEventListener("click",addTodo);


// 2nd trial 