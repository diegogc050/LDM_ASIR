# Ejercicio 5 - FAQ

Diseña el esquema XSD para el siguiente archivo XML con las siguientes
consideraciones:
    • El elemento versión será una plantilla que permita números seguidos de un punto
    y seguido de más números.
    • El elemento fecha será de tipo fecha.
    • El elemento faq está compuesto por solo un elemento info y por uno o más
    elementos part.
    • El elemento info está compuesto por un titulo, un autor, y puede tener o no email,
    versión y fecha.
    • El elemento part puede tener uno o más elementos q.
    • El elemento q está compuesto por los elementos qtext y a que son obligatorios.

<?xml version="1.0" encoding="UTF-8" ?>
<faq>
 <info>
 <titulo>WINDOWS98? SOLO SI ME OBLIGAN!</titulo>
 <autor>Fernando Damián Lorenzo García</autor>
 <email>Fer@yahoo.es </email>
 <version>1.0</version>
 <fecha>1999-05-01</fecha>
 </info>
 <part>
 <q>
 <qtext>¿Por qué tengo que instalar W95?</qtext>
 <a> A mi también me parece una buena pregunta.</a>
 </q>
 <q>
 <qtext>Y de que me vale?</qtext>
 <a>Otra ingeniosa pregunta.</a>
 </q>
 </part>
</faq>