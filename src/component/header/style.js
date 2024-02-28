import styled from "styled-components"

const white = "#fff"
const black = "#000"

const desktop = "1024px"

const MenuBtn = styled.div`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  z-index: 2;

  @media (max-width: ${desktop}) {
    display: flex;
  }

  .menu-btn__lines,
  .menu-btn__lines::before,
  .menu-btn__lines::after {
    width: 1.5rem;
    height: 0.1rem;
    background: ${(props) => props.theme.themeColor};
    transition: all 0.4s ease-in-out;
  }

  .menu-btn__lines {
    &::before,
    &::after {
      content: "";
      position: absolute;
    }

    &::before {
      transform: translateY(-0.5rem);
    }

    &::after {
      transform: translateY(0.5rem);
    }
  }

  &.open {
    .menu-btn__lines {
      transform: translateX(1rem);
      background: transparent;

      &::before {
        transform: rotate(45deg) translate(-0.5rem, 0.5rem);
      }

      &::after {
        transform: rotate(-45deg) translate(-0.5rem, -0.5rem);
      }
    }
  }
`

const Navbar = styled.header`
  position: sticky;
  top: 0;
  z-index: 111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0 60px;
  background: ${white};
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.05);

  @media (max-width: ${desktop}) {
    padding: 10px 20px;
  }

  &.sticky {
    position: sticky;
    z-index: 999;
    top: 0;
  }

  .logo {
    color: ${(props) => props.theme.themeColor};
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
  }

  .menu-items {
    display: flex;
    align-items: center;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      background-color: #222;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #222;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      background-color: ${white};
    }

    @media (max-width: ${desktop}) {
      scrollbar-gutter: stable;
      position: fixed;
      top: 65px;
      left: 0;
      display: block;
      width: 350px;
      height: 100%;
      padding-top: 30px;
      padding-bottom: 100px;
      padding-right: 10px;
      background: ${white};
      overflow-y: auto;
      transform: translateX(-100vh);
      transition: 0.3s ease-out;

      &.open {
        transform: translateY(0);
      }
    }

    > li {
      > .menu-item {
        padding: 1.5rem 1rem;

        @media (max-width: ${desktop}) {
          padding: 1rem 1rem;
        }
      }
    }

    li {
      &:hover {
        .mega-menu {
          opacity: 1;
          visibility: visible;
        }
      }

      a {
        @media (max-width: ${desktop}) {
          padding: 10px 1rem;
        }
      }
    }
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 14px;
    transition: 0.25s;

    &:hover {
      color: ${(props) => props.theme.themeColor};
    }
  }

  ul {
    li {
      list-style: none;
      transition: 0.3s ease;

      .arrow {
        transition: all 0.3s ease-out;
      }

      a {
        position: relative;
        text-decoration: none;
        color: ${black};

        &.active {
          color: ${(props) => props.theme.themeColor};
        }
      }
    }
  }
`

const Overflow = styled.div`
  @media (max-width: ${desktop}) {
    overflow: hidden;
  }
`

export { MenuBtn, Navbar, Overflow }
