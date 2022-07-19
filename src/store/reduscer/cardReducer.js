import { ADD_CARD, DELETE_CARD } from '../types';

const defaultState = {
	data: [
		{ name: 'Покупки', img: 'bi bi-bag-fill', sum: 5000, id: 1, history: [] },
		{ name: 'Здоровье', img: 'bi bi-heart-pulse-fill', sum: 3340, id: 2, history: [] },
		{ name: 'Транспорт', img: 'bi bi-basket2-fill', sum: 1150, id: 3, history: [] },
		{ name: 'Жилье', img: 'bi bi-basket2-fill', sum: 3000, id: 4, history: [] },
		{ name: 'Развлечения', img: 'bi bi-basket2-fill', sum: 300000, id: 5, history: [] }
	],
	maxCountCard: 6
};

export function cardReducer(state = defaultState, action) {
	switch (action.type) {
		case ADD_CARD:
			if (state.maxCountCard <= 12) {
				return Object.assign({}, state, {
					...state,
					data: [...state.data, action.payload],
					maxCountCard: state.maxCountCard + 1
				});
			}
		case DELETE_CARD:
			return Object.assign({}, state, {
				...state,
				data: state.data.filter((item) => item.id !== action.payload),
				maxCountCard: state.maxCountCard - 1
			});
		default:
			return state;
	}
}
