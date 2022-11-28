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




