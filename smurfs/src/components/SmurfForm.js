import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { postSmurf } from "../redux/actions/smurf.actions";

import SmurfFormStyles from "../styles/SmurfForm.styles";

const SmurfForm = () => {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [smurfData, setSmurfData] = useState({
    name: "",
    age: 0,
    height: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(postSmurf(smurfData));
    setSubmitted(!submitted);
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setSmurfData({ ...smurfData, [name]: value });
  };

  const renderForm = () => {
    return !submitted ? (
      <SmurfFormStyles onSubmit={onSubmit}>
        <h2>Smurf Form</h2>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={onChange} type="text" name="name" />
        <label htmlFor="age">Age</label>
        <input id="age" onChange={onChange} type="number" name="age" />
        <label htmlFor="height">Height</label>
        <input id="height" onChange={onChange} type="number" name="height" />

        <input type="submit" value="Create Smurf" />
      </SmurfFormStyles>
    ) : (
      <Redirect to="/" />
    );
  };

  return <>{renderForm()}</>;
};

export default SmurfForm;
