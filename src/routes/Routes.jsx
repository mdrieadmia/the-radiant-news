import {createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

    const Router = createBrowserRouter([
        {
            path: '/',
            element : <Root></Root>,
            children : [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                }
            ]
            
        }
    ])

export default Router;

