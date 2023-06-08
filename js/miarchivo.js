const nuevoPrecio = (a, b) => a + (b * a) / 100;
const precioPorCuota = (c, d) => c / d;

let precio = parseFloat(prompt("CALCULADORA DE CUOTAS CON O SIN INTERÉS \nIngresa el precio:"));
let cuotas = parseFloat(prompt("Ingresa la cantidad de cuotas:"));
let interes;
let opcion;

while (true) {
  opcion = prompt("Las cuotas son con o sin interés? (Ingresa 'con' o 'sin')");

  switch (opcion.toLowerCase()) {
    case "con":
      interes = parseFloat(prompt("Ingresa el interés: (Solo el número, sin %)"));
      break;

    case "sin":
      break;

    default:
      alert("Opción inválida. Intenta nuevamente.");
      continue;
      
  }
  break;
}

if (precio > 0 && cuotas > 0) {

  if (interes > 0) {
    alert(
      "El precio inicial es de $" + precio + "\nEl nuevo precio a pagar con " + interes + "% de interés es de $" + nuevoPrecio(precio, interes) + "\nPagando en " + cuotas + " cuotas, son $" + precioPorCuota(nuevoPrecio(precio, interes), cuotas) + " por cuota."
    );

  } else {
    alert(
      "El precio es de $" + precio + "\nPagando en " + cuotas + " cuotas, son $" + precioPorCuota(precio, cuotas) + " por cuota."
    );

  }

} else {
  
  alert("Ingresa un número válido");
}











