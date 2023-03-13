import styled from "styled-components/macro";

export const ListStyled = styled.div`
  ${({ length }) => `
  overflow: scroll;
  max-height: 60vh;
  display: flex;
  padding: 8px;
  width: ${length} * 500 + 16;
  background: rgb(40,40,40);
  `};
`;
