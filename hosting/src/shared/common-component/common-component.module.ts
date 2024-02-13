import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

const components = [
  ButtonComponent
  ,InputComponent
];
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [components]
  ,exports: [components]
})
export class CommonComponentModule { }
