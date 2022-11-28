const btn = document.querySelector("[data-form-btn]");
// console.log(btn)

const createTask = (evento) => {
    // El formulario por defecto tiene el funcionamiento de refrescar la página o trata de enviar los datos a alguna parte
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]"); 
    console.log(input.value);   
}

btn.addEventListener("click", createTask );