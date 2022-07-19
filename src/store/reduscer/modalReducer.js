import { CLOSE_MODAL, OPEN_MODAL } from '../types';

const defaultState = {
	selectedCard: 1,
	isOpen: false,
	selectCard: { name: '', sum: 0, img: '' }
};

export function modalReducer(state = defaultState, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				selectedCard: action.payload.id,
				isOpen: true,
				selectCard: action.payload.card
			};
		case CLOSE_MODAL:
			return { ...state, isOpen: false };
		default:
			return state;
	}
}
