import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { useToast } from '../../hooks/useToast';
import { login } from '../../store/actions';
import ButttonSingIn from '../ui/buttons/buttonSignIn/buttonSignIn';
import Input from '../ui/inputs/Input';
import InputPassword from '../ui/inputs/inputPassword/inputPassword';
import './SignIn.scss';

export default function SignIn() {
	const [form, setForm] = useState({
		email: '',
		password: ''
	});
	const { loading, request } = useHttp();
	const dispatch = useDispatch();

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const loginHandler = async () => {
		try {
			const data = await request('/api/auth/login', 'POST', { ...form });
			dispatch(login(data.token, data.userId));
		} catch (e) {}
	};

	return (
		<div className="content">
			<h2 className="header">Авторизация</h2>
			<Input type="text" placeholder="Email" name="email" onChange={changeHandler} />
			<InputPassword onChange={changeHandler} />
			<div className="btns">
				<ButttonSingIn
					name={'Войти'}
					background={'rgb(93, 122, 237)'}
					color={'white'}
					onClick={loginHandler}
					disabled={loading}
				/>
			</div>
			<Link className="sign-up" to={`/auth/sign-up`}>
				Зарегистрироваться
			</Link>
		</div>
	);
}
