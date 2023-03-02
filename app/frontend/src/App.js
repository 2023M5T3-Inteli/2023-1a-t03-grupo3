import './App.css';

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Project } from './pages/Project';
import { Ranking } from './pages/Ranking';

export default function App(props) {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/project' element={<Project />} />
        <Route path='/ranking' element={<Ranking />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

const Root = () => {
  return (
    <>
      {/* <div className='flex flex-row w-full p-4 justify-between'>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/project">Project</Link>
      </div> */}

      <div>
        <Outlet />
      </div>
    </>
  )
}