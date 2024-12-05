// Select DOM elements
const taskInput = document.getElementById('task-input');
const categorySelect = document.getElementById('category-select');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearAllButton = document.getElementById('clear-all');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks on the page
function renderTasks() {
    taskList.innerHTML = ''; // Clear the task list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.className = `task-text ${task.completed ? 'completed' : ''}`;
        taskText.textContent = `${task.text} (${task.category})`;

        // Toggle completed state
        taskText.addEventListener('click', () => {
            task.completed = !task.completed; // Toggle task's completed status
            saveTasks(); // Save the updated state
            renderTasks(); // Re-render the task list
        });

        // Edit task button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn';
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Update your task:', task.text);
            if (newTaskText) {
                task.text = newTaskText;
                saveTasks();
                renderTasks();
            }
        });

        // Delete task button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(taskText);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Add task functionality
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const taskCategory = categorySelect.value;
    if (taskText) {
        tasks.push({ text: taskText, category: taskCategory, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = ''; // Clear input
    } else {
        alert('Please enter a task.');
    }
});

// Clear all tasks
clearAllButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all tasks?')) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
});

// Initial render
renderTasks();
