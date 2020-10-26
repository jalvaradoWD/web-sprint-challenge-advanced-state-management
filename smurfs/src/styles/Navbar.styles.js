import styled from "styled-components";

export default styled.div`
  box-sizing: border-box;

  display: grid;
  grid-auto-flow: column;
  justify-content: left;

  column-gap: 2rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: white;
    padding: 1rem;
  }

  a:hover {
    color: skyblue;
    border: 1px solid white;
  }

  background-color: black;
  margin: 0;
  padding: 1rem;
  font-size: 1.2rem;
`;
