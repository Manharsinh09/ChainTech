import { createBrowserRouter } from "react-router";
import { UMS } from "../layouts/UMS";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Update } from "../pages/Update";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UMS />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "update",
                element: <Update />
            }
        ]
    }
])
