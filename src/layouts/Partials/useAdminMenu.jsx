import React from "react";
import { Link } from "react-router-dom";
import { DashboardOutlined, SettingOutlined, ShoppingCartOutlined, UserSwitchOutlined } from "@ant-design/icons";
// import { useTranslation } from "react-i18next";

export const ERootNavKey = {
    Dashboard: 'dashboard',
    SettingsManage: 'Settings',
    OrderManage: 'Order Manage',
    Users: 'Users'
}
const useAdminMenu = () => {

    // const { t } = useTranslation();

    return {
        menus: [
            {
                label: <Link to="/admin/dashboard"> Dashboard</Link>,
                key: 'dashboard',
                icon: <DashboardOutlined />
            },
            {
                label: ERootNavKey.Users,
                key: ERootNavKey.Users,
                icon: <UserSwitchOutlined />,
                children: [
                    {
                        label: <Link to="/admin/user" state={{ rootMenu: ERootNavKey.Users }}> Role Permission</Link>,
                        key: 'user-list'
                    },
                    {
                        label: <Link to="/admin/user/users" state={{ rootMenu: ERootNavKey.Users }}> Users </Link>,
                        key: 'user-list'
                    }
                ],
            },
        ],
        rootMenus: ERootNavKey
    }
};

export default useAdminMenu;