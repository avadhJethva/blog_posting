import Button from "component/button/Button"
import React, { Fragment } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Logout } from "utils"
import { MenuBtn, Navbar } from "./style"

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    Logout()
    navigate("/")
  }
  return (
    <Fragment>
      <Navbar>
        <NavLink to="/" className="logo">
          Blog Factory
        </NavLink>
        <ul className="menu-items">
          <li>
            <NavLink to="/dashboard" className="menu-item">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="menu-item">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="menu-item">
              blog
            </NavLink>
          </li>
        </ul>

        <div className="flex-center gap-5">
          <MenuBtn>
            <div className="menu-btn__lines" />
          </MenuBtn>
          <Button onClick={handleLogout}>logout </Button>
        </div>
      </Navbar>
    </Fragment>
  )
}

export default Header
