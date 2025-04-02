# EJERCICIO 1-5 Animales

Los siguientes documentos no son válidos porque contienen uno o dos errores (los
errores no están en la DTD interna). Corrige los errores y comprueba con un validador de
XML que ya son documentos válidos: 

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE animales [

    <!ELEMENT animales (animal*)>
    <!ELEMENT animal (#PCDATA)>
]>

<animales>
    <perro>Caniche</perro>
    <gato>Siamés</gato>
</animales>