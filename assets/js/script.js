const datosClima = {
  "Puerto Montt": {
    temp: "15°C",
    estado: "⛅ Nublado",
    humedad: "70%",
    viento: "20 km/h",
  },
};
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ver-detalle");

  if (botones.length > 0) {
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        const ciudadSeleccionada = boton.dataset.ciudad;

        localStorage.setItem("ciudadSeleccionada", ciudadSeleccionada);

        window.location.href = "detalle.html";
      });
    });
  }

  const ciudadKey = localStorage.getItem("ciudadSeleccionada");
  const contenedorCiudad = document.getElementById("ciudad");

  if (ciudadKey && contenedorCiudad) {
    const data = datosClima[ciudadKey];

    if (data) {
      contenedorCiudad.textContent = ciudadKey;
      document.getElementById("temp").textContent = data.temp;
      document.getElementById("estado").textContent = data.estado;
      document.getElementById("humedad").textContent =
        "💧 Humedad: " + data.humedad;
      document.getElementById("viento").textContent =
        "🌬️ Viento: " + data.viento;
    } else {
      contenedorCiudad.textContent = "Ciudad no encontrada";
    }

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const lista = document.getElementById("lista");

    if (lista) {
      lista.innerHTML = "";
      dias.forEach((dia) => {
        const li = document.createElement("li");

        li.className =
          "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
                    <span>${dia}</span>
                    <span class="badge bg-primary rounded-pill">${Math.floor(Math.random() * 10 + 10)}°C</span>
                `;
        lista.appendChild(li);
      });
    }
  }
});
