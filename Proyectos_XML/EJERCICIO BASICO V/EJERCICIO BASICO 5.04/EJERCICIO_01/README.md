# EJERCICIO 1-1 Números

Los siguientes documentos no son válidos porque contienen uno o dos errores (los
errores no están en la DTD interna). Corrige los errores y comprueba con un validador de
XML que ya son documentos válidos: 

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE numeros [

    <!ELEMENT numeros (#PCDATA)>
]>

<numeros>
    <numero>25</numero>
</numeros>