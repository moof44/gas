import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditIncomeComponent, ListIncomeComponent } from '.';
import { CommonComponentModule } from '../../shared';

const components = [
  AddEditIncomeComponent,
  ListIncomeComponent,
]

@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ] 
})
export class IncomeModule { }
