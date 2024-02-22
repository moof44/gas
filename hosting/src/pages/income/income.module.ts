import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditIncomeComponent, IncomeService, ListIncomeComponent } from '.';
import { CommonComponentModule } from '../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

const components = [
  AddEditIncomeComponent,
  ListIncomeComponent,
]

const material = [
  MatInputModule,
  MatDatepickerModule,
  MatButtonModule,
  MatTableModule,
]

const angular = [
  CommonModule,
  ReactiveFormsModule,
]

const imports = [
  CommonComponentModule,
]

const providers = [
 provideNativeDateAdapter(),
 IncomeService,
]

@NgModule({
  imports: [
    angular,
    imports,
    material
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ],
  providers: [
    providers
  ]
})
export class IncomeModule { }
