import { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  Box,
  TextField,
  Container,
} from "@mui/material";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updatePaginationData, selectPaginationData } from '../../redux/paginationDataSlice'

// Providers
import { getCategories, getMarkets } from '../../providers/coingeckoProvider/coins';
import { getCurrencies } from '../../providers/coingeckoProvider/simple';

import handleApiResponse from "./handleApiResponse";
import DataTable from "../../components/DataTable";

const Cryptocurrency = () => {
  const defaultCurrency = 'usd';

  // States
  const [rows, setRows] = useState([]);
  const [currenciesList, setCurrenciesList] = useState([]);
  const [currency, setCurrency] = useState(defaultCurrency);
  const [categoriesList, setCategoriesList] = useState([]);
  const [category, setCategory] = useState('');

  // Redux
  const dispatch = useDispatch()
  const paginationData = useSelector(selectPaginationData)

  const listCoins = async () => {
    const filters = {
      page: paginationData.page,
      per_page: paginationData.perPage,
      vs_currency: currency,
      ...(category && { category }),
    }

    const response = await getMarkets(filters);
    const result = handleApiResponse(response);
    setRows(result);
  }

  const listCurrencies = async () => {
    const response = await getCurrencies();
    setCurrenciesList(response.sort());
  }

  const listCategories = async () => {
    const response = await getCategories();
    setCategoriesList(response);
  }

  useEffect(() => {
    const onPageLoad = () => {
      listCurrencies();
      listCategories();
    };

    // Prevents duplicate function calls
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [])

  useEffect(() => {
    const onPageLoad = () => {
      listCoins();
    };

    // Prevents duplicate function calls
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [currency, category, paginationData])

  return (
    <Container>
      <FormControl sx={{ mb: 5 }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            select
            id="monetary-unit-selector"
            defaultValue={defaultCurrency}
            label="Monetary Unit"
            onChange={(e) => {
              setCurrency(e.target.value);
              dispatch(updatePaginationData({
                page: 1,
              }));
            }}
          >
            {
              currenciesList.map((value, index) => (
                <MenuItem key={index} value={value}>{value.toUpperCase()}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            select
            id="category-selector"
            defaultValue={''}
            label="Category"
            onChange={(e) => {
              setCategory(e.target.value);
              dispatch(updatePaginationData({
                page: 1,
              }));
            }}
          >
            <MenuItem value={''}>All</MenuItem>
            {
              categoriesList.map((data, index) => (
                <MenuItem key={index} value={data.category_id}>{data.name}</MenuItem>
              ))
            }
          </TextField>
        </Box>
      </FormControl>
      <DataTable
        columns={[
          { field: 'name', headerName: 'Coin', width: 150 },
          { field: 'price', headerName: 'Price', width: 130 },
          { field: '1h', headerName: '1h', width: 80 },
          { field: '24h', headerName: '24h', width: 80 },
          { field: '7d', headerName: '7d', width: 80 },
          { field: '24hVolume', headerName: '24h Volume', width: 150 },
          { field: 'marketCap', headerName: 'Mkt Cap', width: 150 },
          { field: 'fdv', headerName: 'FDV', width: 150 },
          { field: 'mktCapFdv', headerName: 'Mkt Cap/FDV', width: 150 },
        ]}
        rows={rows}
      />
    </Container>
  )
}

export default Cryptocurrency;