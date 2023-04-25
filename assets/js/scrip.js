const API_URL = "https://digimon-api.vercel.app/api/digimon/"

function obtenerDigimon() {
    let nombreObtenido = document.getElementById("ingreso_nombre").value
    nombreObtenido = nombreObtenido.toLowerCase()

    fetch(`${API_URL}name/${nombreObtenido}`)
        .then(respuesta => respuesta.json())
        .then(content => {
            let nombreDigimon = content[0].name
            let imagenDigimon = content[0].img
            let nivelDigimon = content[0].level
            // console.log(nombreDigimon)
            // console.log(imagenDigimon)
            // console.log(nivelDigimon)
            let cardCompletResult = `
                <div class="card" style="width: 18rem;">
                    <img src="${imagenDigimon}" class="card-img-top" alt="${imagenDigimon}">
                        <div class="card-body">
                        <h5 class="card-title">Nombre: ${nombreDigimon}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Nivel: ${nivelDigimon}</h6>
                        </div>
                </div>
                `
            document.getElementById("tarjeta").innerHTML = cardCompletResult
        })






}
fetch(`${API_URL}`)
    .then(respuesta2 => respuesta2.json())
    .then(content2 => {
        console.log(content2[0])
        for (let key in content2) {
            let nombreDigimon = content2[key].name
            let imagenDigimon = content2[key].img
            let nivelDigimon = content2[key].level
            let cardComplet = `
                <div class="card">
                    <img src="${imagenDigimon}" class="card-img-top" alt="${imagenDigimon}">
                        <div class="card-body">
                        <h5 class="card-title">Nombre: ${nombreDigimon}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Nivel: ${nivelDigimon}</h6>
                        </div>
                </div>
                `
            document.getElementById("tarjResult").innerHTML += cardComplet
        }


    })