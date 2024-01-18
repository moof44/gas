import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CommonComponentModule } from '../common-component';

@NgModule({
  imports: [
    CommonModule
    , CommonComponentModule
  ],
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
