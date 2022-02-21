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
 
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string [] = ['Maria','Pedro','Juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){

  }

  borrarCliente(){
    
  }
}
