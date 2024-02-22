import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Income, IncomeState } from '../../../shared';
import { incomeActions } from './income.actions';

function selectIncomeId(a:Income){return a.id}

export const incomeAdapter = createEntityAdapter<Income>();
const initialState: IncomeState = incomeAdapter.getInitialState({
  selectId: selectIncomeId,
});


export const incomeReducer = createReducer(
  initialState,
  on(incomeActions.saveSuccess, (state, income) => {
    return incomeAdapter.addOne(income, state);
  }),
  on(incomeActions.fetchListSuccess, (state, incomeList) => {
    return incomeAdapter.setAll(incomeList.income, state);
  })
);

