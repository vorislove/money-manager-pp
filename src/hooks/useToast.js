import { useToastDispatchContext } from '../components/context/TostContext';

export function useToast(delay) {
	const dispatch = useToastDispatchContext();

	function toast(message) {
		const id = Math.random().toString(36).substr(2, 9);
		dispatch({
			type: 'ADD_TOAST',
			toast: { message, id }
		});

		setTimeout(() => {
			dispatch({ type: 'DELETE_TOAST', id });
		}, delay);
	}

	return toast;
}
