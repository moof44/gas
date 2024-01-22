import { createSelector } from '@ngrx/store';
import { pageFeature } from './page.reducer';



const p = pageFeature;

const common = createSelector(
    p.selectPage,
    p.selectTitle,
    p.selectUrl,
    (page, title, url) => ({page, title, url})
);


export const pageSelectors = {
    common,
}