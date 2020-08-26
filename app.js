// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(Event){
    //prevents form from submit
    event.preventDefault();

// Todo div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//create LI
const newTodo = document.createElement("li")
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

// checkmark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add('complete-btn');
todoDiv.appendChild(completedButton);

// trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton)

//append the list
todoList.appendChild(todoDiv)

todoInput.value='';
};


function deleteCheck(event){
   const item = event.target;

// delete todo
    if(item.classList[0] === 'trash-btn'){
        item.parentElement.remove();
    }

    // check todo
    if(item.classList[0]==='complete-btn'){
        let todo = item.parentElement;
        todo.classList.toggle('completed')

    }

}