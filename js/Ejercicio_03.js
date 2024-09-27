//Repaso de Objetos
const bg= "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console= `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola

console.warn("Práctica 05: Repaso de Objetos en JavaScript");

//Variables independientes
console.log("%c1.- Variables independientes", style_console);


//Declaramos valores independientes relacionadas a un PRODUCTO

let Producto_Nombre= "Computadora Gamer Laptop 17\"";
let Producto_Marca= "ASUS";
let Producto_Modelo= "TUF 17";
let Producto_Precio= 15749.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("TUF707VV-HX221W");
let Producto_Stock=15;
let Producto_Imagen=null;
let Producto_Barcode;
let Producto_Categorias=["Electrónicos", "Computación", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];


//accedemos a los valores actuales de las características del producto de manera independiente 

console.log(`Los datos del PRODUCTO son: \n Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}> 
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorías: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);

    
    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

//ahora la declaramos como un objeto
console.log("%c2.- Objeto", style_console)

let Producto=
{
    ID:100,
    Nombre: "Tenis Deportivos",
    Marca: "Nike",
    Modelo: "Jordan '24",
    Precio: 3361.25,
    Disponibilidad: true,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "../assets/products/sneakers/JORDAN.png",
    Barcode: null,
    Categorias: ["Deportes", "Tenis", "Juvenil"]
}

//Ahora leemos el objeto completo

console.table(Producto);

//Para acceder a las propiedades del objeto utilizamos un "," y el nombre de la propiedad a leer.

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)

if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto.Stock} unidades disponibles.`)



//Desestructuración de objetos.
console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2=
{
    Clave: 316,
    Nombre: "Lentes para Sol",
    Marca: "Oakley",
    Modelo: "QNTM Kato",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "009481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRe.png",
    Barcode: 888392491626 ,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}

let Comprador={
    Clave: 3216,
    Nombre: "Josue ",
    Apellidos: "Martinez Otero",
    Tipo: "Frecuente",
    Correo: "230166@utxicotepec.edu.mx",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido={
    ID: 5816,
    Producto_Id: 316,
    Comprador_clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de compra",
    TipoPago: "Tarjeta de Crédito"
}

//En base de a los 3 objetos necesitamos calcular el costo de la compra y si nos alcanza a favor del cliente
let{Precio: Producto_Precio2}=Producto2; 
let{Cantidad: Pedido_Cantidad}= Pedido;
let{SaldoActual: Cliente_SaldoActual}= Comprador;
let Costo_Compra= Producto_Precio2*Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: $${(Costo_Compra)}`)

if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")

// Actualizar el valor de los Objetos
console.log( "%c4.- Actualización de los valores de las propiedades de un Objeto ", style_console );

console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2));
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)
//Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada
Producto2.Precio=6915.50;
console.log(`Los nuevos valores del Producto son:`)
console.log(Producto2);

// ¿Puedo cambiar no solo el valor, sino el tipo de dato de un Objeto en JavaScript?
console.log(`--------------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
var tipoDisponibilidad = typeof(Producto.Disponibilidad);
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2)); // Disponibilidad Boolean
Producto2.Disponibilidad="Sí";
let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

//Agregar nuevas propiedades al objeto
console.log( "%c5.- Agregar nuevas propiedades al Objeto", style_console );
// Para agregar una nueva propiedad utilizamos el nombre del objeto, los corchetes [] y el nuevo de la propiedad con su valor por defecto.
console.log("Los datos actuales del Comprador son: ")
console.table(Comprador)
Comprador[`Direccion`] = "Av. Benito Juarez No. 1525, Interior 4D, Xicotepec de Juárez, Puebla, México"
Comprador[`Tipo`] = "Nuevo Cliente"
Comprador[`ActividadReciente`] = true
Comprador[`TotalCompras`] = 3516.25
console.log("Despues de haber agregado las propiedades Dirección, Tipo, ActividadReciente y TotalCompras....")
console.table(Comprador)

// Eliminar propiedades existentes de un Objeto
console.log( "%c6.- Eliminar propiedades existentes de un Objeto", style_console );
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación: ")
console.table(Pedido)
delete Pedido.TipoPago
console.log("Después de la modifcación...")
console.table(Pedido)

//7 
console.log( "%c7.- Métodos para controlar la mutabilidad de los Objetos, Congelación (FREEZE)", style_console );
// Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el metodo FREEZE (congelar)
console.log(`La estructura actual del Objeto COMPRADOR es:`)
console.table(Comprador)
Object.freeze(Comprador)

//Intentamos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "05/09/2024 10:15:25"
delete Comprador.Tipo;
Comprador.Direccion = "Calle 16 de Septiembre #102, Col. Manatiales, Huauchinango, Puebla, México";
console.log(`Verificamos si se realizaron los cambios en el Objeto COMPRADOR:`)
console.table(Comprador)

console.log( "%c8.- Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL) ", style_console );
// Sin embargo, en el caso que deseemos poder  modificar los valores de las propiedades del Objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado: ")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido[`FechaPedido`] = "25/09/2024 11:05:03"
delete Pedido[`Cantidad`]
console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO: `)
console.table(Pedido)
// Ahora intentamos modifcar el valor de las propiedades
Pedido.Cantidad = 5
console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO: `)
console.table(Pedido)

// Desestructuración de 2 o más objetos
console.log( "%c9.- Desestructuración de 2 o más Objetos", style_console );

let {Precio: ProductoPrecio, Marca: ProductoMarca} = Producto
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador
 
// Transformar valores cauntitativos en cualitativos
if(ProductoPrecio>2000)
    ProductoPrecio = "Caro"
else
   ProductoPrecio = "Barato"
if(clienteSaldo > 0)
clienteSaldo= "A favor"
else if(clienteSaldo <0)
    clienteSaldo="En contra"
else 
  clienteSaldo="Sin deuda"

  // Transfomar valores cualitativos en cuantitativos
  let clienteNivel;

  if(clienteTipo=="Premium")
    clienteNivel = 1
if(clienteTipo=="Freemium")
    clienteNivel = 2
if(clienteTipo=="No identificado")
    clienteNivel = 3

// Clasificamos al cliente por su País de Origen
if(clientePais == "México")
    clientePais = "Nacional"
else
    clientePais = "Extranjero"

 // OLE - Objeto Literal Ennhacement
 let datosClientePromociones ={clienteCorreo, clientePais, clienteNivel, clienteSaldo, ProductoMarca, ProductoPrecio}  
 
 // El nuevo objeto que creamos seria un ejemplo de la información que enviariamos al area de Marketing para la difusión de promociones
 console.log("Los datos del cliente y sus hábitos de compra son: ")
 console.table(datosClientePromociones)

 // Operaciones sobre Objetos
// Unión de Objetos
console.log("%c10.- Unión de Objetos usando el método de asignación (ASSING)", style_console);

console.log("Imprimimos la estructura y valores del Objeto PRODUCTO")
console.table(Producto);

console.log("Imprimimos la estructura y valores del Objeto PEDIDO")
console.table(Pedido);
// Suponiendo que el usario ya realizó el pago el pedido se convertira enn una VENTA que requiere información de ambos objetos 
// IMPORTANTE: ASSIGN , no solo permite la fusión de 2 o más objetos, también muta los objetos orginales, perdiendo el valor original del ID en este caso
let Producto3 = {...Producto}
const Venta = Object.assign(Producto3, Pedido);
console.log("Consultamos este nuevo objeto VENTA ")
console.table(Venta);

// TOTAL FIRMAS TAREA: 13-21
// TOTAL FIRMAS PRACTICAS: 25-20
// AL 27 DE SEPTIEMBRE
// Unión de Objetos usando SPREAD OPERATOR para evitar la perdida de información con objetos que comparten el mismo nombre en sus propiedades
console.log("%c11.- Unión de Objetos usando el SPREAD OPERATION (...)", style_console);


//Parchamos el error, reiniciando el valor del producto Id al original
//Producto.ID=100;

console.table(Producto)
console.table(Comprador)
console.table(Pedido)

const Venta2 = 
{
    producto: {...Producto},
    comprador:{...Comprador},
    pedido:{...Pedido}
}                 
console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de información")
console.log(Venta2)
console.table(Venta2)




console.log("%c12.- Mutabilidad POST Unión de Objetos", style_console);



// Vamos a verificar el estatus de mutabilidad de los obetos
console.log("Vamos a verificar el estatus de mutabilidad del objeto PEDIDO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Pedido)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(Pedido)}` );

console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Comprador)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(Comprador)}` );

console.log("Vamos a verificar el estatus de mutabilidad del objeto PRODUCTO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Producto)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(Producto)}` );

// Modificamos la estructura de producto, agregando una nueva propiedad
Producto['isLegacy']=false;
console.log(Producto)
console.log(Venta2);


