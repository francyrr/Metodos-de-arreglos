const listaTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const cuentaTareas = document.querySelector("#cuentaTareas");
const totalTareasRealizadas = document.querySelector("#totalTareasRealizadas");
const tareas = [
    { id: 10, descripcion: "Hacer el desafío", completada: false },
  { id: 20, descripcion: "Comprar shampoo", completada: false },
  { id: 30, descripcion: "Hacer ejercicio", completada: false }
];

function renderTareas() {
  let html = "";
  let tareasRealizadas = 0;
  let totalTareas = 0;
  for (let tarea of tareas) {
    html += `<li>${tarea.id} - ${tarea.descripcion} <input type="checkbox" name="${
        tarea.id
      }" onchange="handleCheck(event)" ${tarea.completada ? "checked" : ""}> <i class="bi bi-trash3 borrar" onclick="borrar(${tarea.id})"> </i></li>`;
    totalTareas++;
    if (tarea.completada) {
      tareasRealizadas++;
    }
  }
  listaTareas.innerHTML = html;
  cuentaTareas.textContent = tareas.length;
  totalTareasRealizadas.textContent = tareasRealizadas;
}

btnAgregar.addEventListener("click", () => {
  const tareaDescripcion = tareaInput.value.trim();

  if (tareaDescripcion === "") {
    alert("Por favor ingresa una tarea.");
    return;
  }
  const randomTwoDigitNumber = Number(String(Date.now()).slice(-2));
  const nuevaTarea = {
    id: randomTwoDigitNumber,
    descripcion: tareaInput.value,
  };
  tareas.push(nuevaTarea);
  tareaInput.value = "";
  renderTareas();
});

function handleCheck(event) {
  const id = Number(event.target.name);
  const isChecked = event.target.checked;

  tareas.forEach((tarea) => {
    if (tarea.id === id) {
      tarea.completada = isChecked;
    }
  });

  renderTareas();
}

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderTareas();
}
