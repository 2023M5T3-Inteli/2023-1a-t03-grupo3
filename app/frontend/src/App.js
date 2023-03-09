import './App.css';

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Project } from './pages/Project';
import { Login } from './pages/Login'
import { Notification } from './pages/Notification'
import { Createproject } from './pages/Createproject'
import { Ranking } from './pages/Ranking';


export default function App(props) {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/project' element={<Project />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/createproject' element={<Createproject />} />
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
