import { userConstants, billingConstants } from 'constants/ActionTypes';

const initialState = {
  organizationId: '',
  billing: {},
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOAD_USER_SUCCESS:
      return {
        ...state,
        ...action.user,
        organizationId: action.user.user.organizationId,
      };
    case billingConstants.LOAD_BILLING_SUCCESS:
      return {
        ...state,
        billing: action.billing,
      };
    default:
      return state;
  }
};

export default userInfo;
