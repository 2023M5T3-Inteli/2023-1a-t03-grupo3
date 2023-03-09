import './App.css';

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Project } from './pages/Project';
<<<<<<< HEAD
import { Ranking } from './pages/Ranking';
import { Login } from './pages/Login'
=======
import { Login } from './pages/Login';
import { Notification } from './pages/Notification'
import { Createproject } from './pages/Createproject'
import { Ranking } from './pages/Ranking';
>>>>>>> 1127f6f90a50f5cd942a3113655dcd00de9a9558


export default function App(props) {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/project' element={<Project />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/login' element={<Login />} />
<<<<<<< HEAD
=======
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/createproject' element={<Createproject />} />
>>>>>>> 1127f6f90a50f5cd942a3113655dcd00de9a9558
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
