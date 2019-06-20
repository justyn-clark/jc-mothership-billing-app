import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BillingPaymentHeader from 'components/BillingPaymentHeader';
import { loadUser } from 'actions/UserActions';
import BillingTable from './BillingTable';
import 'react-table/react-table.css';

const BillingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return (
    <>
      <BillingPaymentHeader />
      <BillingTable />
    </>
  );
};

export default BillingPage;
