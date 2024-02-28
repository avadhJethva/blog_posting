import Loader from "component/loader/Loader"
import DashboardLayout from "layouts/DashboardLayout"
import { Suspense } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { isLoggedIn } from "utils"

const PrivateRoutes = () => {
  return isLoggedIn() ? (
    <DashboardLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </DashboardLayout>
  ) : (
    <Navigate to="/" />
  )
}

export default PrivateRoutes
