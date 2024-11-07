let todoItems = [];
let isEditing = false;
let editIndex = null;

// Function to create a new to-do item
function createTodo(title, description, dueDate) {
    const newTodo = {
        title: title,
        description: description || '',
        dueDate: new Date(dueDate),
        completed: false
    };
    todoItems.push(newTodo);
    renderList();
    clearInputFields();
}

// Function to render the to-do list
function renderList() {
    const todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = '';

    todoItems.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.innerHTML = `
            <div class="todo-header">
                <strong>${todo.title}</strong>
                <span class="due-date">${todo.dueDate.toLocaleString()}</span>
            </div>
            <p>${todo.description}</p>
            <button onclick="toggleComplete(${index})">${todo.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
            <button onclick="deleteTodo(${index})">Delete</button>
            <button onclick="editTodo(${index})">Edit</button>
            <hr>
        `;
        if (todo.completed) {
            todoDiv.classList.add('completed');
        }
        todoListContainer.appendChild(todoDiv);
    });
}

// Function to edit an existing to-do item
function editTodo(index) {
    const todo = todoItems[index];
    document.getElementById('title').value = todo.title;
    document.getElementById('description').value = todo.description;
    document.getElementById('dueDate').value = todo.dueDate.toISOString().slice(0, 16);

    isEditing = true;
    editIndex = index;
    document.getElementById('addButton').textContent = 'Update To-Do';
}

// Function to update the to-do item
function updateTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    if (editIndex !== null) {
        todoItems[editIndex].title = title;
        todoItems[editIndex].description = description;
        todoItems[editIndex].dueDate = new Date(dueDate);
        renderList();
        clearInputFields();

        isEditing = false;
        editIndex = null;
        document.getElementById('addButton').textContent = 'Add To-Do';
    }
}

// Function to clear input fields after adding or updating a to-do
function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
}

// Function to toggle the completion status of a to-do item
function toggleComplete(index) {
    todoItems[index].completed = !todoItems[index].completed;
    renderList();
}

// Function to delete a to-do item
function deleteTodo(index) {
    todoItems.splice(index, 1);
    renderList();
}

// Function to sort the list by due date (ascending)
function sortAsc() {
    todoItems.sort((a, b) => a.dueDate - b.dueDate);
    renderList();
}

// Function to sort the list by due date (descending)
function sortDesc() {
    todoItems.sort((a, b) => b.dueDate - a.dueDate);
    renderList();
}

// Event Listener for the Add/Update Button
document.getElementById('addButton').addEventListener('click', function () {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    // Check if all fields are filled
    if (!title || !description || !dueDate) {
        alert('Please fill out all fields.');
        return;
    }

    if (isEditing) {
        updateTodo();
    } else {
        createTodo(title, description, dueDate);
    }
});

// Event Listeners for Sorting Buttons
document.getElementById('sortAsc').addEventListener('click', sortAsc);
document.getElementById('sortDesc').addEventListener('click', sortDesc);
