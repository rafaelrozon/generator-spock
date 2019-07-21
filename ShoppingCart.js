/**
 * ShoppingCart Selectors
 */
import { createSelector } from 'reselect';

const rootSelector = state => state;

export const sampleSelector = createSelector(
    [rootSelector],
    state => state
);
