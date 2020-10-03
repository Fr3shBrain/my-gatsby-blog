import React from "react"
import {
  CardWrapper,
  CardPreview,
  CardLink,
  CardInfo,
  ButtonWrapper,
  Button
} from "../elements/CardElements"

const CardItem = ({ title, date, slug }) => {
  return (
    <CardWrapper>
      <CardPreview>
        <h6>{title}</h6>
        <h6>Web Development</h6>
      </CardPreview>
      <CardInfo>
        {/* <h6>{date}</h6> */}
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          blanditiis. Libero sequi explicabo quam nihil sit blanditiis saepe
          eligendi iure.
        </p>
        <ButtonWrapper to={slug}>
          <Button>Read More...</Button>
        </ButtonWrapper>
      </CardInfo>
    </CardWrapper>
  )
}

export default CardItem
