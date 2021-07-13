import { JSONDATA_FETCH_ALL } from "../constants/songContsant";

export const jsonReducer = (jData = [], action) => {
  switch (action.type) {
    case JSONDATA_FETCH_ALL:
      return action.payload;

    default:
      return jData;
  }
};

/**
 *
 *
 *
 *
 */
