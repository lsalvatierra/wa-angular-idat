import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-ejemplo',
  templateUrl: './componente-ejemplo.component.html',
  styleUrls: ['./componente-ejemplo.component.scss']
})
export class ComponenteEjemploComponent implements OnInit {

  titulo = 'Ejemplo para el curso de Angular';
  contador = 0;
  imagen = "https://dummyimage.com/300";

  curso = {
    nombre: "Desarrollo avanzado de aplicaciones II",
    imagen: "https://dummyimage.com/300"
  };

  constructor() { 
    /*setInterval(()=> {
      this.titulo = "Cambio",
      this.contador = this.contador+1
    }, 2000);*/
  }

  ngOnInit(): void {
  }

  cambiarNombreCurso1(nombreCurso: string) {
    debugger;
    this.curso.nombre = nombreCurso;
    this.curso.imagen = "https://miro.medium.com/max/1302/1*MCJlRDOghcQFh-GSVBpV1A.png";
  }

  cambiarNombreCurso2(){
    
  }
}
