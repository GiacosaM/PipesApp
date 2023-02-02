import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
 
})
export class BasicosComponent {

  nombreLower: string ='Martin Giacosa';
  nombreUpper: string = 'martin giacosa ';
  nombreCompleto: string = 'MaRTiN GiAcOsA';

  fecha: Date = new Date();
}
