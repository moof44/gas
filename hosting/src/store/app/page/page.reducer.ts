import { createFeature, createReducer, on } from '@ngrx/store';
import { PageApp } from './page.interface';
import { pageActions } from './page.actions';


const initialState:PageApp = {
    url: '',
    page: 'home',
    title: 'Home',
};

const pageRed = createReducer(
  initialState,
  on(pageActions.setInitialPageState, (state, {url, page, title}) => ({...state, url, page, title})),
);

export const pageFeature = createFeature({
  name: 'page',
  reducer: pageRed,
});