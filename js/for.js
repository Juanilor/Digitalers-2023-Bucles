/*
for(inicializo; condicion; valorAModificar){
     funcion a repetir  
}*/
let numbers = [];
const alumnos = ["Pedro", "Maria", "Miguel", "Ana", "Oli"];

alumnos.unshift("Carlo");

const conteoAlumnos = () => {
/*  for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
  }*/

  for(let alumno of alumnos){
    console.log(alumno)
  }


};

alumnos.unshift("Diego");

conteoAlumnos();
console.log('-----------------------------------------')

alumnos.push('Superman')
conteoAlumnos()
