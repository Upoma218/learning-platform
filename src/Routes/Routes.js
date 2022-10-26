import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Course from "../Pages/Courses/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Other/ErrorPage/ErrorPage";
import Category from "../Pages/Shared/Category/Category";

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
                element: <Category></Category>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: 'course',
                element: <Course></Course>
            }
        ]
        
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])