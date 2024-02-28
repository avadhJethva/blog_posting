import Footer from "component/Footer/Footer"
import Header from "component/header/Header"
import { Fragment } from "react"

const DashboardLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default DashboardLayout
