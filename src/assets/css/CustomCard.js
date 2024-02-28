import styled, { css } from "styled-components"

const CardContainer = styled.div`
  padding-top: 100px;
  height: 270px;
  perspective: 1000;
`

const UserCard = styled.div`
  position: relative;
  transition: 0.6s;
  transform-style: preserve-3d;
`

const Figure = styled.figure`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.themeColor};
  backface-visibility: hidden;
  overflow: hidden;
  text-align: center;
  transition: 0.6s;
  transform-style: preserve-3d;
`

export { CardContainer, UserCard, Figure }
