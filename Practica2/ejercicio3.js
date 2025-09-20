const personas =[
    {nombre: "Ana", edad:22},
    {nombre: "Luis", edad:35},
    {nombre:"Maria", edad: 28}
];

const Luis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona: ", Luis);

personas.forEach(persona => {
    console.log(persona.nombre + " tiene " + persona.edad + " años");

});

const sumaEdad = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("suma total de edades:", sumaEdad);