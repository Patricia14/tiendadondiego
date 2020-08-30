import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser';

@Component({
selector: 'app-registro',
templateUrl: './registro.component.html',
styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
registro=[];
cliente:any;
descuento:number;
nombre:string;
dui:string;
personaDui;
personaNombre;
personaCompras;
contador:number;
unidadesProdu;
unidadesCodigo;
unidadesPrecio;
unidadesDescri;
  opcionSeleccionadoT: string ;
  opcionSeleccionadoP: string ;
  codigo:number;
  producto:number;
  valorTienda:number;
  valorPersona:number;
  valorFac:number;
  contadorFactura:number;
  valorProdu:number;
  valorPrecio:number;
  valorDescri:number;
  nombreCliente:number;
 factura:any;
 nombrProducto:string;
 descriProducto:string;
 precioProducto:number;
 descuentoProducto:number;
 precioProductoDescuento:number;
 
constructor() { }
ngOnInit() {
this.personaDui = [123456789,987654321,147258369,963852741];
this.personaNombre = ["Barack Obama","Michael Jackson","Keanu Reeves","Chris Evans"];
this.personaCompras = [2,0,4,5];
this.valorProdu=0;
  this.valorPrecio=0
  this.valorDescri=0;
  this.contadorFactura=0;
this.nombreCliente=0;
this.nombre='';
this.contador=0;
this.contadorFactura=0;
this.unidadesCodigo = [1,2,3,4,5];
this.unidadesProdu = ["Galleta Oreo","Sandilla","Harina de trigo","Chocolate","Cereal K"];
this.unidadesPrecio = [0.25,3.00,1.50, 1.00,2.30];
this.unidadesDescri = ["Deliciosa galleta de chocolate con relleno de vainilla","Una sandía fresca de los estercoleros su incorporeidad","Harina de todo uso","Chocolate negro","Cereal con trozos de fresa"];
  this.opcionSeleccionadoT="Selecciona";
  this.opcionSeleccionadoP="Selecciona";
  this.codigo=0;
  this.producto=0;
  this.valorTienda=0;
  this.valorPersona=0;
  this.valorFac=0;
  this.factura = [];
  this.nombrProducto; 
  this.descriProducto; 
  this.precioProducto;
  this.precioProductoDescuento;
  this.descuento;
}

capturarProducto() {
  this.producto=+this.opcionSeleccionadoT;
    switch(this.producto){
  case this.unidadesCodigo[0]:
  this.valorProdu=this.unidadesProdu[0];
  this.valorPrecio=this.unidadesPrecio[0];
  this.valorDescri=this.unidadesDescri[0];
  break;
  case this.unidadesCodigo[1]:
    this.valorProdu=this.unidadesProdu[1];
  this.valorPrecio=this.unidadesPrecio[1];
  this.valorDescri=this.unidadesDescri[1];
  break;
  case this.unidadesCodigo[2]:
    this.valorProdu=this.unidadesProdu[2];
  this.valorPrecio=this.unidadesPrecio[2];
  this.valorDescri=this.unidadesDescri[2];
  break;
  case this.unidadesCodigo[3]:
    this.valorProdu=this.unidadesProdu[3];
  this.valorPrecio=this.unidadesPrecio[3];
  this.valorDescri=this.unidadesDescri[3];
  break;
  case this.unidadesCodigo[4]:
    this.valorProdu=this.unidadesProdu[4];
    this.valorPrecio=this.unidadesPrecio[4];
    this.valorDescri=this.unidadesDescri[4];
  break;
  }
  
  
  }

  capturarPersona() {
    this.codigo=+this.opcionSeleccionadoP;
  
  this.contador=-1;
  for (var char of this.personaDui) {
    this.contador=1+this.contador;
    
    if (this.codigo==char){
      this.valorPersona=this.personaNombre[this.contador];
      this.valorFac=this.personaCompras[this.contador];
break
    }
}
  }

  ingresar(){

    
    this.personaNombre.push(this.nombre);
    this.personaDui.push(this.dui);
    this.personaCompras.push(0);
    
    this.contador++;
    }
    
  facturar(){

    //mostrar: Dui cliente, Nombre cliente, Codigo de producto, Descripcion de producto, precio
    //this.factura={"Dui Cliente":this.opcionSeleccionadoP,"Nombre Cliente":this.nombreCliente,"Codigo de producto":this.opcionSeleccionadoT,"Nombre de Producto":this.nombrProducto, "Descripcion de producto":this.descriProducto , "Precio: ":this.precioProducto};
    this.codigo=+this.opcionSeleccionadoP;
  
  this.contadorFactura=-1;
  for (var char of this.personaDui) {
    this.contadorFactura=1+this.contadorFactura;
    
    if (this.codigo==char){
      this.nombreCliente=this.personaNombre[this.contadorFactura];
      this.descuentoProducto=this.personaCompras[this.contadorFactura];
      
break
    }
}

this.codigo=+this.opcionSeleccionadoT;
  
  this.contadorFactura=-1;
for (var char of this.unidadesCodigo) {
  this.contadorFactura=1+this.contadorFactura;
  
  if (this.codigo==char){
    this.nombrProducto=this.unidadesProdu[this.contadorFactura];
    this.descriProducto=this.unidadesDescri[this.contadorFactura];
    this.precioProducto=this.unidadesPrecio[this.contadorFactura];
    
break
  }
}

if (this.descuentoProducto>=2&&this.descuentoProducto<4){
  this.precioProductoDescuento=this.precioProducto-(this.precioProducto*0.05)
  this.descuento=5;
}else if(this.descuentoProducto>=4){
  this.precioProductoDescuento=this.precioProducto-(this.precioProducto*0.1)
  this.descuento=10;
}else{
  this.precioProductoDescuento=this.precioProducto;
  this.descuento=0;
}

    this.factura={"Dui Cliente":this.opcionSeleccionadoP,"Nombre Cliente":this.nombreCliente,"Codigo de producto":this.opcionSeleccionadoT,"Nombre de Producto":this.nombrProducto, "Descripcion de producto":this.descriProducto , "Precio":this.precioProducto, "Descuento aplicado: ":this.descuentoProducto, "Precio con descuento: ":this.precioProductoDescuento};
      
    this.registro.push(this.factura);
    this.contadorFactura++;
    
    }
}


 export class AppComponent {
 }