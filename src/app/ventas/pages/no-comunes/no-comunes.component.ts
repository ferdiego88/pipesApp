import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //I18nSelect
  nombre = 'Fernando';
  genero = 'masculino';

  nombre2 = 'Susana';
  genero2 = 'femenino';
 
  clientesArray = [{nombre:'Juan', genero:'masculino'},
                  {nombre:'Diana', genero:'femenino'},
                  {nombre:'Pablo', genero:'masculino'},
                  {nombre:'Alfredo', genero:'masculino'},
                  {nombre:'Rosario', genero:'femenino'},
                  {nombre:'Khalessi', genero:'femenino'}
                  ]
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string [] = ['Maria','Pedro','Juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    //Elige un cliente al azar del arreglo
    if (!(this.clientesArray.length>0)) {
       return;
    }
    const clienteSeleccionado = (Math.floor(Math.random()*(this.clientesArray.length)+0));
    this.nombre2 = this.clientesArray[clienteSeleccionado].nombre;
    this.genero2 = this.clientesArray[clienteSeleccionado].genero;
  }

  borrarCliente(){
    this.clientesArray.pop();
  }
}
