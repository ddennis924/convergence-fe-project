import React from "react";
import { ImageContainer, Title } from "./customImage.styles";
import { Draggable } from "react-beautiful-dnd";

const CustomImage = ({ title, href, index }) => {
  return (
    <Draggable draggableId={`${href}-${index}`} index={index}>
      {(provided) => (
        <ImageContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          href={href}
        >
          <Title>{title}</Title>
        </ImageContainer>
      )}
    </Draggable>
  );
};

export default CustomImage;
