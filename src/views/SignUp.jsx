import Button from "component/button/Button"
import Input from "component/input/Input"
import { ErrorMessage, Form, Formik } from "formik"
import { Card, Container, FormError, H2 } from "../globalStyle"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { toast } from "react-toastify"
import { setUser } from "store/actions/auth"
import { useDispatch, useSelector } from "react-redux"
import { ExistUser } from "utils"

const schema = yup.object().shape({
  firstName: yup.string().min(3).required("first name is Required Field"),
  lastName: yup.string().min(3).required("last name is Required Field"),
  city: yup.string().required("city is Required Field"),
  phone: yup.number().required("phone is Required Field"),
  Email: yup.string().email().required("Email is Required Field"),
  newPassword: yup.string().required("newPassword is Required Field"),
})

const SignUp = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.AuthReducer.users)
  const navigate = useNavigate("/")
  const handleSubmit = (value) => {
    if (ExistUser(users, value)) return toast("user already exist")
    try {
      localStorage.setItem("users", JSON.stringify([value, ...users]))
      dispatch(setUser(value))
      toast("user created successfully")
      navigate("/")
    } catch (error) {
      toast("error occurred")
    }
  }
  return (
    <Container>
      <Card>
        <H2>Register Form</H2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            city: "",
            phone: "",
            Email: "",
            newPassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={schema}
          enableReinitialize
        >
          {({ values, setFieldValue, resetForm }) => {
            return (
              <Form className={`form`}>
                <Input
                  htmlFor="firstName"
                  label="First Name"
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  onChange={(e) => setFieldValue("firstName", e.target.value)}
                  value={values.firstName}
                />
                <FormError>
                  <ErrorMessage name="firstName" />
                </FormError>
                <Input
                  htmlFor="lastName"
                  label="last name"
                  type="text"
                  id="lastName"
                  placeholder="Enter your first name"
                  onChange={(e) => setFieldValue("lastName", e.target.value)}
                  value={values.lastName}
                />
                <FormError>
                  <ErrorMessage name="lastName" />
                </FormError>
                <Input
                  htmlFor="city"
                  label="city"
                  type="text"
                  id="city"
                  placeholder="Enter your first name"
                  onChange={(e) => setFieldValue("city", e.target.value)}
                  value={values.city}
                />
                <FormError>
                  <ErrorMessage name="city" />
                </FormError>
                <Input
                  htmlFor="phone"
                  label="phone"
                  type="number"
                  id="phone"
                  placeholder="Enter your first name"
                  onChange={(e) => setFieldValue("phone", e.target.value)}
                  value={values.phone}
                />
                <FormError>
                  <ErrorMessage name="phone" />
                </FormError>
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
                  htmlFor="new-password"
                  label="New Password"
                  type="password"
                  id="new-password"
                  placeholder="Enter your new password"
                  onChange={(e) => setFieldValue("newPassword", e.target.value)}
                  value={values.newPassword}
                />
                <FormError>
                  <ErrorMessage name="newPassword" />
                </FormError>
                <Button type="submit">Register</Button>
              </Form>
            )
          }}
        </Formik>
        <div className="switch-text-link mt-15">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </Card>
    </Container>
  )
}

export default SignUp
