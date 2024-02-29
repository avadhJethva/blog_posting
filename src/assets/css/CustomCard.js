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

  img {
    width: 100px;
    aspect-ratio: 1;
    object-fit: contain;
    border-radius: 10px;
  }
`
const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #fff;

  .card__header {
    img {
      max-height: 250px;
    }
  }

  .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tag {
    align-self: flex-start;
    padding: 0.25em 0.75em;
    border-radius: 1em;
    font-size: 0.75rem;
    background: ${(props) => props.theme.themeColor};
    color: #fff;
  }

  .tag + .tag {
    margin-left: 0.5em;
  }

  .card__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .card__footer {
    display: flex;
    padding: 1rem;
    margin-top: auto;
  }

  .user {
    display: flex;
    gap: 0.5rem;
  }

  .user__image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 2px solid #007bff;
  }

  .user__info > small {
    color: #666;
  }
`

export { CardContainer, UserCard, Figure, BlogCard }
