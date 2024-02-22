import { Routes } from '@angular/router';
import { AddEditIncomeComponent, ListIncomeComponent } from '../pages/income';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'income/list',
        pathMatch: 'full'
    },
    {
        path: 'income/add-edit-income',
        component: AddEditIncomeComponent
    },
    {
        path: 'income/list',
        component: ListIncomeComponent
    }
];
