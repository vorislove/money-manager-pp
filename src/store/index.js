import { compose, createStore } from 'redux';
import { combineReducers } from 'redux';
import { cardReducer } from './reduscer/cardReducer';

export const rootReducer = combineReducers({
	card: cardReducer
});

export const store = createStore(
	rootReducer,
	// @ts-ignore
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
