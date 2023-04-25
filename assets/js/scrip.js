const API_URL = "https://digimon-api.vercel.app/api/digimon"

function obtenerDigimon(){
    let nombreObtenido = document.getElementById("ingreso_nombre").value;
    return nombreObtenido
} 

console.log(obtenerDigimon())