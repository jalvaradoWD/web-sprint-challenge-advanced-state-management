import React from "react";

import SmurfStyles from "../styles/Smurf.styles";

const Smurf = ({ smurf: { name, height, age } }) => {
  return (
    <SmurfStyles>
      <h2>Name: {name}</h2>
      <p>Height: {height}</p>
      <p>Age: {age}</p>
    </SmurfStyles>
  );
};

export default Smurf;
