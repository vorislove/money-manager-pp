import React from 'react';
import './input.scss';

export default function Input({ type, placeholder, name, onChange }) {
	return (
		<input
			className="input"
			type={type}
			placeholder={placeholder}
			name={name}
			onChange={onChange}
		/>
	);
}
