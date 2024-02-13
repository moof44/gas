import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTitleComponent } from './header-title/header-title.component';

const components = [
  HeaderTitleComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [components],
  exports: [components],
})
export class LabelModule { }
