import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector('[data-form-input]'); 
const list = document.querySelector('[data-list]');
const noTask = document.querySelector('.noTask');

const createTask = (evento) => {
    evento.preventDefault();
    const text = input.value;

    if(text !== ""){
        const task = document.createElement('li');
        task.classList.add('card');
        
        const taskContent = document.createElement('div');
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.textContent = text;
        
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
        input.value = '';
        noTask.style.display = 'none';
    }
}

btn.addEventListener("click", createTask );