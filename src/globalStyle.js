import styled, { createGlobalStyle } from "styled-components"

export const Theme = {
  themeColor: "#007BFF",
  themeScondary: "#474fe6",
  black: "#1a1a1a",
  white: "#ffffff",
  red: "#e80d10",
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const H2 = styled.h2`
  color: #007bff;
  margin-bottom: 20px;
`
const H1 = styled.h1`
  color: #007bff;
  font-size: 25px;
  margin-bottom: 20px;

  span {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 300;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Column50 = styled.div`
  width: 100%;
`
const FormError = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`
const CategoryFilter = styled.div`
  position: relative;
  display: inline-block;
`

const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px 20px 8px 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border-color: rgba(81, 203, 238, 1);
  }
`

const ArrowIcon = styled.div`
  content: '\25BC';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  color: #555;
`

const Option = styled.option`
  background-color: #fff;
  color: #333;
`

export {
  Container,
  Card,
  H2,
  H1,
  FormError,
  Row,
  Column50,
  StyledNotFound,
  Select,
  ArrowIcon,
  CategoryFilter,
  Option,
}

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: Open-Sans;
  }
  html,
  body,
  #root{
    height: 100%;
    width: 100%;
  }
  main{    
    min-height: 100vh;
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
  .success{

    background : green;
  }
  .w-auto{
  width: auto;
  } 
  .danger{
    background : #e80d10;
  }
  a{
    text-decoration: none;
  }
`
export default GlobalStyle
