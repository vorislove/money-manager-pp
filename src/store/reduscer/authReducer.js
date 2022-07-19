import { _storageName } from '../../const/const';
import { LOGIN, LOGOUT } from '../types';

const defalutUsers = {
	token: null,
	userId: null
	// isAuthenicated: false
};

export function authReducer(state = defalutUsers, action) {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem(
				_storageName,
				JSON.stringify({
					token: action.payload.token,
					userId: action.payload.id
					// isAuthenicated: true
				})
			);
			return { ...state, token: action.payload.token, userId: action.payload.id };
		case LOGOUT:
			localStorage.removeItem(_storageName);
			return { ...state, token: null, userId: null, isAuthenicated: false };
		default:
			return state;
	}
}
