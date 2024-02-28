import React, { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./data"
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"
import Loader from "component/loader/Loader"

const NotFound = lazy(() => import("views/NotFound"))

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, element: Element }, i) => {
          return (
            <Route key={i} element={<PublicRoutes />}>
              <Route path={path} element={<Element />} />
            </Route>
          )
        })}

        {privateRoutes.map(({ path, element: Element }, i) => {
          return (
            <Route key={i} element={<PrivateRoutes />}>
              <Route path={path} element={<Element />} />
            </Route>
          )
        })}

        <Route
          path={"/*"}
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
