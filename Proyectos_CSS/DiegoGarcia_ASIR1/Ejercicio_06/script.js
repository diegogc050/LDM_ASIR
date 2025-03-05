/* Diego García Campos */
/* ASIR 1 */
/* 05 - 03 - 2025 */
/* Ejercicio 6 */
/* Version 01 */

document.getElementById("modoOscuro").addEventListener("click",function() {
    document.body.classList.toggle("dark-mode");
});
/* Buscamos el elemento con id modoOscuro y le añadimos el evento de escucha hasta "click", donde espues cambiara la clase dark-mode en caso de no tenerla, y si ya la tiene , se eliminara */