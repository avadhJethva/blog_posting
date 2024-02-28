import store from "store/Store"
import React, { Fragment, useState } from "react"
import styled from "styled-components"
import Button from "component/button/Button"
import { Column50, Container, FormError, Row } from "../globalStyle"
import Modal from "component/modal/Modal"
import { ErrorMessage, Form, Formik } from "formik"
import Input from "component/input/Input"
import * as yup from "yup"
import { setLoggedInUser, updateUsers } from "store/actions/auth"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`

const ProfileCard = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  min-width: 400px;
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`

const UserName = styled.h2`
  color: #333333;
  margin-bottom: 5px;
`

const Role = styled.p`
  text-align: left;
  color: #666666;
  margin-bottom: 20px;
`

const Bio = styled.p`
  text-align: left;
  color: #444444;
  line-height: 1.5;
`
const schema = yup.object().shape({
  firstName: yup.string().min(3).required("first name is Required Field"),
  lastName: yup.string().min(3).required("last name is Required Field"),
  city: yup.string().required("city is Required Field"),
  phone: yup.number().required("phone is Required Field"),
  password: yup.string().required("password is Required Field"),
})
const Profile = () => {
  const { users, currentUser } = store.getState().AuthReducer
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const handleOnclose = () => {
    setModal(false)
  }
  const openModal = () => {
    setModal(true)
  }

  const handleSubmit = (value) => {
    const data = [...users]
    const i = data.findIndex((arr) => arr.Email === value.Email)

    if (i !== -1) {
      data[i] = { ...data[i], ...value }
      localStorage.setItem("users", JSON.stringify(data))
      localStorage.setItem("current-user", JSON.stringify(data[i]))
      dispatch(updateUsers(data))
      dispatch(setLoggedInUser(data[i]))
      toast("user Updated successfully")
      handleOnclose()
    } else {
      toast("email isn't exist")
    }
  }
  return (
    <Fragment>
      <ProfileContainer>
        <ProfileCard>
          <Button className="absolute-btn rigth w-auto" onClick={openModal}>
            Edit Profile
          </Button>
          <Avatar
            src={"http://www.jboeijenga.nl/img/front.jpg"}
            alt="Profile Avatar"
          />
          <UserName>
            {currentUser.firstName} {currentUser.lastName}
          </UserName>
          <Role>Email : {currentUser.Email}</Role>
          <Role>City : {currentUser.city}</Role>
          <Bio>Phone: {currentUser.phone}</Bio>
        </ProfileCard>
      </ProfileContainer>

      <Modal width="600px" isOpen={modal} onClose={handleOnclose}>
        <h3>edit Profile</h3>
        <Formik
          initialValues={{
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            city: currentUser.city,
            phone: currentUser.phone,
            password: currentUser.newPassword,
            Email: currentUser.Email,
          }}
          onSubmit={handleSubmit}
          validationSchema={schema}
          enableReinitialize
        >
          {({ values, setFieldValue, resetForm }) => {
            return (
              <Form className={`form`}>
                <Row>
                  <Column50>
                    <Input
                      htmlFor="firstName"
                      label="First Name"
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      onChange={(e) =>
                        setFieldValue("firstName", e.target.value)
                      }
                      value={values.firstName}
                    />
                    <FormError>
                      <ErrorMessage name="firstName" />
                    </FormError>
                  </Column50>
                  <Column50>
                    <Input
                      htmlFor="lastName"
                      label="last name"
                      type="text"
                      id="lastName"
                      placeholder="Enter your first name"
                      onChange={(e) =>
                        setFieldValue("lastName", e.target.value)
                      }
                      value={values.lastName}
                    />
                    <FormError>
                      <ErrorMessage name="lastName" />
                    </FormError>
                  </Column50>
                </Row>
                <Row>
                  <Column50>
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
                  </Column50>
                  <Column50>
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
                  </Column50>
                </Row>
                <Row>
                  <Column50>
                    <Input
                      className="w-100"
                      htmlFor="email"
                      label="Email"
                      type="email"
                      defaultValue={values.Email}
                      disabled
                    />
                  </Column50>
                  <Column50>
                    <Input
                      htmlFor="password"
                      label="Password"
                      type="password"
                      id="password"
                      placeholder="Enter your new password"
                      onChange={(e) =>
                        setFieldValue("password", e.target.value)
                      }
                      value={values.password}
                    />
                    <FormError>
                      <ErrorMessage name="password" />
                    </FormError>
                  </Column50>
                </Row>
                <Button type="submit">Update </Button>
              </Form>
            )
          }}
        </Formik>
      </Modal>
    </Fragment>
  )
}

export default Profile
