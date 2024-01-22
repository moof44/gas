import { createActionGroup, props } from '@ngrx/store';
import { InitialPageState } from './page.interface';


//export const authActions = { login, logout };

export const pageActions = createActionGroup({
    source: 'Page',
    events: {
        'Set Initial Page State': props<InitialPageState>(),
    }
})
