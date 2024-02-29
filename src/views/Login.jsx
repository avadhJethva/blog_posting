import Button from "component/button/Button"
import Input from "component/input/Input"
import { ErrorMessage, Form, Formik } from "formik"
import { Card, Container, FormError, H2 } from "../globalStyle"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setLoggedInUser } from "store/actions/auth"
import * as yup from "yup"
import { toast } from "react-toastify"
import { ApiPost } from "api"
import Loader from "component/loader/Loader"

const schema = yup.object().shape({
  Email: yup.string().email().required("Email is Required Field"),
  password: yup.string().required("Password is Required Field"),
})
const Login = () => {
  const [loader, setLoader] = useState(false)
  const dispatch = useDispatch()
  const users = useSelector((state) => state.AuthReducer.users)
  const navigate = useNavigate()

  const handleSubmit = ({ Email = "", password = "" }) => {
    setLoader(true)
    ApiPost("/login", { password: password, email: Email })
      .then((res) => {
        dispatch(setLoggedInUser(res.data.data))
        localStorage.setItem("current-user", JSON.stringify(res.data.data))
        localStorage.setItem("Token", res.data.data.token)
        toast(res.data.message)
        navigate("/dashboard")
      })
      .catch((error) => toast("error occur"))
      .finally(() => setLoader(false))
  }
  if (loader) return <Loader />
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
