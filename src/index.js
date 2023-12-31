import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import Body from './Comp/Body';
import About from './Comp/About';
import Product from './Comp/Product';
import Cartpage from './Comp/CartPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
  },
  
{
  path:"/cart",
  element:<Cartpage/>
},
  {
    path:"/product/:pId",
    element:<Product/>
}
  
  ]
  }
])


root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
