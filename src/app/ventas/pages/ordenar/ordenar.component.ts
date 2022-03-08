import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent  {

  heroes: Heroe[] = [
    { 
      nombre: 'Superman',
      vuela: true,
      color: Color.azul

    },
    { 
      nombre: 'Batman',
      vuela: true,
      color: Color.negro

    }
    ,
    { 
      nombre: 'Robin',
      vuela: false,
      color: Color.verde

    },
    { 
      nombre: 'DareDevil',
      vuela: false,
      color: Color.rojo

    },
    { 
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde

    }
  ];
  enMayusculas = false;
  constructor() { }


}
