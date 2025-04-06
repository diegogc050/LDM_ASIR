# EJERCICIO 2-4 Vuelos

Los siguientes documentos no son válidos porque contienen errores (los errores están
en la DTD interna). Corrige los errores y comprueba con un validador XML que ya son
documentos válidos. Casi siempre habrá varias maneras de corregir la DTD, intenta elegir
la más sencilla.

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE vuelos [
<!ELEMENT vuelos (vuelo*)>
<!ELEMENT vuelo (origen, destino)>
<!ELEMENT origen (#PCDATA)>
<!ELEMENT destino (#PCDATA)>
]>

<vuelos>
    <vuelo>
        <origen>Valencia (VLC)</origen>
        <destino>Londres Heathrow (LHR)</destino>
    </vuelo>
    <vuelo>
        <destino>Berlín Schönefeld (SFX)</destino>
        <origen>Paris Charles de Gaulle (CDG)</origen>
    </vuelo>
</vuelos>