import styled from "styled-components/macro";

export const ButtonStyled = styled.button`
  height: 50px;
  width: 200px;
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: solid 1px white;
  color: white;
  margin: 10px;
  font-size: 1.2rem;
  &:hover {
    background: linear-gradient(
      90deg,
      rgb(147, 82, 255) 0%,
      rgb(0, 255, 240) 100%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
