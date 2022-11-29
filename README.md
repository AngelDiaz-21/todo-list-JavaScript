# JS en la web: Manipulación del DOM con JavaScript
## ¿Que se hizo durante el curso?
* Utilizar data-attributes.
* Utilizar el método `addEventListener` para escuchar eventos de un elemento.
* Prevenir el comportamiento por defecto del formulario con `evento.preventDefault()`.
* Colocar un elemento hijo dentro del elemento padre utilizando el método `appendChild`.
* Crear elementos utilizando el método `createElement`.
* Agregar la clase CSS utilizando el método `toggle`.
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

Todos elementos en nuestro árbol de DOM son nodos y todos los nodos pueden ser accedidos vía JavaScript. Los nodos pueden ser eliminados, creados o modificados. El método `appendChild` siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre. Existen otros métodos para manipular nodos:
* ``insertBefore``(padre, hijo): Coloca un nodo antes del otro.
* `replaceChild`(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo 2 del elemento 2.
* `removeChild`(elemento): Remueve un nodo del árbol.
* Encontrar el objetivo del evento utilizando la propiedad `target`.
* Utilizar IIFE.

## Contenido del proyecto
### Archivo script.js

Se importan los archivos checkComplete y deleteIcon que contienen las funciones que se utilzan dentro de la función `createTask`.

Después, se llaman los elementos input, button, ul mediante sus data-attribute y tambíen se llama al elemento span pero este mediante su clase.

**Función createTask**

El formulario por defecto tiene el funcionamiento de refrescar la página al tratar de enviar los datos a alguna parte, para evitar esto se uso el método `preventDefault`. Luego en la constante text se guarda el valor que hay en el input, después se hace una condición, en donde el contenido del input que ahora esta guardado en la constante text es *diferente a un string vacío* ejecutará lo que sigue, en caso contrario que este vacío no hará nada.

A continuación, se crea un elemento, que este caso sera un `li`, para esto se utiliza el método `createElement` y se guarda en la constante task(tarea), luego al mismo elemento se le agrega la clase card con la property `classList` y el método `add`.

En la constante taskContent se crea un nuevo elemento(div), mientras que en la constante titleTask se crea un elemento span y se le agrega la clase task, también se le agrega lo que contenga la constante text como contenido del texto.

Luego al elemento taskContent se le asigna como hijo la función `checkComplete`, es decir, todo lo que este en `checkComplete`(dentro de la función se crean otros elementos), también se le agrega como hijo el elemento titleTask.

También se especifíca que el elemento task es el padre del elemento taskContent así como de la función `deleteIcon`(dentro de la función se crean otros elementos) y después, se especifíca que list es padre de task. Quedando la siguiente estructura HTML:
```
<ul class="cardList" data-list>
    <li class="card">
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">`${text}`</span>
        </div>
    </li>
</ul>
```
Puede parecer algo confuso, pero de forma general primero se crean los elementos, luego se les asigna una clase y luego se definen los elementos padres y los elementos hijos, que serán los que esten dentro de los elementos padres.

Para limpiar el input después de haber agregado una nueva tarea se utiliza `input.value = ''`, en donde se le asigna un string vacío y al momento de agregar una nueva tarea se activará el `noTask.style.display = 'none';`, lo que harpa que el elemento desaparezca.

Por último, para activar la función `createTask`, se utiliza el botón(btn), ya que cada que se de clic en el botón se ejecutará esta función así mismo se utiliza el método `addEventListener`, y dentro se pasan dos parámetros, el evento click y la función.

### Archivo checkComplete.js

**Función completeTask**

Se crea una constante llamada element y se le asigna event.target, con el event.target se captura el elemento en donde se hizo click, que este caso fue en el elemento i.
Luego se utiliza element junto a la propiedad classList y el método toggle, con toggle se verifica si existe o no la clase, si existe la quita y si no existe la agrega.

Esta función se ejecuta dentro de la función checkComplete.

**Función checkComplete**

Permite crear un elemento `i` y se guarda en la constante i, luego se le agrega las clases 'far', 'fa-check-square' y 'icon'. 

Luego se utiliza la constante i junto al método addEventListener, para que cada que se de click se ejecute la función completeTask.
Por último, se hace un return de i.

### Archivo deleteIcon.js

**Funcion deleteIcon**

Primeramente se crea un elemento i el cual se le asigna a la constante icon, luego se le agregan las clases y se utiliza el método `addEventListener`, y dentro se pasan dos parámetros, el evento click y la función deleteTask, que practicamente es la lógica para eliminar una tarea(elemento).

**Función deleteTask**

Se accede al event cuando se da clic en el icono, dentro del event se accede a target y con parentElement se accede al elemento padre que en este caso es el elemento li, luego todo esto se guarda en la constante child. Luego se utiliza list que este caso es el elemento ul, después con el método removeChild se indica que elimine al elemento li.

Por último, se accede a todos los elementos li y se guarda en la constante items, luego se crea un if en donde si item es igual a 0, el elemento span se volverá a mostrar, es decir, mientras no existe una tarea se mostrará el mensaje de "No hay tareas".

Otra forma de hacerlo es casi parecida, se accede al event cuando se da clic en el icono, dentro del event se accede a target y con parentElement se accede al elemento padre que en este caso es li y todo esto se guarda dentro de la constante parent, luego se utiliza el método remove para eliminar a este elemento.
```
const parent = event.target.parentElement;
parent.remove();
```

<!-- ### Función IIFE
Todas las demás funciones se colocan dentro de una función IEEF o también conocida como función anonima, esto para que las funciones no las pueda ver el usuario cuando se ejecutan se usa IIFE (Immediately invoked function expression), que son funciones que en cuanto se declaran se ejecutan. Se declaran de la siguiente forma:
```
( () => {
    const createTask = (evento) => {

    }

    const checkComplete = () => {

    }

    const completeTask = (event) =>{

    }

})();
``` -->