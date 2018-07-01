// Se le solicita al usario que ingrese los datos que se le solicitan.

let salario = prompt('Ingrese su salario');
let categoria = prompt('Ingrese la catagoria a la que pertenece');
let horas = prompt('Ingrese sus horas extras');

let c = [30, 38, 50, 0];

let valor = c [categoria - 1];
//console.log(valor);

let a =parseInt(horas) * valor;
let e = 30 * valor;
let d = a - e;
let b = a - d;
let x = parseInt(salario) + parseInt(a);

 if (valor = 4) {
 	
}	


if (parseInt(horas) >= 30 ) {
	console.log('No se le pagan horas extras');
	console.log(b);	
}
else{
console.log(x);
}
