import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import JobDetails from './pages/Home/JobDetails/JobDetails';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs';
import Statistics from './pages/Statistics/Statistics';
import Blogs from './pages/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/jobDetails",
        element:<JobDetails/>
      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs/>
      },
      {
        path:"/statistics",
        element: <Statistics/>
      },
      {
        path:"/blogs",
        element: <Blogs/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
