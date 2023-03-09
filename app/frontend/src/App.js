import './App.css';

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
<<<<<<< HEAD
<<<<<<< Updated upstream
import { Project } from './pages/Project'
=======
import { Project } from './pages/Project';
import { Ranking } from './pages/Ranking';
import { Login } from './pages/Login'

>>>>>>> Stashed changes
=======
import { Project } from './pages/Project';
import { Login } from './pages/Login';
import { Notification } from './pages/Notification'
import { Createproject } from './pages/Createproject'
import { Ranking } from './pages/Ranking';

>>>>>>> main

export default function App(props) {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/project' element={<Project />} />
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/login' element={<Login />} />
>>>>>>> Stashed changes
=======
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/createproject' element={<Createproject />} />
>>>>>>> main
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
