
//  TAREA 2 
// BLOQUE 1 

function empleado(nombre,edad) {
    let nombre = empleado.nombre; 
    let lon = 0;
    for (let i = 0; i < nombre.length; i++) {
      lon++
    }
    return lon;
}

function contadorVocal(producto){
    let nombre = producto.nombre;
    let cv = 0;
    for (let i = 0; i < nombre.length; i++) {
      if (nombre[i] in "aeiouAEIOU") { 
        cv++
      }
    }
    return cv;
}

function reverse(persona) {
    let nombre = persona.nombre;
    let invertido = "";
    let lon = nombre.length-1;
    for (let i = lon; i >=0; i--) {
      invertido= invertido+nombre[i]
    }
    return invertido;
}

function contarLongitud(nombre) {
    let lon = 0;
    for (let i = 0; i < nombre.length; i++) {
        lon++;
    }
    return lon;
}

function compararLongitudes(empleado1, empleado2) {
    let len1 = contarLongitud(empleado1.nombre);
    let len2 = contarLongitud(empleado2.nombre);
    let maxLen = len1;
    let emp = empleado1;
    if (len2 > len1) {
        maxLen = len2;
        emp = empleado2;
    }
    return "El empleado con el nombre más largo es '${emp.nombre}' (${maxLen} letras)."; 
}

function obtenerIniciales(empleado) {
    let cargo = empleado.cargo;
    let palabras = cargo.split(' ');
    let iniciales = '';
    for (let i = 0; i < palabras.length; i++) {
        iniciales += palabras[i][0] + '.';
    }
    return iniciales;
}

//   BLOQUE 2 

const listaPersonal = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Santiago", edad: 30 },
    { nombre: "Rosa", edad: 27 }
];

for (const empleado of listaPersonal) {
    const nombreActual = empleado.nombre;
    let contador = 0;
    for (let i = 0; i < nombreActual.length; i++) {
        contador++; 
    }
    console.log(`${nombreActual} tiene ${contador} caracteres.`);
}

console.log("\n---");
console.log("### 2. Contar una Vocal Específica ('a') en cada Nombre ###");

const personalConNombres = [
    { nombre: "Andrea" },
    { nombre: "Marcos" },
    { nombre: "Lucía" }
];
const vocalBuscada = "a";

personalConNombres.forEach(persona => {
    const nombreCompleto = persona.nombre;
    const nombreLower = nombreCompleto.toLowerCase();
    let contadorVocal = 0;


    for (let i = 0; i < nombreLower.length; i++) {
        if (nombreLower[i] === vocalBuscada) {
            contadorVocal++;
        }
    }
    
    const mensaje = contadorVocal === 1 ? '1 vez' : `${contadorVocal} veces`;
    console.log(`${nombreCompleto} -> ${mensaje} '${vocalBuscada}'`);
});


console.log("\n---");
console.log("### 3. Inversión de Nombres de Empleados ###");

const genteParaInvertir = [
    { nombre: "Luis" },
    { nombre: "Carmen" },
    { nombre: "Pedro" }
];

for (let i = 0; i < genteParaInvertir.length; i++) {
    const original = genteParaInvertir[i].nombre;
    let invertido = "";
    
    for (let j = original.length - 1; j >= 0; j--) {
        invertido += original[j];
    }
    
    console.log(`${original} -> ${invertido}`);
}


console.log("\n---");
console.log("### 4. Encontrar la Ciudad con el Nombre Más Largo ###");

const personalConCiudades = [
    { nombre: "Carlos", ciudad: "Milagro" },
    { nombre: "Andrea", ciudad: "Guayaquil" },
    { nombre: "José", ciudad: "Quito" }
];

let ciudadGanadora = "";
let longitudRecord = -1; 

for (const p of personalConCiudades) {
    const ciudadActual = p.ciudad;
    const largoActual = ciudadActual.length;
    
    if (largoActual > longitudRecord) {
        longitudRecord = largoActual;
        ciudadGanadora = ciudadActual;
    }
}

console.log(`La ciudad con más letras es '${ciudadGanadora}' (${longitudRecord} letras).`);

console.log("\n---");
console.log("### 5. Obtención de Iniciales de Cargos ###");

const listaCargos = [
    { cargo: "Director General Académico" },
    { cargo: "Jefe de Laboratorio" },
    { cargo: "Asistente Administrativo" }
];

listaCargos.forEach(persona => {
    const tituloCompleto = persona.cargo;
    const palabras = tituloCompleto.split(' ');
    
    let resultadoFinal = ""; 
    
    for (const palabra of palabras) {
        if (palabra.length > 0) {
            const inicial = palabra[0].toUpperCase();
            resultadoFinal += inicial + ".";
        }
    }
    
    if (resultadoFinal.endsWith('.')) {
        resultadoFinal = resultadoFinal.slice(0, -1); 
    }
    
    console.log(`${tituloCompleto} -> ${resultadoFinal}.`);
});

//   Bloque 3

// Datos de entrada para los ejercicios
const empleadosNotas = [ { nombre: "Ana", nota: 65 }, { nombre: "Luis", nota: 80 }, { nombre: "Carla", nota: 90 }, { nombre: "José", nota: 50 }, { nombre: "Marta", nota: 75 } ];
const empleadosEdades = [ { nombre: "Juan", edad: 19 }, { nombre: "Elena", edad: 25 }, { nombre: "David", edad: 30 }, { nombre: "Sofía", edad: 32 } ];
const empleadosEdadLegal = [ { nombre: "Ana", edad: 17 }, { nombre: "Luis", edad: 20 }, { nombre: "Carla", edad: 35 }, { nombre: "José", edad: 15 }, { nombre: "Marta", edad: 18 } ];
const empleadoSalario = { nombre: "Luis", salario: 300 };
const empleadosSalarios = [ { nombre: "Ana", salario: 450 }, { nombre: "Luis", salario: 500 }, { nombre: "Carla", salario: 625 }, { nombre: "Pedro", salario: 700 }, { nombre: "Marta", salario: 300 } ];


console.log("\n### 1. Promedio de Notas >= 70 ###");
const aprobados = empleadosNotas.filter(e => e.nota >= 70);
const suma = aprobados.reduce((acc, e) => acc + e.nota, 0);
const promedioNotas = (aprobados.length ? suma / aprobados.length : 0).toFixed(2);

console.log(`Promedio de notas válidas: ${promedioNotas}`);

console.log("\n---");
console.log("### 2. Suma de Edades en el Rango [20, 30] ###");

const sumaEdadesRango = empleadosEdades
    .filter(e => e.edad >= 20 && e.edad <= 30)
    .reduce((total, e) => total + e.edad, 0);

console.log(`Suma de edades válidas: ${sumaEdadesRango}`);



console.log("\n---");
console.log("### 3. Promedio de Edad: Mayores vs Menores ###");


const getPromedio = (arr) => {
    const suma = arr.reduce((acc, p) => acc + p.edad, 0);
    return arr.length ? (suma / arr.length).toFixed(2) : '0.00';
};

const mayores = empleadosEdadLegal.filter(p => p.edad >= 18);
const menores = empleadosEdadLegal.filter(p => p.edad < 18);

console.log(`Promedio de mayores: ${getPromedio(mayores)}`);
console.log(`Promedio de menores: ${getPromedio(menores)}`);


console.log("\n---");
console.log("### 4. Tabla de Multiplicar del Salario ###");


const tabla = Array.from({ length: 10 }, (_, i) => empleadoSalario.salario * (i + 1));

console.log(`Tabla del salario (${empleadoSalario.salario}):`);
console.log(tabla.join(', '));


console.log("\n---");
console.log("### 5. Promedio de Salarios (Pares e Impares) ###");


const calcularPromedio = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

const salariosPares = empleadosSalarios
    .filter(e => e.salario % 2 === 0) 
    .map(e => e.salario); 

const salariosImpares = empleadosSalarios
    .filter(e => e.salario % 2 !== 0)
    .map(e => e.salario);

const promPares = calcularPromedio(salariosPares).toFixed(2);
const promImpares = calcularPromedio(salariosImpares).toFixed(2);

console.log(`Promedio salarios pares: ${promPares}`);
console.log(`Promedio salarios impares: ${promImpares}`);

