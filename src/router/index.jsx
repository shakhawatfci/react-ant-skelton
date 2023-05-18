import Dashboard from "../pages/Dashboard";
import Role from "../pages/Acl/Role";
import User from "../pages/Acl/User";
import CreateUser from "../pages/Acl/User/create";

export const routers = [

    // {
    //     path: '/',
    //     element: <Dashboard />,
    //     permission: false,
    // },
    {
        path: '/admin/dashboard',
        element: <Dashboard />,
        permission: false,
    },
    {
        path: '/admin/roles',
        element: <Role />,
        permission: false,
    },
    {
        path: '/admin/users',
        element: <User />,
        permission: false,
    },
    {
        path: '/admin/user/create',
        element: <CreateUser />
    },

    // {
    //     path: '/category',
    //     element: <Category />,
    //     permission: ['View Category', 'Create Category', 'Edit Category']
    // }

];