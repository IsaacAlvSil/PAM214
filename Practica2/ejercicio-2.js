const productos = [
  {nombre: "laptop", precio: 12000},
  {nombre: "Mouse", precio: 250},
  {nombre: "Teclado", precio: 750},
  {nombre: "Monitor", precio: 3000}
];

let obtenerNombre = function(lista, PrecioMin){
  return lista
  .filter(producto => producto.precio > PrecioMin)
  .map(producto =>producto.nombre);
};

let nombres = obtenerNombre(productos, 1000);
console.log(nombres);

