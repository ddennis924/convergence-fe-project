import React from "react";
import CustomImage from "../customImage/customImage";
import { Droppable } from "react-beautiful-dnd";
import { ListStyled } from "./imageList.styles";

const ImageList = ({ images, handleScroll }) => {
  return (
    <Droppable droppableId={"image-list"} direction="horizontal">
      {(provided) => (
        <ListStyled
          ref={provided.innerRef}
          {...provided.droppableProps}
          length={images.length}
          onScroll={handleScroll}
        >
          {images.map((image, i) => {
            return (
              <CustomImage
                key={i}
                title={image.title}
                href={image.href}
                index={i}
              />
            );
          })}
          {provided.placeholder}
        </ListStyled>
      )}
    </Droppable>
  );
};

export default ImageList;
