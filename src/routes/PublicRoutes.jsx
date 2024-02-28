import Loader from "component/loader/Loader"
import AuthLayout from "layouts/AuthLayout"
import { Suspense } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { isLoggedIn } from "utils"

const PublicRoutes = () => {
  return !isLoggedIn() ? (
    <AuthLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  ) : (
    <Navigate to="/dashboard" />
  )
}

export default PublicRoutes
