# JS en la web: Manipulación del DOM con JavaScript

## ¿Que se hizo durante el curso?
* Utilizar data-attributes.
* Utilizar el método `addEventListener` para escuchar eventos de un elemento.
* Prevenir el comportamiento por defecto del formulario con `evento.preventDefault()`.
## Notas
Para acceder a un nodo que representa un párrafo y se pueda alterar su texto de manera dinámica se debe de utilizar:
```
document.querySelector('span').textContent = 'Texto actualizado';
```

Se utiliza `querySelector` para recorrer el arbol del DOM, a través de la propiedad `textContent` consiguiendo acceder al texto seleccionado y así, cambiar su contenido.

* ``document.getElementById(‘id’)`` selecciona el elemento por el id.
* ``document.getElementsByClassName(‘clase’)`` retorna un arreglo de los elementos por el nombre de la clase.
* ``document.getElementsByTagName(‘tag’)`` retorna un arreglo de los elementos por el nombre del tag.
* ``document.querySelectorAll(“selector”)`` regresa todos los elementos con el mismo nombre.

### Función ``createTask`` 
El formulario por defecto tiene el funcionamiento de refrescar la página o trata de enviar los datos a alguna parte, para evitar esto se uso el método `preventDefault`. Luego se llama al elemento ``input`` y al elemento ``ul`` mediante sus data-attribute y con `document.querySelector()`, después el contenido del input se guarda en la constante value.

Se crea un elemento, que este caso sera un `li`, para esto se utiliza el método `createElement` y se guarda en la constante task(tarea), luego al mismo elemento se le agrega la clase card con la property `classList` y el método `add`.

Para limpiar el input después de haber agregado una nueva tarea se utiliza `input.value = ''`, en donde se le asigna un string vacío.
Dentro de la constante content se guardan algunos elementos HTML, en donde al momento de dar clic en el botón agregar se irán agregando como tareas de forma dinámica, para esto también dentro del elemento span se irá agregando el value del input.
Luego a task (elemento li) se le asigna content, que son algunos elementos HTML, para esto se utiliza `innerHTML`, por último, al elemento ul (list) se le agrega un hijo, en este caso el padre es el elemento ul y el hijo task.

Por último, para activar la función `createTask`, se utiliza el botón(btn), ya que cada que se de clic en el botón se ejecutará esta función así mismo se utiliza el método `addEventListener`, y dentro se pasan dos parámetros, el evento click y la función.