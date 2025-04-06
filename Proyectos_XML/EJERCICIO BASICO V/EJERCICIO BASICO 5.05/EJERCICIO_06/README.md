# EJERCICIO 1-5 Escritores

Los siguientes documentos no son válidos porque contienen uno o dos errores (los
errores no están en la DTD interna). Corrige los errores y comprueba con un validador de
XML que ya son documentos válidos: 

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE escritores [

    <!ELEMENT escritores (escritor*)>
    <!ELEMENT escritor (nombre,nacimiento)>
    <!ELEMENT nombre (#PCDATA)>
    <!ELEMENT nacimiento (#PCDATA)>
]>

<escritores>
    <escritor>
        <nombre>Mario Vargas Llosa</nombre>
        <nacimiento>28 de marzo de 1936</nacimiento>
    </escritor>
    <escritor>
        <nacimiento>1 de abril de 1929</nacimiento>
        <nombre>Milan Kundera</nombre>
    </escritor>
</escritores>