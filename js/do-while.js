let edadCliente;

do edadCliente = parseInt(prompt("ingrese una edad valida"));
while (isNaN(edadCliente) || edadCliente > 120 || edadCliente <= 0);

/*let edadCliente = parseInt(prompt('Ingrese una edad'))

while(isNaN(edadCliente) || edadCliente > 120 || edadCliente <= 0){
    console.log(edadCliente)

    edadCliente = parseInt(prompt('ingrese una edad valida'))

}*/
