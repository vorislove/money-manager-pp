import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { cardReducer } from './cardReducer';
import { modalReducer } from './modalReducer';
import { scroll } from './scrollReducer';
import { slectedPageReducer } from './slectedPageReducer';

export const rootReducer = combineReducers({
	card: cardReducer,
	modal: modalReducer,
	page: slectedPageReducer,
	scroll: scroll,
	auth: authReducer
});
