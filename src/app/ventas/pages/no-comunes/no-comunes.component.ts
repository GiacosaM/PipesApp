import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    `strong{
      color: red;
    }
      
    ` 
  ]
  
})
export class NoComunesComponent  {

  nombre: string= 'Martin';
  genero: string ='masculino';
  estado: boolean =false;

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nplural
  clientes: string[]=[];
  clientesSlice: string[]=['Jorge','Martin','Juan','Carlos'];
  clientesMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes eperando'
  }

  cambiarGenero() {
    
    if (this.estado === false) {
      this.nombre= 'Fernanda',
      this.genero='femenino'
      this.estado= true
    } else {
      this.nombre= 'Martin',
      this.genero='masculino'
      this.estado= false
    }
  }

  agregarPersona() {
    this.clientes.push('');
  }

// Keyvalue pipe
persona= {
  nombre: 'Martin',
  edad: 40,
  direcccion: 'Ottawa, Canada'
}

// AsyncPipe 
miObservable = interval(1000);

valorPromesa = new Promise( (resolve, reject)=> {
setTimeout(() => {
  resolve('Tenemos data de la promesa')
}, 3500);
});


}
