# EJERCICIO 2-6 Países

Los siguientes documentos no son válidos porque contienen errores (los errores están
en la DTD interna). Corrige los errores y comprueba con un validador XML que ya son
documentos válidos. Casi siempre habrá varias maneras de corregir la DTD, intenta elegir
la más sencilla.

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE paises [
<!ELEMENT pais (nombre, unionEuropea, otan)>
<!ELEMENT nombre EMPTY>
<!ELEMENT unionEuropea EMPTY>
<!ELEMENT otan EMPTY>
]>

<paises>
<pais>
<nombre>España</nombre>
<unionEuropea />
<otan />
</pais>
<pais>
<nombre>Noruega</nombre>
<otan />
</pais>
<pais>
<nombre>Austria</nombre>
<unionEuropea />
</pais>
</paises>