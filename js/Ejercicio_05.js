

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prática 07: Arreglos en Java Script")

console.log("%c1.- Sí/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es ${fechaActual.toString()}`);

//y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleDateString(`es-MX`,
    {
        weekday: `long`,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        hour12: `false`
    }
);

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días
if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es:${fechaLocalMX}`);

// Existe un extensor de la sentencia if(sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primer mitad del año.`);
else
   console.log(`estas en la segunda mitad del año.`);

//Que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera= new Date(anio, 2, 21);    
let inicioVerano= new Date(anio, 5, 21);  
let inicioOtonio= new Date(anio, 8, 23);
let inicioInvierno= new Date(anio, 11, 21);  

let horarioVerano = false;

if(fechaActual >= inicioPrimavera && fechaActual< inicioVerano)
    {
        console.log("Estamos en PRIMAVERA...")
        console.log("Incia la floración de muchas plantas...")
        console.log("Los días son más largos y las noches más cortas...")
        console.log("Muchos animales despiertan de la hibernación... ")
        estacion="Primavera"
        horarioVerano=true;
    }
    else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio)
    {
        console.log("Estamos en VERANO...")
        console.log("En esta temporada los abundan los días Soleados y Calurosos...")
        console.log("En esta temporada el indicé de turismo vacacional sube...")
        console.log("Mucha gente busca realizar actividades al aire ... ")
        estacion="Verano"
        horarioVerano=true;
    }
    else if(fechaActual >= inicioOtonio && fechaActual< inicioInvierno)
        {
            console.log("Estamos en OTOÑO...")
            console.log("Los árboles suelen cambiar de follaje")
            console.log("Se registarán temperaturas más templadas")
            console.log("Los animales comienza con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
            estacion="Verano"
            horarioVerano=true;
        }
    else 
    {
           console.log("Estamos en INVIERNO..")
           console.log("En esta temporada los días son más cortos y las noches más largas...")
           console.log("En algunas regiones suele nevar ...")
           console.log("Dado las bajas temperaturas, se recomienda abrigarse")
           estacion="Invierno"
           horarioVerano=false;
                   
    }    
    
    
    console.log("%c2.- Operador Ternario ( validacion?cumple:no_cumple) ", style_console);
    // En Java Script exista una operación simplicada que valida si una condición se cumple o no, y que hacer en cada caso
    
    const edadPersona = 18;
    const mayoriaEdadMX = 18;
    const mayoriaEdadUS = 21;
    
    let evaluarMayoriaEdad = (edad) =>
        edad>=18 ? "Eres mayor de edad.": "No eres mayor de edad."
    
    console.log("Evaluando la mayoría de edad de una persona...")
    console.log(evaluarMayoriaEdad(edadPersona));
    
    // Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámmetro en la evalación.
    
    evaluarMayoriaEdad = (edad,pais) =>
        (edad>=18 && pais==="MX")?`En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad `;
    
    console.log("Evaluando la mayoría de edad de una persona en México...")
    console.log(evaluarMayoriaEdad(edadPersona, "MX"));
    
    console.log("Evaluando la mayoría de edad de una persona en Estados Unidos...")
    console.log(evaluarMayoriaEdad(edadPersona, "US"));
    
    
    console.log("%c3.- SwITCH - CASE ( Elección por valor definido) ", style_console);
    
    // Calculando tu generación en base a tu edad
    
    let asingaGeneracion = (anioNacimiento)=>{
        switch(true)
        {
            case(anioNacimiento<1968):   //Baby Boomers 
                return "Baby Boomers";
    
            case (anioNacimiento>1968 && anioNacimiento<=1980): 
                return "Generación X";
    
            case (anioNacimiento>1980 && anioNacimiento<=1994):
                return "Milenials";
            
            case (anioNacimiento>1994 && anioNacimiento<=2010):
                return "Centenials";
                
            case (anioNacimiento>2010):
                return "Krystal";
        }
    }
    
    console.log(`Dado que nació en el año 2005 soy de la generación: ${asingaGeneracion(2005)}`);

    console.log("%c4.- Manejo de Excepciones (TRY / CATCH)", style_console);

    try{//intenta
        let result = 0/10;
        console.log(`Intentamos dividir 0/10, el resultado es: ${result}`);
        }catch(error){
            console.log("Ocurrió un error: "+error.message);
        }
    try{//intenta
        let result = 10/0;
         console.log(`Intentamos dividir 10/0, el resultado es: ${result}`);
        }catch(error){
        console.log("Ocurrió un error: "+error.message);
        }
        try{//intenta
        let a="hola";
        let result = a/10;
         console.log(`Intentamos dividir a/10, el resultado es: ${result}`);
        }catch(error){
        console.log("Ocurrió un error: "+error.message);
         }
        try{//intenta
        let result = a/10;
         console.log(result);
        }catch(error){
        console.log("Ocurrió un error: "+error.message);
        }
         try{//intenta
        let x=8, y=2, result=x/y; //Dividir una variable no definoda entre 0
        console.log(result);
        }catch(error){
        console.log("Ocurrió un error: "+error.message);
       }
       
       console.log("%c5.- Control de Ciclos (BREAK / CONTINUA)", style_console);

       // En algunas ocaciones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

       console.log("Vamos a contar del 1 al 10....")
       for(let num=1; num<=10; num++)
          console.log(num);

       console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte...")
       for( num=1;num<=10;num++)
        if(num==7)
            break;
        else
        console.log(num);

        
       console.log("Ahora necesitamos que si llegas al 7 te saltes ese número y continues")
       for( num=1;num<=10;num++){
        if(num==7)
            continue;
        console.log(num);
        }

        console.log("%c6.- Ciclo Iterativo - (FOR)", style_console);

        // Recorre de manera iterativa (i), de incremental o decremental
        console.log("Los días de la semana son en orden ascendente son:")
        let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"]

        for(let i=0;i<dias.length;i++)
            console.log(dias[i])

        console.log("Ahora vamos a imprimir los meses en orden descendente...")
        const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        for(let i=11;i>=0;i--)
            console.log(meses[i]);

        console.log("%c7.- Ciclos Condicionales - (WHILE)", style_console);
        //Estos ciclos  (BUCLE) dependen de una condición para continuar ejecutandose

        let finDeSemana = false;
        let mensaje="";
        let j=0;
        while(j<dias.length)
            {
                
                switch(j)
                { // Usamos `j` para que coincida con el índice
                    case 0:
                        finDeSemana = true;
                        mensaje = "Domingoooooooo.. ZzzzZzzzZzz"
                        break;
                    case 1:
                        finDeSemana= false;
                        mensaje = "Lunes de Trabajar"
                        break;
                    case 2:
                        finDeSemana= false;
                        mensaje = "Martes se sigue chambeando"
                        break; 
                    case 3:
                        finDeSemana= false;
                        mensaje = "Miercoles mitad de semana"
                        break;  
                    case 4:
                        finDeSemana= false;
                        mensaje = "Jueves de Racismo 🙌"
                        break;
                    case 5:
                        finDeSemana= false;
                        mensaje = "Viernes se acaba la chamba"
                        break;                                
                    case 6:
                        finDeSemana= true;
                        mensaje = "Sabado día de hechar weba"
                        break;              
                }

                // Imprimir el nombre del día y su mensaje
                if(finDeSemana){
                console.log(`Día: ${dias[j]}`)
                console.log(`Mensaje del Día: ${mensaje}`)
                   
                }
                j++
             
            }