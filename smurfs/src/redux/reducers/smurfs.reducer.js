import { get_smurfs } from "../types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case get_smurfs:
      return [...payload];
    default:
      return state;
  }
};
