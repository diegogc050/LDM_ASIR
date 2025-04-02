# EJERCICIO 1-8 Teléfonos de emergencia

Los siguientes documentos no son válidos porque contienen uno o dos errores (los
errores no están en la DTD interna). Corrige los errores y comprueba con un validador de
XML que ya son documentos válidos: 

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE agenda [

    <!ELEMENT agenda (contacto*)>
    <!ELEMENT contacto (nombre, telefonoFijo*,telefonoMovil+)>
    <!ELEMENT nombre (#PCDATA)>
    <!ELEMENT telefonoFijo (#PCDATA)>
    <!ELEMENT telefonoMovil (#PCDATA)>
]>

<agenda>
    <contacto>
        <nombre>Ayuntamiento</nombre>
        <telefonoFijo>010</telefonoFijo>
    </contacto>
    <contacto>
        <nombre>Emergencias</nombre>
        <telefonoFijo>112 (Unión Europea)</telefonoFijo>
        <telefonoMovil>Desconocido</telefonoMovil>
        <telefonoFijo>911 (Estados Unidos)</telefonoFijo>
    </contacto>
</agenda>