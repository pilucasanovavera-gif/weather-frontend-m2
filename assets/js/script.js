const datosClima = {
  "Puerto Montt": {
    temp: "15°C",
    estado: "⛅ Nublado",
    humedad: "70%",
    viento: "20 km/h",
  },
};

document.addEventListener("DOMContentLoaded", () => {

  // 👉 TODOS los botones llevan al mismo detalle
  const botones = document.querySelectorAll(".ver-detalle");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      localStorage.setItem("ciudadSeleccionada", "Puerto Montt");
      window.location.href = "detalle.html";
    });
  });

  // 👉 DETALLE
  const ciudad = localStorage.getItem("ciudadSeleccionada");

  if (ciudad && document.getElementById("ciudad")) {
    const data = datosClima["Puerto Montt"];

    document.getElementById("ciudad").textContent = "Puerto Montt";
    document.getElementById("temp").textContent = data.temp;
    document.getElementById("estado").textContent = data.estado;
    document.getElementById("humedad").textContent =
      "💧 Humedad: " + data.humedad;
    document.getElementById("viento").textContent =
      "🌬️ Viento: " + data.viento;

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const lista = document.getElementById("lista");

    if (lista) {
      lista.innerHTML = "";

      dias.forEach((dia) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${dia} - ${Math.floor(Math.random() * 10 + 10)}°C`;
        lista.appendChild(li);
      });
    }
  }
});
