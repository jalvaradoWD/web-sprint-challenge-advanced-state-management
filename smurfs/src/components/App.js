import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSmurf } from "../redux/actions/smurf.actions";

const App = () => {
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
    <>
      <h1>SMURFS! W/Redux</h1>
      {smurfs
        ? smurfs.map((smurf) => <p key={smurf.id}>{smurf.name}</p>)
        : null}
    </>
  );
};

export default App;
