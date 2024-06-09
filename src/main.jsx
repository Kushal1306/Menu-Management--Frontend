import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import Categories from './components/Categories.jsx';
import Subcategories from './components/Subcategories.jsx';
import Items from './components/Items.jsx';
import { DataContext } from './Contexts/DataContext.jsx';
import DataProvider from './Contexts/DataContext.jsx';
import Options from './components/Options.jsx';


const router=createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='/' element={<Options/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='subcategories' element={<Subcategories/>}/>
      <Route path='items' element={<Items/>}/>
    </Route>
   )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <RouterProvider router={router}/>
    </DataProvider>
  </React.StrictMode>,
)
