# EJERCICIO 2-9 Mensajes
Los siguientes documentos no son válidos porque contienen errores (los errores están
en la DTD interna). Corrige los errores y comprueba con un validador XML que ya son
documentos válidos. Casi siempre habrá varias maneras de corregir la DTD, intenta elegir
la más sencilla.

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mensajes [
<!ELEMENT mensajes (mensaje)>
<!ELEMENT de (#PCDATA)>
<!ELEMENT para (#PCDATA)>
<!ELEMENT hora (#PCDATA)>
<!ELEMENT texto (#PCDATA)>
<!ELEMENT strong (#PCDATA)>
]>

<mensajes>
<mensaje>
<de>Pepe (pepe@example.com)</de>
<para>Juan (juan@example.com)</para>
<hora>28/02/2011 17:48:23,61</hora>
<texto>¿Hola, Juan, qué haces ?< /texto>
</mensaje>
<mensaje>
<de>Juan (juan@example.com)</de>
<para>Pepe (pepe@example.com)</para>
<hora>28/02/2011 17:54:20,87</hora>
<texto>Aquí, aprendiendo <strong>XML</strong></texto>
</mensaje>
</mensajes>