import { call, put, takeLatest } from 'redux-saga/effects';
import { userConstants } from 'constants/ActionTypes';
import { USER_URL, ORGANIZATION_URL } from 'constants/ApiConstants';
import { userLoaded, userLoadingError } from 'actions/UserActions';
import {
  loadBilling,
  billingLoaded,
  billingLoadingError,
} from 'actions/BillingActions';
import request from 'utils/request';

export function* getUser() {
  try {
    const userData = yield call(request, USER_URL);
    const user = userData.data;
    yield put(userLoaded(user));
    yield put(loadBilling());
    const billingData = yield call(
      request,
      ORGANIZATION_URL(userData.data.user.organizationId),
    );
    const billing = billingData.data;
    yield put(billingLoaded(billing));
  } catch (err) {
    yield put(userLoadingError(err));
    yield put(billingLoadingError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(userConstants.LOAD_USER, getUser);
}
