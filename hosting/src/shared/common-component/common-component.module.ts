import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTitleComponent } from './header-title/header-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderTitleComponent]
  , exports: [HeaderTitleComponent]
})
export class CommonComponentModule { }
