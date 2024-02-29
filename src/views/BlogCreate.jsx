import Button from "component/button/Button"
import React from "react"
import styled from "styled-components"

const FullPageFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`

const FormWrapper = styled.form`
  width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
`

const FormFileInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
`

const BlogCreate = () => {
  return (
    <FullPageFormContainer>
      <FormWrapper>
        <FormLabel htmlFor="title">Title:</FormLabel>
        <FormInput type="text" name="title" id="title" required />

        <FormLabel htmlFor="description">Description:</FormLabel>
        <FormTextarea
          name="description"
          id="description"
          required
        ></FormTextarea>

        <FormLabel htmlFor="category1">Category 1:</FormLabel>
        <FormInput
          type="text"
          name="category_id[]"
          id="category1"
          value="3"
          required
        />

        <FormLabel htmlFor="category2">Category 2:</FormLabel>
        <FormInput
          type="text"
          name="category_id[]"
          id="category2"
          value="2"
          required
        />

        <FormLabel htmlFor="attachment">Attachment:</FormLabel>
        <FormFileInput type="file" name="attachment" id="attachment" required />

        <Button type="submit">Submit</Button>
      </FormWrapper>
    </FullPageFormContainer>
  )
}

export default BlogCreate
