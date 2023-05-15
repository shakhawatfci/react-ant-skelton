import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";

export const routers = [

    // {
    //     path: '/',
    //     element: <Dashboard />,
    //     permission: false,
    // },

    {
        path: '/dashboard',
        element: <Dashboard />,
        permission: false,
    },
    {
        path: '/category',
        element: <Category />,
        permission: ['View Category', 'Create Category', 'Edit Category']
    }

];