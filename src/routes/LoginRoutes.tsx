// First, import everything at the top
import { lazy } from "react";
import Loadable from "../components/Loadable";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout"; 
import MainCard from "../components/MainCard"; 
import HomePage from "../pages/HomePage";

// Lazy-loaded components (Keep all imports at the top)
const AuthLogin = Loadable(lazy(() => import("../pages/Login")));
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));
const UseAvatar = Loadable(lazy(() => import("../pages/UserProfile")));
const ApplicationPage = Loadable(lazy(() => import("../pages/ApplicationPage")));


// Route Configuration
const LoginRoutes = [
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  // Public Route (No Sidebar)
  {
    path: "login",
    element: <AuthLogin />,
  },

  {
    path: '/',
    children: [
        {
            path: "/",
            element: <Layout />,  // This applies the layout with sidebar to these routes
            children: [
              { path: "dashboard", element: <Dashboard /> },
              { path: "account", element: <UseAvatar /> },
              { path: "application", element: <ApplicationPage /> },
              {path:'maincard',element: <MainCard/>},
              {path:'home',element: <HomePage/>},
              
            ],
          },
    ]
  }
];

export default LoginRoutes;
