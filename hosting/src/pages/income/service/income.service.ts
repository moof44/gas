import { Injectable, inject } from '@angular/core';
import { Income } from '../../../shared';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';

interface iIncomeService{
  list: Income[],
  current: Income,
}

@Injectable()
export class IncomeService extends ComponentStore<iIncomeService>{
  // inject
  private _store = inject(Store);

  constructor(){
    super(getDefault())
  }

  


}

function getDefault(){
  return {
    list: [],
    current: {} as Income,
  }
}