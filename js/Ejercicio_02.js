// Tipo de Datos en JS

// 1. Undefined - (Null)
console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no incializados o no declarados

// 2.BOOLEAN - Boleanos - TRUE/FALSE (Falso/Verdadero)
console.warn("--- Tipo de Dato: BOOLEAN(Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`Es el cliente Premium?: ${esPremium}`)
console.log(`El tipo de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\" a la variable")
esPremium="true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium=0;

esPremium= false;
console.log(`Es un cliente premium ${esPremium}`);
console.log(`El tipo de dato de la variable e Premium es ${typeof(esPremium)}`);
console.log(`Es un cliente premium ${esPremium}`);
if(esPremium)
    console.log("Es un cliente pago por usar el servicio");
else
console.log("Es un usuario que recibe los servicios gratuitos");

//3. NUMBRE
var cantidad;
const costo_producto =10.50
let saldo_cuenta = -2500.40
let monto_transaccion;

console.warn("---- Tipo de Dato -NUMBER (Numeros, positivos, decimales, flotantes)")
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que had seleccionado cuesta: ${costo_producto}`)
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos .`)
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`);
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);
