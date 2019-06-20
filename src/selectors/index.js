import { createSelector } from 'reselect';

const selectUserInfo = state => state.userInfo;
const selectBilling = state => state.userInfo.billing;
const selectItems = state => state.userInfo.billing.items;

export const makeSelectUser = createSelector(
  selectUserInfo,
  userInfo => userInfo.user,
);

export const makeSelectBilling = createSelector(
  selectBilling,
  billing => billing,
);

export const makeSelectItems = createSelector(
  selectItems,
  items => items,
);
