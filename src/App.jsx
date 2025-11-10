import { createBrowserRouter, RouterProvider } from "react-router";

import './App.css'

import { Home } from './components/home'
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { UMS } from "./components/UMS";

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<UMS/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"login",
          element:<Login/>,
        },
        {
          path:"signup",
          element:<Signup/>
        },
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>

}

export default App
