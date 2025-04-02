# EJERCICIO 1-7 Músicos

Los siguientes documentos no son válidos porque contienen uno o dos errores (los
errores no están en la DTD interna). Corrige los errores y comprueba con un validador de
XML que ya son documentos válidos: 

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE musicos [

    <!ELEMENT musicos (musico*)>
    <!ELEMENT musico ((nombre | apodo),fechaNacimiento)>
    <!ELEMENT nombre (#PCDATA)>
    <!ELEMENT apodo (#PCDATA)>
    <!ELEMENT fechaNacimiento (#PCDATA)>
]>

<musicos>
    <musico>
        <nombre>Antonio Vivaldi</nombre>
        <apodo>El cura pelirrojillo</apodo>
        <fechaNacimiento>4 de marzo de 1678</fechaNacimiento>
    </musico>
    <musico>
        <nombre>Johann Sebastian Bach</nombre>
        <apodo>El viejo peluca</apodo>
        <fechaNacimiento>21 de marzo de 1685</fechaNacimiento>
    </musico>
</musicos>