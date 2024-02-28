import notfound from "assets/notfound.webp"
import { StyledNotFound } from "../globalStyle"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <StyledNotFound>
      <img src={notfound} alt="not found" />
      <Link to={"/"}>back to home </Link>
    </StyledNotFound>
  )
}

export default NotFound
