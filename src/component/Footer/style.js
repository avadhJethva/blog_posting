import styled from "styled-components"

const desktop = "1024px"

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
align-items: center;
    height: 65px;
    padding: 0 60px;
    background: ${(props) => props.theme.white};
    box-shadow: 0 -20px 50px 0 rgb(0 0 0 / 5%);
    @media (max-width: (${desktop} - 1px)) {
      padding: 10px 20px;
 
`
export { StyledFooter }
