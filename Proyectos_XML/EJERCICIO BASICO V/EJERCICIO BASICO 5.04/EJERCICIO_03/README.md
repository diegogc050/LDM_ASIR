# EJERCICIO 1-3 Colores

Los siguientes documentos no son válidos porque contienen uno o dos errores (los
errores no están en la DTD interna). Corrige los errores y comprueba con un validador de
XML que ya son documentos válidos: 

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE colores [

    <!ELEMENT colores (color*)>
    <!ELEMENT color (#PCDATA)>
]>

<colores>
    <color>azul marino</color>
    negro
    <color>amarillo</color>
</colores>