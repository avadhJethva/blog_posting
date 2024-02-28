import styled from "styled-components"
const StyledButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.themeColor};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${(props) => props.theme.themeScondary};
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`

export { StyledButton }
