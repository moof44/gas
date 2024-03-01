import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { LabelModule } from '../label/label.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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
    ,MatToolbarModule
    ,MatIconModule
    ,MatButtonModule
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ]
})
export class LayoutModule { }
