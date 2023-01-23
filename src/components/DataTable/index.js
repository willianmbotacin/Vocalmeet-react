import { DataGrid } from '@mui/x-data-grid';

import CustomPagination from '../CustomPagination';

const DataTable = (props) => {
  const {
    columns,
    rows,
  } = props

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        autoHeight
        sx={{ mb: 2 }}
      />
      <CustomPagination />
    </>
  );
}

export default DataTable