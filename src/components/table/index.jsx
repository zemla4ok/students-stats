import {useMemo} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {getCols} from "../../utils/table-helper";

const EditingGrid = ({isAdmin, data, onChange}) => {
  const height = useMemo(() => `calc(100vh - ${isAdmin ? 130 : 65}px)`, [isAdmin]);
  const columns = useMemo(() => getCols(data, isAdmin), [data]);
  const handleStateChange = ({id, field, getValue}) => setTimeout(() => onChange(data.map(row => row.id === id ? {...row, [field]: getValue(id, field)} : row)), 200);

  return (
    <div style={{height, width: '100%'}} className='editing-table'>
      <DataGrid
        rows={data}
        columns={columns}
        experimentalFeatures={{newEditingApi: true}}
        hideFooter={true}
        onCellEditStop={handleStateChange}
      />
    </div>
  );
}

export default EditingGrid;


