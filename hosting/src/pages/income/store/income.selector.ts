import { createFeature } from '@ngrx/store';
import { incomeAdapter, incomeReducer } from './income.reducer';

// const incomeAll = createSelector(
//     incomeFeature.selectEntities,
// );

// export const incomeSelectors = {
//     income, incomeAll
// }

export const incomeFeature = createFeature({
    name: 'income',
    reducer: incomeReducer,
    extraSelectors: ({selectEntities, selectIds, selectIncomeState}) => ({
      ...incomeAdapter.getSelectors(selectIncomeState),
      selectSelectedIncome: (state: any) => selectEntities(state)[state.selectedId],  
      
    })
  });