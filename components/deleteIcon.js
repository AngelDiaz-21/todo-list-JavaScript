const noTask = document.querySelector('.noTask');
const list = document.querySelector('[data-list]');

const deleteIcon = () =>{
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    icon.addEventListener("click", deleteTask)
    return icon;
}

const deleteTask = (event) => {
    const child = event.target.parentElement;
    list.removeChild(child);

    const items = document.querySelectorAll('li');
    if(items.length === 0){
        noTask.style.display = "block"
    }
}

export default deleteIcon;