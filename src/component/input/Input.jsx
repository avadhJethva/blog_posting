import { StyledInput } from "./style"

const Input = ({
  htmlFor,
  label,
  type = "text",
  placeholder = "Enter your full name",
  ...props
}) => {
  return (
    <StyledInput>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} placeholder={placeholder} {...props} />
    </StyledInput>
  )
}

export default Input
