import React from "react"
import Logo from "assets/react.svg"
import { StyledFooter } from "./style"
const Footer = () => {
  return (
    <StyledFooter>
      <p className="flex-center gap-5">
        Copyright &copy; {new Date().getFullYear()}
        <img src={Logo} alt="logo" />
        All Rights Reserved.
      </p>
    </StyledFooter>
  )
}

export default Footer
