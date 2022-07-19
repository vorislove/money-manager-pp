import React, { useEffect } from 'react';
import { ToastProvider } from './components/context/TostContext';
import MessageContainer from './components/ui/message/MessageContainer';
import { useRoutes } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/actions';
import { _storageName } from './const/const';
import './App.scss';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(_storageName));

		if (data && data.token) {
			dispatch(login(data.token, data.userId));
		}
	}, [login]);

	// @ts-ignore
	const isAuthenicated = !!useSelector((state) => state.auth.token);
	const routes = useRoutes(isAuthenicated);

	return (
		<ToastProvider>
			<div className="App">{routes}</div>
			<MessageContainer />
		</ToastProvider>
	);
};

export default App;
