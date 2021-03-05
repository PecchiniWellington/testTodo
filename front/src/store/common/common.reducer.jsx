import * as commonType from "./common.types";

const initialState = {
  page: 1,
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonType.PAGINATION_ACTIONS:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
