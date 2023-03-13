import React from "react";
import { ButtonStyled } from "./randomizeButton.styles";

const RandomizeButton = ({ handleClick }) => {
  return (
    <div>
      <ButtonStyled onClick={handleClick}>Randomize Order</ButtonStyled>
    </div>
  );
};

export default RandomizeButton;
