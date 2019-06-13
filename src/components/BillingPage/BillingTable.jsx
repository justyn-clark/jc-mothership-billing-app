import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ReactTable from 'react-table';
import { formatDate } from 'utils/helpers';
import Locations from 'components/Locations';
import DocumentsDropdown from 'components/DocumentsDropdown';
import ArrowDown from 'components/UI/UI.ArrowDown';

const propTypes = {
  isExpanded: PropTypes.bool,
};

const columns = [
  {
    id: 'data',
    Header: 'Date',
    accessor: d => formatDate(d.date),
    minWidth: 50,
  },
  {
    Header: 'Shipment',
    accessor: 'shipmentReferenceNumber',
    minWidth: 50,
  },
  {
    id: 'locations',
    Header: 'Locations',
    accessor: props => <Locations {...props} />,
    minWidth: 200,
  },
  {
    Header: 'Reference',
    accessor: 'referenceNumber',
  },
  {
    id: 'amount',
    Header: 'Amount',
    accessor: a => `$${a.amount}`,
    minWidth: 50,
  },
  {
    columns: [
      {
        expander: true,
        Header: 'Documents',
        width: 100,
        Expander: () => (
          <div style={{ display: 'flex' }}>
            View Docs
            <ArrowDown color="black" style={{ marginLeft: '1rem' }} />
          </div>
        ),
        style: {
          cursor: 'pointer',
          fontSize: 16,
          color: '#3755B0',
          padding: '0',
          textAlign: 'center',
          userSelect: 'none',
        },
      },
    ],
  },
];

const BillingTable = () => {
  const billing = useSelector(state => state.userInfo.billing);
  const { items } = billing;
  return (
    <ReactTable
      defaultPageSize={10}
      minRows={3}
      pageSizeOptions={[20, 30, 50, 100, 200, 500]}
      data={items && Object.values(items)}
      columns={columns}
      className="-highlight"
      showPagination={false}
      SubComponent={rowInfo => <DocumentsDropdown {...rowInfo} />}
    />
  );
};

BillingTable.propTypes = propTypes;
export default BillingTable;
