import { billingConstants } from 'constants/ActionTypes';

export function loadBilling() {
  return {
    type: billingConstants.LOAD_BILLING,
  };
}

export function billingLoaded(billing) {
  return {
    type: billingConstants.LOAD_BILLING_SUCCESS,
    billing,
  };
}

export function billingLoadingError(error) {
  return {
    type: billingConstants.LOAD_BILLING_ERROR,
    error,
  };
}
