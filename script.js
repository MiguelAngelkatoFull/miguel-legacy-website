
// Carga de reflexiones y bitácora en texto
fetch('docs/reflexiones.md')
    .then(response => response.text())
    .then(text => document.getElementById('reflexion').textContent = text);

fetch('docs/bitacora.txt')
    .then(response => response.text())
    .then(text => document.getElementById('bitacora-text').textContent = text);
