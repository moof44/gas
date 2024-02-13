import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { LabelModule } from '../label/label.module';

const components = [
  HeaderComponent,
  BodyComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    CommonModule
    ,RouterOutlet
    ,LabelModule
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ]
})
export class LayoutModule { }
