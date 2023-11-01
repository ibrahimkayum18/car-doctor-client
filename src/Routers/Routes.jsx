import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Service from "../Pages/Service/Service";
import Booking from "../Pages/Booking/Booking";
import Booked from "../Pages/Booked/Booked";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/details/:id',
                element:<Service></Service>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/bookings/:id',
                element:<Booking></Booking>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/booking',
                element:<Booked></Booked>,
                loader: () => fetch(`http://localhost:5000/booking`)
            }
        ]
    }
])

export default Routes;