import React from 'react';
import { useSelector } from 'react-redux';
import { makeSelectItems } from 'selectors';
import ReactTable from 'react-table';
import { formatDate } from 'utils/helpers';
import Locations from 'components/Locations';
import DocumentsDropdown from 'components/DocumentsDropdown';
import ArrowDown from 'components/UI/UI.ArrowDown';

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

const renderSubComponent = rowInfo => <DocumentsDropdown {...rowInfo} />;
const renderItems = items => items && Object.values(items);

const BillingTable = () => {
  const items = useSelector(makeSelectItems);
  return (
    <ReactTable
      defaultPageSize={10}
      minRows={3}
      pageSizeOptions={[20, 30, 50, 100, 200, 500]}
      data={renderItems(items)}
      columns={columns}
      className="-highlight"
      showPagination={false}
      SubComponent={renderSubComponent}
    />
  );
};

export default BillingTable;
