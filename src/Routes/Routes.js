import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import Course from "../Pages/Courses/Course";
import CourseDetail from "../Pages/Courses/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Other/ErrorPage/ErrorPage";
import CheckOut from "../Pages/Register/CheckOut";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => {
                    return fetch(`https://u-learning-online-bd-server.vercel.app/category/${params.id}`)
                    
                }
                
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: async() => {
                    return fetch(`https://u-learning-online-bd-server.vercel.app/courses`)
                }
            },
            {
                path: '/details/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({params}) => {
                    return fetch(`https://u-learning-online-bd-server.vercel.app/courses/${params.id}`)
                    
                }
            },
            
            {
                path: '/course',
                element: <Course></Course>,
               

            },
           
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
            
        ]
        
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])