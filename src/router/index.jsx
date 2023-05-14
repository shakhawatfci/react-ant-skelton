import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";

export const routers = [

    {
        path: '/admin',
        element: <Dashboard />,
        permission: false,
    },
    {
        path: '/admin/category',
        element: <Category />,
        permission: ['View Category', 'Create Category', 'Edit Category']
    }

];