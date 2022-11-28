# JS en la web: Manipulación del DOM con JavaScript
## ¿Que se hizo durante el curso?
* Utilizar data-attributes.
* Utilizar el método `addEventListener` para escuchar eventos de un elemento.
* Prevenir el comportamiento por defecto del formulario con `evento.preventDefault()`.
* Colocar un elemento hijo dentro del elemento padre utilizando el método `appendChild`.
* Crear elementos utilizando el método `createElement`.
* Agregar la clase CSS utilizando el método `toggle`.
* 
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

### Función createTask
El formulario por defecto tiene el funcionamiento de refrescar la página o trata de enviar los datos a alguna parte, para evitar esto se uso el método `preventDefault`. Luego se llama al elemento ``input`` y al elemento ``ul`` mediante sus data-attribute y con `document.querySelector()`, después el contenido del input se guarda en la constante value.

Se crea un elemento, que este caso sera un `li`, para esto se utiliza el método `createElement` y se guarda en la constante task(tarea), luego al mismo elemento se le agrega la clase card con la property `classList` y el método `add`.

Para limpiar el input después de haber agregado una nueva tarea se utiliza `input.value = ''`, en donde se le asigna un string vacío.

En la constante taskContent se crea un nuevo elemento(div), luego al nuevo elemento creado se le asigna un hijo(todo lo que este en `checkComplete`), nuevamente se crea otro elemento(span) y se guarda en la constante titleTask, después se le asigna una clase llamada task y el value del input. Se especifíca que el elemento titleTask es hijo de taskContent, luego se especifíca que taskContent es hijo de task y task es hijo de list. Quedando la siguiente estructura HTML:
```
<ul class="cardList" data-list>
    <li class="card">
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">`${value}`</span>
        </div>
    </li>
</ul>
```
Puede parecer algo confuso, pero de forma general primero se crearn los elementos, luego se les asigna una clase y luego se definen los elementos padres y los elementos hijos, que serán los que vayan dentro de los elementos padres.

Por último, para activar la función `createTask`, se utiliza el botón(btn), ya que cada que se de clic en el botón se ejecutará esta función así mismo se utiliza el método `addEventListener`, y dentro se pasan dos parámetros, el evento click y la función.

### Función completeTask
Se crea una constante llamada element y se le asigna event.target, con el event.target se captura el elemento en donde se hizo click, que este caso fue en el elemento i.
Luego se utiliza element junto a la propiedad classList y el método toggle, con toggle se verifica si existe o no la clase, si existe la quita y si no existe la agrega.

Esta función se ejecuta dentro de la función checkComplete.

### Función checkComplete
Permite crear un elemento `i` y se guarda en la constante i, luego se le agrega las clases 'far', 'fa-check-square' y 'icon'. 

Luego se utiliza la constante i junto al método addEventListener, para que cada que se de click se ejecute la función completeTask.
Por último, se hace un return de i.

### Función IIFE
Todas las demás funciones se colocan dentro de una función IEEF o también conocidad como función anonima, esto para que las funciones no las pueda ver el usuario cuando se ejecutan se usa IIFE (Immediately invoked function expression), que son funciones que en cuanto se declaran se ejecutan. Se declaran de la siguiente forma:
```
( () => {
    const createTask = (evento) => {

    }

    const checkComplete = () => {

    }

    const completeTask = (event) =>{

    }

})();
```