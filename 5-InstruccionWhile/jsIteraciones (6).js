function mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;

/*	for( var i=0; i< 5; i++){
		
		numero = parseInt(prompt("Ingrese un numero: "));

		acumulador=acumulador+numero;
		//acumulador += numero ;  Esta instuccion funciona igual que la antenrior, es una funcion abreviada
		contador = contador+1;
	} */

/*while (contador < 5){
	numero = parseInt(prompt("Ingrese un numero: "));

	acumulador = acumulador + numero;

	contador = contador + 1
}*/

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;


/*var seguir;

/*Aca la variable seguir es undefined, y no necesito inicializarla*/

	/*do {
			alert("hola como le va?:");
			seguir = pormpt("Quiere que lo salude de nuevo?");

	}while(seguir == '5');
	*/

/*var seguir = 's';	
/*En este caso lo que necesito es inicializar la variable seguir*/
	/*while (seguir == 's') {
			alert ("hola como le va?");
			seguir = prompt("quiere que lo salude de nuevo?");
	*/
	

}//FIN DE LA FUNCIÓN