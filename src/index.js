import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,Routes, Route,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Landing from './pages/landing/landing';
import SearchBus from './pages/search-bus/searchBus';
import SearchResult from './pages/search-result/searchResult';
import Login from './pages/login/login';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'',
      element:<Landing/>
    },
    {
      path:'search',
      element:<SearchBus/>
    },
    {
      path:'search-result',
      element:<SearchResult/>
    },
    {
      path:'login',
      element:<Login/>
    }
  ]
}])
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
