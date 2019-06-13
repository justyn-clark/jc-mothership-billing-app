import { createSelector } from 'reselect';

const selectUserInfo = state => state.userInfo;
// export const selectItems = state => state.userInfo.billing.items;
// export const selectBilling = state => state.userInfo.billing;

export const makeSelectUser = () =>
  createSelector(
    selectUserInfo,
    state => state.user,
  );

export const makeSelectItems = () =>
  createSelector(
    selectUserInfo,
    state => state.billing.items,
  );

export const makeSelectBilling = () =>
  createSelector(
    selectUserInfo,
    state => state.billing,
  );
