import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import ButttonSingIn from '../ui/buttons/buttonSignIn/buttonSignIn';
import Input from '../ui/inputs/Input';
import InputPassword from '../ui/inputs/inputPassword/inputPassword';
import './SignUp.scss';
import { useToast } from '../../hooks/useToast';

export default function SignUp() {
	const [form, setForm] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	});
	const { loading, request } = useHttp();
	const toast = useToast(4000);

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', { ...form });
			toast('success', data.message);
		} catch (e) {}
	};

	return (
		<div className="content">
			<h2 className="header">Регистрация</h2>
			<Input type="text" placeholder="Имя" name="firstName" onChange={changeHandler} />
			<Input type="text" placeholder="Фамилия" name="lastName" onChange={changeHandler} />
			<Input type="text" placeholder="Email" name="email" onChange={changeHandler} />
			<InputPassword onChange={changeHandler} />
			<div className="btns">
				<ButttonSingIn
					name={'Регистрация'}
					background={'rgb(93, 122, 237)'}
					color={'white'}
					onClick={registerHandler}
					disabled={loading}
				/>
			</div>
			<Link className="sign-up" to={`/sign-in`}>
				Уже есть аккаунт
			</Link>
		</div>
	);
}
