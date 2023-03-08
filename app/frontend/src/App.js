import './App.css';

import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Project } from './pages/Project';
import { Login } from './pages/Login'


export default function App(props) {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Index />} />
				<Route path="/home" element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/project' element={<Project />} />
				<Route path='/login' element={<Login />} />
			</Route>
		)
	);

	return (
		<RouterProvider router={router} />
	);
}

const Root = () => {
	return (
		<div>
			<Outlet />
		</div>
	)
}