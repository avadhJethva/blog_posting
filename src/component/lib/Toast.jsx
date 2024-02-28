import { ToastContainer, cssTransition } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Toast = ({ ...props }) => {
  return (
    <ToastContainer
      // transition={bounce}
      position="top-center"
      closeButton={false}
      newestOnTop
      rtl={false}
      draggable
      theme="light"
      autoClose={1500}
      {...props}
    />
  )
}

export default Toast
