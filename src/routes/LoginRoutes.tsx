import { lazy } from "react";
import Loadable from "../components/Loadable";
import path from "path";
import UseAvatar from "../pages/UserProfile";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";
import MainLayout from "../layout/Main-layout";

import MainCard from "../components/MainCard";
import ApplicationPage from "../pages/ApplicationPage";
import AuthDivider from "../components/AuthDivider";
import AuthWrapper from "../components/AuthWrapper";
import AuthCard from "../components/AuthCard";
import AuthBackground from "../assests/Images/AuthBackground";
import AuthSocButton from "../components/AuthSocButton";
// import Icon from "../pages/Icon";
// import Email from "../pages/Email";


const AuthLogin = Loadable(lazy(() => import('../pages/Login')));


const LoginRoutes = {
    path: '/',
    // element: <MainLayout/>,
    children: [
        {
            path: 'login',
            element: <AuthLogin/>
        },
        {
            path: 'account',
            element: <UseAvatar/>
        },
        {
            path: 'dashboard',
            element: <Dashboard/>
        },
        {
            path: 'application',
            element: <ApplicationPage/>
        },
        {
            path: 'maincard',
            element: <MainCard/>
        },
        // {
        //     path: 'icon',
        //     element: <Icon/>
        // },
        {
            path: 'divider',
            element: <AuthCard/>
        }
    ]
}

export default LoginRoutes