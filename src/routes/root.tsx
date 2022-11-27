import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Signin from "../pages/auth/signin";
import ErrorPage from '../routes/error-page'

export default createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/signin',
        element: <Signin/>,
        errorElement: <ErrorPage/>
    }
])