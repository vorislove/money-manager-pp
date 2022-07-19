import React from 'react';
import { useToastStateContext } from '../../context/TostContext';
import { Message } from './Message';

export default function MessageContainer() {
	const { toasts } = useToastStateContext();

	return (
		<div className="toast-container position-fixed top-0 start-50 p-3 translate-middle-x">
			{toasts.map((toast) => (
				<Message message={toast.message} key={toast.id} id={toast.id} />
			))}
		</div>
	);
}
