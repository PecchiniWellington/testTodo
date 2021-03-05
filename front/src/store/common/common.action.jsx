import * as commonAction from "./common.types";

export const paginationActions = (page) => ({
  type: commonAction.PAGINATION_ACTIONS,
  payload: page,
});
