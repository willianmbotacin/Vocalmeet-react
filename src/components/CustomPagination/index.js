import { useState } from "react";
import {
  Pagination,
  TextField,
  Box,
} from "@mui/material";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updatePaginationData, selectPaginationData } from '../../redux/paginationDataSlice';

const CustomPagination = (props) => {
  // States
  const [perPageField, setPerPageField] = useState(1);

  // Redux
  const dispatch = useDispatch()
  const paginationData = useSelector(selectPaginationData)

  const perPageChange = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }

  const clearNumbers = (value) => {
    value = value.replace(/\D+/g, '');
    if (value <= 0) value = 1;
    if (value > 100) value = 100;
    return value;
  }

  const perPageFieldChange = () => {
    const value = clearNumbers(perPageField);
    setPerPageField(value);
    dispatch(updatePaginationData({
      page: 1,
      perPage: value,
    }));
  }

  return (
    <Box
      display='flex'
      justifyContent="center"
      alignItems="center"
    >
      <TextField
        variant="standard"
        label="Per page"
        sx={{ width: 80, mb: 2 }}
        size="small"
        value={perPageField}
        onKeyDown={perPageChange}
        onBlur={perPageFieldChange}
        onChange={(e) => setPerPageField(e.target.value)}
      />
      <Pagination
        count={Math.ceil(2000 / paginationData.perPage)}
        shape="rounded"
        page={paginationData.page}
        onChange={(e, page) => {
          dispatch(updatePaginationData({ page }));
        }}
      />
    </Box>
  );
}

export default CustomPagination