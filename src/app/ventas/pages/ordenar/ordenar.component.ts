import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  
})
export class OrdenarComponent {

  enMayusculas:boolean=true;

  cambiar() {
    this.enMayusculas =!this.enMayusculas;
  }

}
