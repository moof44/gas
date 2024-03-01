import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AddEditIncomeComponent, IncomeService, ListIncomeComponent } from '.';
import { CommonComponentModule } from '../../shared';
import { ButtonDirective } from '../../shared/directives/button.directive';

const components = [
  AddEditIncomeComponent,
  ListIncomeComponent,
]

const directives = [
  ButtonDirective,
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

export const IncomeImports = {
    components,
    directives,
    material,
    angular,
    imports,
    providers
}