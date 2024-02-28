import Button from "component/button/Button"
import Input from "component/input/Input"
import { ErrorMessage, Form, Formik } from "formik"
import { Card, Container, FormError, H2 } from "../globalStyle"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setLoggedInUser } from "store/actions/auth"
import * as yup from "yup"
import { toast } from "react-toastify"

const schema = yup.object().shape({
  Email: yup.string().email().required("Email is Required Field"),
  password: yup.string().required("Password is Required Field"),
})
const Login = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.AuthReducer.users)
  const navigate = useNavigate()

  const handleSubmit = ({ Email = "", password = "" }) => {
    if (users.length === 0) return toast("please register first")

    for (const user of users) {
      if (user.Email === Email && user.newPassword === password) {
        dispatch(setLoggedInUser(user))
        localStorage.setItem("current-user", JSON.stringify(user))
        navigate("/dashboard")
      } else {
        toast("user not exist")
      }
    }
  }
  return (
    <Container>
      <Card>
        <H2>Register Form</H2>
        <Formik
          initialValues={{
            Email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={schema}
          enableReinitialize
        >
          {({ values, setFieldValue, resetForm }) => {
            return (
              <Form className={`form`}>
                <Input
                  htmlFor="email"
                  label="Email"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setFieldValue("Email", e.target.value)}
                  value={values.Email}
                />
                <FormError>
                  <ErrorMessage name="Email" />
                </FormError>
                <Input
                  htmlFor="password"
                  label="Password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  value={values.password}
                />
                <FormError>
                  <ErrorMessage name="password" />
                </FormError>
                <Button type="submit">login</Button>
              </Form>
            )
          }}
        </Formik>
        <div className="switch-text-link mt-15">
          dont have an account? <Link to="/">register here</Link>
        </div>
      </Card>
    </Container>
  )
}

export default Login
