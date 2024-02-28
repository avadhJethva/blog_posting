import React from "react"
import { StyledButton } from "./style"
const Button = ({ children, className = "", type = "button", ...rest }) => {
  return (
    <StyledButton className={className} type={type} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
