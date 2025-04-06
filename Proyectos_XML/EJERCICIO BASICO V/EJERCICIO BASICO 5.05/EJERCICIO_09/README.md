# EJERCICIO 1-9 El sistema solar

Los siguientes documentos no son válidos porque contienen uno o dos errores (los
errores no están en la DTD interna). Corrige los errores y comprueba con un validador de
XML que ya son documentos válidos: 

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE sistemaSolar [

    <!ELEMENT sistemaSolar (cuerpo*)>
    <!ELEMENT cuerpo (planeta|satelite|asteroide)>
    <!ELEMENT planeta (#PCDATA)>
    <!ELEMENT satelite (#PCDATA)>
    <!ELEMENT asteroide (#PCDATA)>
]>

<sistemaSolar>
    <cuerpo>
        <planeta>Tierra</planeta>
        <satelite>Luna</satelite>
    </cuerpo>
    <asteroide>Ceres</asteroide>
</sistemaSolar>
