const btn = document.querySelector("[data-form-btn]");
// console.log(btn)

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]'); 
    const list = document.querySelector('[data-list]');
    const value = input.value;
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    list.appendChild(task);
}

btn.addEventListener("click", createTask );