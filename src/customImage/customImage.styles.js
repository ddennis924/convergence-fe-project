import styled from "styled-components/macro";

export const ImageContainer = styled.div`
  ${({ href }) => `
  display: flex;
  position: relative;
      min-width: 400px;
    min-height: 400px;
  align-items: center;
  justify-content: center;
  background-image: url(${href});
    border-radius: 5rem;
    background-size: 400px;
   box-shadow: 0px 5px 10px 0px rgb(30, 30, 30);
   border: 2px solid rgb(30, 30, 30);
  margin: 20px;
  `}
`;
export const Title = styled.h3`
  transform: rotate(45deg);
  z-index: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 5rem;
  filter: drop-shadow(30px 10px 4px #4444dd);
`;
