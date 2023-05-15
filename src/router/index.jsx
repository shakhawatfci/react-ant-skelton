import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Session from "../pages/Session";

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
        path: '/session',
        element: <Session />,
        permission: ['View Category', 'Create Category', 'Edit Category']
    }

];