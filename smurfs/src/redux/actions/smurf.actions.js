import axios from "axios";
import { get_smurfs, post_smurfs } from "../types";

export const getSmurf = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3333/smurfs");
    dispatch({
      type: get_smurfs,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const postSmurf = ({ name, age, height }) => async (dispatch) => {
  try {
    const smurfData = {
      name,
      age: Number(age),
      height: `${Number(height)}cm`,
    };
    const res = await axios.post("http://localhost:3333/smurfs", smurfData);
    dispatch({
      type: post_smurfs,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
