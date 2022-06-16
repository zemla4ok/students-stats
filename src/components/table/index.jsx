import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DateTime } from 'luxon';

const EditingGrid = () => {
  return (
    <div style={{ height: 600, width: '100%' }} className='editing-table'>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        hideFooter={true}
      />
    </div>
  );
}

export default EditingGrid;

const columns = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: 'Tirion Lannester',
    age: 25,
    dateCreated: DateTime.now(),
    lastLogin: DateTime.now(),
  },
  {
    id: 2,
    name: 'Eddard Stark',
    age: 36,
    dateCreated: DateTime.now(),
    lastLogin: DateTime.now(),
  },
  {
    id: 3,
    name: 'Obi Van',
    age: 19,
    dateCreated: DateTime.now(),
    lastLogin: DateTime.now(),
  },
  {
    id: 4,
    name: 'Dart Vader',
    age: 28,
    dateCreated: DateTime.now(),
    lastLogin: DateTime.now(),
  }
];
