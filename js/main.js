 //---------------TIENDA DE BOTINES---------------


 //-----Modificamos el titulo del html-----
 let titulo = document.getElementById("titulo")
console.log( titulo.innerText )

titulo.innerText = "SIMULADOR INTERACTIVO EN CODER"
console.log( titulo.innerText )

//----------------Productos--------------
class Producto {
    constructor (nombre, precio, stock){
        this.nombre= nombre;
        this.precio= Number(precio);
        this.stock= stock;
    }
    actualizarStock(x){
        this.stock= this.stock - x;
    }
}

const listaProductos = [];
listaProductos.push(new Producto ("Nike", 18000, 10));
listaProductos.push(new Producto ("Adidas",19000, 10));
listaProductos.push(new Producto ("Puma", 11000, 15));

//-----Creando elemento a partir de los objetos----------
for (const articulos of listaProductos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> NOMBRE ${articulos.nombre}</h3>
                            <p>  Precio: $${articulos.precio}</p>
                            <b> Stock: ${articulos.stock}</b>`;
    document.body.appendChild(contenedor);
}



//-----------Precio de menor a mayor---------------
const ordenarMenorMayor = () => {
    listaProductos.sort((a,b)=> a.precio - b.precio);
    console.log(listaProductos);
    mostrarListaOrdenada();
}

//------------Precio de mayor a menor----------------
const ordenarMayorMenor = () => {
    listaProductos.sort((a,b)=> b.precio - a.precio);
    console.log(listaProductos);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    let lista = [];
    listaProductos.forEach(producto => lista.push(producto.nombre+" $"+producto.precio));
    alert("Lista de precios:"+"\n"+lista.join("\n"))
}

//-----FUNCIONES PARA EL PROCESO DE COMPRA-----
let total = 0;

const agregarProductoAlCarrito = () => {
    let otroProducto;
    let producto = "";
    let cantidad = 0;
    let precio = 0;

    //Ciclo para sumar productos al carrito
    do {
        producto = prompt ("¿Que marca queres comprar, Nike, Adidas o Puma?"); 
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));
        

        switch (producto) {
            case listaProductos[0].nombre:
                listaProductos[0].actualizarStock(cantidad);
                if (listaProductos[0].stock < 0 || isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    listaProductos[0].stock=listaProductos[0].stock+cantidad;
                     precio = 0;
                    cantidad = 0;
                }else{
                    precio= listaProductos[0].precio;
                }
                break;
            case listaProductos[1].nombre:
                listaProductos[1].actualizarStock(cantidad);
                if (listaProductos[1].stock<0 || isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    listaProductos[1].stock=listaProductos[1].stock+cantidad;
                    precio = 0;
                    cantidad = 0;
                }else{
                    precio= listaProductos[1].precio;
                }
                break;
            case listaProductos[2].nombre:
                listaProductos[2].actualizarStock(cantidad);
                if (listaProductos[2].stock<0 || isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    listaProductos[2].stock=listaProductos[2].stock+cantidad;
                    precio = 0;
                    cantidad = 0;
                }else{
                    precio= listaProductos[2].precio;
                }
                break;
            default:
                alert("Alguno de los ingresados no es correcto");
                precio= 0;
                cantidad= 0;
        }
        total = total + precio*cantidad;
        otroProducto = confirm("¿Querés agregar otro producto?");
    } while (otroProducto);
}

const comprarProductos = () => {
    if (confirm("¿Querés ordenar la lista de productos del más barato al más caro?")){
        ordenarMenorMayor();
    }else{
        ordenarMayorMenor();
    }
    agregarProductoAlCarrito();
}    
comprarProductos();
alert ("El total de tu compra es: $"+total);