// Get references to HTML elements using their IDs
const form = document.getElementById('todo-form');   // Form element
const input = document.getElementById('todo-input'); // Input box
const list = document.getElementById('todo-list');   // UL where tasks will be listed

// Load tasks from local storage when the page is fully loaded
document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);

// When the form is submitted (user clicks "Add Task" button)
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop the page from reloading

    const taskText = input.value.trim(); // Get the input text and remove extra spaces

    if (taskText !== '') {
        addTaskToDOM(taskText);        // Show the task in the list
        saveTaskToLocalStorage(taskText); // Save the task in local storage
        input.value = '';              // Clear the input box
    }
});


// Function to display the task in the list
function addTaskToDOM(taskText, isCompleted = false) {
    const li = document.createElement('li'); // Create a new list item (li)

    // If the task is already completed, add the "completed" class
    if (isCompleted) {
        li.classList.add('completed');
    }

    li.textContent = taskText; // Set the task text

    // Create a container for the action buttons (complete/delete)
    const actions = document.createElement('div');
    actions.classList.add('actions');

    // ✔ Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.title = 'Mark as complete';

    // When clicked, mark task as complete/incomplete
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed'); // Add/remove 'completed' style
        updateLocalStorage();             // Save updated task list
    });

    // 🗑 Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.title = 'Delete task';

    // When clicked, remove the task
    deleteBtn.addEventListener('click', () => {
        li.remove();              // Remove from the screen
        updateLocalStorage();    // Save updated task list
    });

    // Add both buttons to the actions container
    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    // Add the actions container to the task item
    li.appendChild(actions);

    // Finally, add the task item to the task list (ul)
    list.appendChild(li);
}

// Save a new task in local storage
function saveTaskToLocalStorage(taskText) {
    const tasks = getTasksFromLocalStorage(); // Get current list
    tasks.push({ text: taskText, completed: false }); // Add new task
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save back to localStorage
}

// Load all tasks from local storage and show them
function loadTasksFromLocalStorage() {
    const tasks = getTasksFromLocalStorage(); // Get saved tasks

    // Show each task in the list
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
}

// Get tasks from local storage and return as array
function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks'); // Get string from localStorage
    return tasks ? JSON.parse(tasks) : [];       // Convert to array or return empty array
}

// Save the current task list after any changes (complete/delete)
function updateLocalStorage() {
    const taskElements = list.querySelectorAll('li'); // Get all task items
    const updatedTasks = [];

    // For each task item, store its text and whether it is completed
    taskElements.forEach(taskEl => {
        updatedTasks.push({
            text: taskEl.firstChild.textContent,                      // Task text
            completed: taskEl.classList.contains('completed') // True/false
        });
    });

    // Save the updated task list to local storage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}