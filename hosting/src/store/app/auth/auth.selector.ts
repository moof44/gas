import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.interface';
import { authFeature } from './auth.reducer';



const auth = createFeatureSelector<AuthState>('auth');


const isAuth = createSelector(
    authFeature.selectAuthState,
    (state: AuthState) => state.user
);

export const authSelectors = {
    auth, isAuth,
}