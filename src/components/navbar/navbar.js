// @ts-nocheck
import './navbar.css';
import NavBarBtn from './nav-bar-btn';
import { useSelector } from 'react-redux';
import React from 'react';

const NavBar = () => {
	const name = ['Категории', 'Операции', 'Бюджет', 'Профиль'];
	const icon = ['bi bi-bookmark', 'bi bi-clock', 'bi bi-piggy-bank', 'bi bi-person'];
	const link = ['', 'history', 'budget', 'profile'];
	const pageNameStore = useSelector((store) => store.page.pageName);

	const btnElements = name.map((item, i) => {
		return (
			<NavBarBtn
				key={i}
				name={item}
				icon={icon[i]}
				link={link[i]}
				active={pageNameStore === name[i] ? true : false}
			/>
		);
	});

	return <div className="navBar">{btnElements}</div>;
};

export default NavBar;
