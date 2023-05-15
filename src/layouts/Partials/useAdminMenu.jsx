import React from "react";
import { Link } from "react-router-dom";
import { DashboardOutlined, SettingOutlined, ShoppingCartOutlined, UserSwitchOutlined } from "@ant-design/icons";
// import { useTranslation } from "react-i18next";

export const ERootNavKey = {
    Dashboard: 'dashboard',
    SettingsManage: 'Settings',
    OrderManage: 'Order Manage',
    Users: 'Session'
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
                        label: <Link to="/session" state={{ rootMenu: ERootNavKey.Users }}> Session List</Link>,
                        key: 'session-list'
                    }
                ],
            },
        ],
        rootMenus: ERootNavKey
    }
};

export default useAdminMenu;