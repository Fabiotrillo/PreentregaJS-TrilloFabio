//Funciones
function saludar(nombre, apellido) {
    alert("Bienvenido " + nombre + " " + apellido);
  }


class Producto{
    constructor(id,nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    sumar_iva() {
        return this.precio * 1.21;
      }


    aumentarCantidad(cantidad){
        this.cantidad =  this.cantidad + cantidad
    }

    descripcion(){

        return "\nProducto: "+ this.id+
               "\nNombre: "+ this.nombre+
               "\nPrecio: "+ this.precio+
               "\nPrecio + IVa: "+ this.sumar_iva()+
               "\n";   
      } 

      descripcionDeCompra(){
        return "\nProducto: "+ this.id+
                "\nNombre: "+ this.nombre+
                "\nPrecio: "+ this.precio+
                "\nPrecio + IVa: "+ this.sumar_iva()+
                "\nCantidad: "+ this.cantidad+
                "\n"; 
      }
     
}

class ProductoController{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    buscarProductoPorID(id){
        return this.listaProductos.find(producto => producto.id == id)
    }

    mostrarProductos(){
        let listaEnTexto = ""
        this.listaProductos.forEach( producto => {
            listaEnTexto = listaEnTexto + producto.descripcion()
        })
        alert(listaEnTexto)
    }
}

class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    agregar(producto,cantidad){
    
        let existe = this.listaCarrito.some( el => el.id == producto.id)
        if(existe){
            producto.aumentarCantidad(cantidad)
        }else{
            producto.aumentarCantidad(cantidad)
            this.listaCarrito.push(producto)
        }
    }

    mostrarProductos(){
        let listaEnTexto = "Carrito de compras:\n"
        this.listaCarrito.forEach(producto => {
            listaEnTexto = listaEnTexto + producto.descripcionDeCompra()
           
        })
        alert(listaEnTexto)
    }

    calcularTotal(){
        return this.listaCarrito.reduce( (acumulador,producto) => acumulador + producto.precio * producto.cantidad ,0)
    }

    calcularIVA(){
        return this.calcularTotal() * 1.21
    }
}

const CP = new ProductoController()
const CARRITO = new Carrito()

CP.agregar(new Producto(1,"producto1", 250, 0))
CP.agregar(new Producto(2,"producto2", 350, 0))
CP.agregar(new Producto(3,"producto3", 400, 0))
CP.agregar(new Producto(4,"producto4", 100, 0))

let  rta = ""




do{

  //usuario
  let nombre = prompt("Ingrese su Nombre");
  let apellido = prompt("Ingrese su Apellido");

  saludar(nombre, apellido);
  

  //Mostramos productos al usuario

    CP.mostrarProductos()
    let opcion = Number(prompt("Ingrese el código del producto que desea agregar"))
    let producto = CP.buscarProductoPorID(opcion)
    let cantidad = Number(prompt("Ingrese la cantidad del producto seleccionado que desea"))
    CARRITO.agregar(producto,cantidad)
    alert("El producto fué añadido exitosamente: ")
    CARRITO.mostrarProductos()

    rta = prompt("Ingrese 'ESC' para salir").toUpperCase()
}while(rta != "ESC")

alert("El total de su compra es de: "+ CARRITO.calcularTotal())