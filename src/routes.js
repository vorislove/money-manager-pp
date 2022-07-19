import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import BudgetTab from './pages/budget/budget-tab';
import CategorieTab from './pages/cetegories/categorie-tab';
import HistoryTab from './pages/history/histrory-tab';
import ProfileTab from './pages/profile/profile-tab';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Dashboard from './pages/dashboard/Dashboard';

export const useRoutes = (isAuthenticated) => {
	if (isAuthenticated) {
		return (
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<CategorieTab />} />
					<Route path="history" element={<HistoryTab />} />
					<Route path="budget" element={<BudgetTab />} />
					<Route path="profile" element={<ProfileTab />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path="/auth" element={<Auth />}>
				<Route index element={<SignIn />} />
				<Route path="sign-up" element={<SignUp />} />
			</Route>
			<Route path="*" element={<Navigate to="/auth" />} />
		</Routes>
	);
};
