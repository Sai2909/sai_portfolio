import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Github from './components/Github/Github'
import CodeLayout from './coding/CodeLayout'
import TaskBoard from './coding/TaskBoard/TaskBoard'
import Dropdown from './coding/Dropdown/Dropdown'
import Loadmore from './coding/Loadmore/Loadmore'
import ModelPopup from './coding/ModelPopup/ModelPopup'
import ErrorPage from './ErrorBoundary'

// import Github, {githubInfoLoader} from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement= {<ErrorPage/>}>
      <Route path='' element={<Home />} errorElement= {<ErrorPage/>}/>
      <Route path='about' element={<About />} errorElement= {<ErrorPage/>}/>
      <Route path='user/' element={<User />} errorElement= {<ErrorPage/>}>
        <Route path=':userid' element={<User />}  errorElement= {<ErrorPage/>}/>
      </Route>
      <Route path='coding' element={<CodeLayout/>} errorElement= {<ErrorPage/>}>
      <Route path='' element={<Dropdown />} errorElement= {<ErrorPage/>}/>
      <Route path='taskboard' element={<TaskBoard />} errorElement= {<ErrorPage/>}/>
      <Route path='model' element={<ModelPopup />} errorElement= {<ErrorPage/>}/>
      <Route path='loadmore' element={<Loadmore />} errorElement= {<ErrorPage/>}/>
      </Route>
      <Route path='github' element={<Github />}errorElement= {<ErrorPage/>} />
      <Route path='*' element={<div>Not Found</div>} errorElement= {<ErrorPage/>}/>
    </Route>
  ), {
    basename: '/sai_portfolio',
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Layout from './Layout';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import User from './components/User/User';
// import Github from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'user',
//         element: <User />,
//         children: [
//           {
//             path: ':userid',
//             element: <User />,
//           },
//         ],
//       },
//       {
//         path: 'github',
//         element: <Github />,
//       },
//       {
//         path: '*',
//         element: <div>Not Found</div>,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );
