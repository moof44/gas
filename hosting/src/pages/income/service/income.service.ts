import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { Income, IncomeEvents } from '../../../shared';
import { incomeActions } from '../store/income.actions';
import { incomeFeature } from '../store/income.selector';
import { PageMode, PageNames, pageActions } from '../../../store/app';
import { filter, map, take } from 'rxjs';

interface iIncomeService{
  list$: Income[],
  current$: Income,
}

@Injectable()
export class IncomeService{
  // inject
  private _store = inject(Store);

  // props
  list$ = this._store.select(incomeFeature.selectAll);
  event$ = this._store.select(incomeFeature.selectEvent);

  constructor(){
  }

  initIncomeList(){
    this._store.dispatch(incomeActions.fetchList());
    this._store.dispatch(pageActions.setInitialPageState({
      url: '/income/list',
      page: PageNames.income,
      title: 'Income List',
      mode: PageMode.addIncome
    }))
  }

  // Add/Edit Income
  initAddEditIncome(title:string=''){
    this._store.dispatch(incomeActions.initEvent());
    this._store.dispatch(pageActions.setInitialPageState({
      url: '/income/add-edit-income',
      page: PageNames.income,
      title: title,
      mode: PageMode.editIncome
    }))
  }

  initAddIncome(){
    this._store.dispatch(incomeActions.initEvent());
    this.initAddEditIncome('Add Income');
  }

  initEditIncome(){
    this._store.dispatch(incomeActions.initEvent());
    this.initAddEditIncome('Edit Income');
  }

  saveIncome(type: 'add' | 'update'='add', income: Partial<Income>){
    this._store.dispatch(incomeActions.save(income));
  }
  addIncome(income: Partial<Income>){
    this.saveIncome('add', income);
  }
  updateIncome(income: Partial<Income>){
    this.saveIncome('update', income);
  }


}