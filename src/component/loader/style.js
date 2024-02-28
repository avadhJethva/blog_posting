import styled, { keyframes } from "styled-components"

const loaderAnimation = keyframes`
  0% {
    box-shadow: 0 2em 0 -0.2em currentcolor;
  }
  100% {
    box-shadow: 0 1em 0 -0.2em currentcolor;
  }
`
const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 30px;
  padding: 1em;
  position: relative;
  margin-bottom: 0.25em;
  vertical-align: top;
  transition: 0.3s color, 0.3s border, 0.3s transform, 0.3s opacity;

  [class*="loader-"] {
    font-size: 70px;
    line-height: 200px;
  }
`
const Loading = styled.div` 
    display: inline-block;
    width: 1em;
    height: 1em;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
    border-radius: 50%;
    box-shadow: 0 1em 0 -0.2em currentcolor;
    position: relative;
    animation: ${loaderAnimation} 0.8s ease-in-out alternate infinite;
    animation-delay: 0.32s;
    top: -1em;
    &:after,
    &:before {
      content: "";
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      box-shadow: inherit;
      animation: inherit;
    }
    &:before {
      left: -1em;
      animation-delay: 0.48s;
    }
    &:after {
      right: -1em;
      animation-delay: 0.16s;
    }
  }
  `

export { LoaderBox, Loading }
