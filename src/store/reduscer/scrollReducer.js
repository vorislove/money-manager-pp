import { SCROLL } from '../types';

const defaultState = {
	scroll: 0
};

export const scroll = (state = defaultState, action) => {
	switch (action.type) {
		case SCROLL:
			return { ...state, scroll: action.payload };
		default:
			return state;
	}
};
