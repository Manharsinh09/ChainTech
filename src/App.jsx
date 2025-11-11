import { createBrowserRouter, RouterProvider } from "react-router";

import './App.css'

import { Home } from "./components/Home"
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { UMS } from "./components/UMS";
import { Update } from "./components/Update";
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
        {
          path:"update",
          element:<Update/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>

}

export default App
