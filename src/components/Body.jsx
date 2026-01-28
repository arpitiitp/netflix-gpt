import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {useDispatch} from "react-redux";

const Body = () => {
  const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Login></Login>
  },
  {
    path:"/browser",
    element:<Browse></Browse>
  },
 ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider> 
    </div>
  )
}

export default Body
