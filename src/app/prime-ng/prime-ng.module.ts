import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule

  ]
})
export class PrimeNgModule { }