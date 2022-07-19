// @ts-nocheck
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';
import PageName from '../../components/pages-name/pages-name';
import './Dashboard.scss';

export default function Dashboard() {
	return (
		<div>
			<PageName />
			<div className="tab">
				<Outlet />
			</div>
			<NavBar />
		</div>
	);
}
