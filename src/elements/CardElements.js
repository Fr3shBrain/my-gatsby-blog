import styled from "styled-components"
import { Link } from "gatsby"

export const CardContainer = styled.div``

export const CardWrapper = styled.div`
  margin: 50px auto 50px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  overflow: hidden;
  width: 700px;
  height: 250px;
  top: 25%;
  transform: translate(-50% -50%);

  & h6 {
    opacity: 0.6;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  & h2 {
    letter-spacing: 1px;
    margin: 10px 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: 650px;
  }
`

export const CardPreview = styled.div`
  background: #d5e0db;
  color: #fff;
  padding: 30px;
  width: 250px;
  position: relative;

  & a {
    color: #fff;
    font-size: 12px;
    opacity: 0.6;
    margin-top: 30px;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    h2 {
      margin: 10px 0 0;
    }
    a {
      margin-top: 10px;
    }
  }
`

export const CardLink = styled(Link)``

export const CardInfo = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 768px) {
    h2 {
      margin-top: 20px;
    }
    p {
      margin-bottom: 50px;
    }
  }
`

export const ButtonWrapper = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 5px;
`

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4b59f7" : "#0467fb")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467fb" : "#4b59f7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
