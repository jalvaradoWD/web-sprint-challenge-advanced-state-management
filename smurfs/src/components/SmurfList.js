import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSmurf } from "../redux/actions/smurf.actions";

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

  return (
    <div>
      {smurfs
        ? smurfs.map((smurf) => <p key={smurf.id}>{smurf.name}</p>)
        : null}
    </div>
  );
};

export default SmurfList;
