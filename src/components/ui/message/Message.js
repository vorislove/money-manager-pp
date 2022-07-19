import React from 'react';
import { useToastDispatchContext } from '../../context/TostContext';
import './Message.scss';

export const Message = ({ message, id }) => {
	const dispatch = useToastDispatchContext();

	const closeHandler = () => {
		dispatch({ type: 'DELETE_TOAST', id });
	};

	return (
		<>
			<div
				className="toast align-items-center show"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div className="d-flex">
					<div className="toast-body">{message}</div>
					<button
						type="button"
						className="btn-close me-2 m-auto"
						data-bs-dismiss="toast"
						aria-label="Close"
						onClick={closeHandler}
					></button>
				</div>
			</div>
		</>
	);
};
