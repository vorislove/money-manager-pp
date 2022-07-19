import React from 'react';
import { useState } from 'react';
import './inputPassword.scss';

export default function InputPassword({ onChange }) {
	const [type, setType] = useState('password');
	const [className, setClassName] = useState('bi bi-eye-slash');
	const [focus, setFocus] = useState('input-wrapper');

	const showPassword = () => {
		if (type === 'password') {
			setType('text');
			setClassName('bi bi-eye-fill');
		} else {
			setType('password');
			setClassName('bi bi-eye-slash');
		}
	};

	const focusHandler = () => {
		setFocus('input-wrapper focus');
	};

	const blurHandler = () => {
		setFocus('input-wrapper');
	};

	return (
		<div className={focus}>
			<input
				className="input-password"
				type={type}
				placeholder="Password"
				name="password"
				onChange={onChange}
				onFocus={focusHandler}
				onBlur={blurHandler}
			/>
			<div className="eye" onClick={showPassword}>
				<i className={className}></i>
			</div>
		</div>
	);
}
