import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditIncomeComponent, ListIncomeComponent } from '.';

const components = [
  AddEditIncomeComponent,
  ListIncomeComponent,
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ]
})
export class IncomeModule { }
