import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Income, IncomeEvents, IncomeState } from '../../../shared';
import { incomeActions } from './income.actions';

function selectIncomeId(a:Income){return a.id}

export const incomeAdapter = createEntityAdapter<Income>();
const initialState: IncomeState = incomeAdapter.getInitialState({
  selectId: selectIncomeId,
  event: IncomeEvents.none,
});


export const incomeReducer = createReducer(
  initialState,
  on(incomeActions.saveSuccess, (state, income) => {
    return incomeAdapter.addOne(income, state);
  }),
  on(incomeActions.fetchListSuccess, (state, incomeList) => {
    return incomeAdapter.setAll(incomeList.income, state);
  }),
  on(incomeActions.selectIncome, (state, {selectedId}) => {
    return {...state, selectedId};
  }),
  on(incomeActions.incomeAddCompleted, (state) => {
    return {...state, event: IncomeEvents.addCompleted};
  }),
  on(incomeActions.incomeUpdateCompleted, (state) => {
    return {...state, event: IncomeEvents.updateCompleted};
  }),
  on(incomeActions.initEvent, (state) => {
    return {...state, event: IncomeEvents.none};
  }),
);

