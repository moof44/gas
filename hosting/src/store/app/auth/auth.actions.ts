import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserInfo } from './auth.interface';


//export const authActions = { login, logout };

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Login': props<{email:string, password:string}>(),
        'LoginSuccess': props<UserInfo>(),
        'LoginFailure': props<{error: string}>(),
        'Logout': emptyProps(),
    }
})
