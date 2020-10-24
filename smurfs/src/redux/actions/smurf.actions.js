import axios from "axios";
import { get_smurfs } from "../types";

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

export const postSmurf = (smurfData) => async (dispatch) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
