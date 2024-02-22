import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Income } from '../../../shared/interface';


//export const authActions = { login, logout };

export const incomeActions = createActionGroup({
    source: 'Income',
    events: {
        'Save': props<Partial<Income>>(),
        'SaveSuccess': props<Income>(),
        'Fetch List': emptyProps(),
        'Fetch List Success': props<{income: Income[]}>(),
    }
})
