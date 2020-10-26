import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Smurf from "./Smurf";

import { getSmurf } from "../redux/actions/smurf.actions";
import SmurfListStyle from "../styles/SmurfList.style";

const SmurfList = () => {
  const [smurfs, setSmurfs] = useState();
  const reduxSmurf = useSelector((state) => state.smurfReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurf());
  }, [dispatch]);

  useEffect(() => {
    setSmurfs(reduxSmurf);
  });

  // Seperate function that renders the list of smurfs to keep the returned rendered code look more cleaned.
  const renderSmurfs = () =>
    smurfs
      ? smurfs.map((smurf) => <Smurf key={smurf.id} smurf={smurf} />)
      : null;

  return <SmurfListStyle>{renderSmurfs()}</SmurfListStyle>;
};

export default SmurfList;
