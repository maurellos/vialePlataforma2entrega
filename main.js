

//Acceso a la plataforma

let usuario = prompt("Ingrese nombre").toLocaleLowerCase();
let contraseña = prompt("Ingrese contraseña").toLocaleLowerCase();

//Base de datos de cliente:
const clientes = [
    {nombre: "Tanoni", producto:"etiquetas", telefono: "4558103" },
    {nombre: "La Gallega", producto:"rollos", telefono: "4558103" },
    {nombre: "NorPam", producto:"etiquetas", telefono: "4558103"},
    {nombre: "Kilbel", producto:"rollos", telefono: "4558103"},
    
];

//Base de datos de venedores

const vendedores = [
    {usuario: "mauro", contraseña: "mau"},
    {usuario: "pedro", contraseña: "pedro"},


]


for(let i=0; i<2; i+=1){

    if( usuario ==="mauro" && contraseña ==="mau"){
        alert("Hola Mauro")
     
     
     ///Base de datos:
     
     let seleccionar = prompt("Acceso a la Plataforma de Ventas. Eliga opcion: Base de datos de clientes: Buscar por cuenta (1), Por producto (2), Agregar a la base de datos(3) o cotizar rollos(4)")
     
     switch(seleccionar){
     
             case "1":
     
             let cliente = prompt("ingrese el cliente a buscar");
             
             const resultado = clientes.find(item => item.nombre === cliente);
             
             let mensaje = `
             
             nombre: ${resultado.nombre}
             producto: ${resultado.producto}
             telefono: ${resultado.telefono}
     
             `;
     
             alert(mensaje)
     
     
             break;
     
             case "2":
     
             let producto = prompt("ingrese producto a buscar")
             let filtrados = clientes.filter (item  => item.producto === producto);
     
             filtrados.forEach((item) => {
             let mensaje = `
             nombre: ${item.nombre}
             producto: ${item.producto}
             telefono: ${item.telefono}
     
             `;
     
             alert(mensaje)
             })
     
             break
     
             case "3":
     
             const agregarClientes = clientes.push({nombre: prompt("ingrese nombre"), producto: prompt("ingrese el Producto"), telefono: prompt("Ingrese el telefono")})
     
             console.log(clientes)
     
             break
     
             case "3":
     
             // Cotizador rollos
             case "4":
     
             const suma = (a, b) => a + b;
             const resta = (a, b) => a - b;
             const dividir = (a, b) => a / b;
              const multiplicar2 = (a, b) => a * b;
             const multiplicar3 = (a, b, C) => a * b * C;
             const precioMts2 = 0.39;
             const ganancia = 1.2;
     
     
             let ancho = parseFloat(prompt("Ingrese el ancho en cm"));
             let alto = parseInt(prompt("ingrese el largo en mts"));
             let cantidad = parseInt(prompt("Ingrese cantidad de rollos"))
     
             let precioDeventa = dividir(multiplicar2(multiplicar2(multiplicar3(ancho,alto,cantidad), precioMts2), ganancia), cantidad)
     
             alert(`El precio de venta de cada rollo es U$S ${precioDeventa}`)
     
             
             
     
     
     
     
     
     }
     
     
     
     
   
     
     
     
     
     } 
     
     else if( usuario === "mauro" && contraseña !== "mau") {
     
         alert("Contraseña Incorrecta")
     
     } else if (usuario !=="mauro" && contraseña ==="mau"){
     
         alert("Usuario incorrecto")
     } else{
         alert("Acceso Denegado")
     
     }
     

    
}















//////////////////////////////////////////////////////////////////////////



//Switch


//let acciones = prompt("Cotizar o cargar cliente")

// Cotizador rollos




/* switch(acciones) {
    case "cotizar":

    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;
    const dividir = (a, b) => a / b;
    const multiplicar2 = (a, b) => a * b;
    const multiplicar3 = (a, b, C) => a * b * C;
    const precioMts2 = 0.39;
    const ganancia = 1.2;


    let ancho = parseFloat(prompt("Ingrese el ancho en cm"));
    let alto = parseInt(prompt("ingrese el largo en mts"));
    let cantidad = parseInt(prompt("Ingrese cantidad de rollos"))

    let precioDeventa = dividir(multiplicar2(multiplicar2(multiplicar3(ancho,alto,cantidad), precioMts2), ganancia), cantidad)

    console.log(`El precio de venta de cada rollo es U$S ${precioDeventa}`)

        break;

    // cargar clientes


    case "Cargar cliente":
        console.log("Carga el cliente");
   
}





// Cargar clientes
 */


/* 
alert("Carga el Cliente")


class Cliente {
    constructor(nombre, producto, telefono) {
        this.nombre = nombre;
        this.producto = producto;
        this.telefono = telefono;
        

    }


}

let cliente1 = new Cliente (prompt("Ingrese Nombre"), prompt("ingrese Producto"), prompt("ingrese Telefono"))

console.log(cliente1)



 */





