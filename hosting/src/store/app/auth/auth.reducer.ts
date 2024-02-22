import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions as auth} from './auth.actions';
import { AuthState } from './auth.interface';

const isLoggedIn = false;

const initialState:AuthState = {
  user:null,
  isLoggedIn,
};

const authRed = createReducer(
  initialState,
  on(auth.loginSuccess, (state, user) => {
    return {...state, ...user}
  }),
  on(auth.logout, (state) => ({...state, user:null, isLoggedIn:false})),
);

export const authFeature = createFeature({
  name: 'auth',
  reducer: authRed,
});