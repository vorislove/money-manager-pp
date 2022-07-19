import { TOGGLE_PAGE } from '../types';

const defaultName = {
	pageName: 'Категории'
};

export function slectedPageReducer(state = defaultName, action) {
	switch (action.type) {
		case TOGGLE_PAGE:
			return { ...state, pageName: action.payload };
		default:
			return state;
	}
}
