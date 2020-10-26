import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: column;

  row-gap: 1rem;
  column-gap: 1rem;
`;
