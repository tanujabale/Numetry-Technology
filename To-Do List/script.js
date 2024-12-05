// Select DOM elements
const taskInput = document.getElementById('task-input');
const categorySelect = document.getElementById('category-select');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearAllButton = document.getElementById('clear-all');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const taskText = document.createElement('span');
        taskText.className = `task-text ${task.completed ? 'completed' : ''}`;
        taskText.textContent = task.text;

        const taskCategory = document.createElement('span');
        taskCategory.className = 'task-category';
        taskCategory.textContent = ` (${task.category})`;

        // Mark as completed
        taskText.addEventListener('click', () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        // Edit Button
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

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(taskText);
        li.appendChild(taskCategory);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Add Task
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

// Clear All Tasks
clearAllButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all tasks?')) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
});

// Initial Render
renderTasks();
