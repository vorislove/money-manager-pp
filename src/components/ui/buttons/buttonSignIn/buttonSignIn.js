import React from 'react';
import './buttonSignIn.scss';

const ButtonSignIn = ({ name, background, color, onClick, disabled = false }) => {
	const style = {
		background: background,
		color: color
	};

	return (
		<button className="sign-in" style={style} onClick={onClick} disabled={disabled}>
			{name}
		</button>
	);
};

export default ButtonSignIn;
