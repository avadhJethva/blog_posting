import { lazy } from "react"

const Login = lazy(() => import("views/Login"))
const Signup = lazy(() => import("views/SignUp"))
const Dashboard = lazy(() => import("views/Dashboard"))
const Profile = lazy(() => import("views/Profile"))
const Blog = lazy(() => import("views/Blog"))

export const privateRoutes = [
  {
    title: "dashboard",
    path: "/dashboard",
    element: Dashboard,
  },
  {
    title: "profile",
    path: "/profile",
    element: Profile,
  },
  {
    title: "blog",
    path: "/blog",
    element: Blog,
  },
]
export const publicRoutes = [
  {
    title: "sign up",
    path: "/",
    element: Signup,
  },
  {
    title: "login",
    path: "/login",
    element: Login,
  },
]
