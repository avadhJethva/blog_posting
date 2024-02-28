import styled from "styled-components"

const StyledModal = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.width ? props.width : "")};
  min-width: 20rem;
  padding: 2rem;
  border: 0;
  border-radius: 0.5rem;
  position: relative;
  border-radius: 1rem;
  position: fixed;
  box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
  border: 1px solid #ccc;

  &::backdrop {
    background: hsl(0 0% 0% / 50%);
  }
`
const ModalCloseBtn = styled.button`
  font-size: 15px;
  padding: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: 0.25em;
  right: 0.25em;
`
export { ModalCloseBtn, StyledModal }
