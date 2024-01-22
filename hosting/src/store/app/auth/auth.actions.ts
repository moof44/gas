import { User } from '@angular/fire/auth';
import { createActionGroup, emptyProps, props } from '@ngrx/store';


//export const authActions = { login, logout };

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Login': props<{email:string, password:string}>(),
        'LoginSuccess': props<User>(),
        'LoginFailure': props<{error: string}>(),
        'Logout': emptyProps(),
    }
})
