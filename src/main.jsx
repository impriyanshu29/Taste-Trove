import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home/Home'
import Layout from './Layout'
import Receipe from './Components/Receipe/Receipe'
import Favourite from './Components/Favourite/Favourite'  
import About from "./Components/About/About"
import Receipe_Item from "./Components/Receipe/Receipe_Item"
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SearchContextProvider from './Context/SearchContextProvider'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = '/about' element={<About/>}/>
      
      <Route path = '/receipe' element={<Receipe/>}/>
      <Route path = '/receipe-item/:id' element={<Receipe_Item/>}/>
      <Route path = '/favourite' element={<Favourite/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchContextProvider>
    <RouterProvider router = {router}/>
    </SearchContextProvider>
    
  </React.StrictMode>,
)
