
function agregarComentario() {
    const nombre = document.getElementById("nombre").value;
    const texto = document.getElementById("texto").value;
    if (!nombre || !texto) {
        alert("Por favor, completar ambos campos");
        return;
    }

    const comentario = { nombre, texto };
    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.push(comentario);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    document.getElementById("nombre").value = "";
    document.getElementById("texto").value = "";
}


document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("container");
    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];


    comentarios.forEach(c => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card h-100 shadow">
                            <div class="card-body">
                                <p class="card-text">${c.texto}</p>
                                <h6 class="card-subtitle text-muted mt-2">— ${c.nombre}</h6>
                            </div>
                        </div>`;
        contenedor.appendChild(div);
    })

});