import {
	ADD_CARD,
	CLOSE_MODAL,
	DELETE_CARD,
	LOGIN,
	LOGOUT,
	OPEN_MODAL,
	TOGGLE_PAGE
} from './types';

export function addCard() {
	return {
		type: ADD_CARD,
		payload: {
			name: 'Новая категория',
			img: 'bi bi-basket2-fill',
			sum: 0,
			id: Date.now(),
			history: []
		}
	};
}

export function deleteCard(id) {
	return {
		type: DELETE_CARD,
		payload: id
	};
}

export function openModal({ id, card }) {
	return {
		type: OPEN_MODAL,
		payload: {
			id,
			card
		}
	};
}

export function closeModal() {
	return {
		type: CLOSE_MODAL
	};
}

export function togglePage(pageName) {
	return {
		type: TOGGLE_PAGE,
		payload: pageName
	};
}

export function login(token, id) {
	return {
		type: LOGIN,
		payload: {
			token,
			id
		}
	};
}

export function logout({}) {
	return {
		type: LOGOUT
	};
}
