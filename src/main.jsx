// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './Layout'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import User from './components/User/User'
// import Github from './components/Github/Github'

// // import Github, {githubInfoLoader} from './components/Github/Github.jsx'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}/>
//       <Route path='about' element={<About />} />
//       <Route path='user/' element={<User />} >
//         <Route path=':userid' element={<User />} />
//       </Route>
//       <Route 
//       path='github' 
//       element={<Github />} />
//       <Route path='*' element={<div>Not Found</div>} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import User from './components/User/User';
import Github from './components/Github/Github';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'user',
        element: <User />,
        children: [
          {
            path: ':userid',
            element: <User />,
          },
        ],
      },
      {
        path: 'github',
        element: <Github />,
      },
      {
        path: '*',
        element: <div>Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
