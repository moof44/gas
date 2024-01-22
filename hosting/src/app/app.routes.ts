import { Routes } from '@angular/router';
import { AddEditIncomeComponent } from '../pages/income';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'income/add-edit-income',
        pathMatch: 'full'
    },
    {
        path: 'income/add-edit-income',
        component: AddEditIncomeComponent
    }
];
