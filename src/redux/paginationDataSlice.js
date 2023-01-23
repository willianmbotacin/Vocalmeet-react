import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  page: 1,
  perPage: 5,
}

export const slice = createSlice({
  name: 'paginationData',
  initialState,
  reducers: {
    updatePaginationData(state, { payload }) {
      return { ...state, ...payload }
    },
    clearPaginationData() {
      return initialState
    },
  },
})

export const { updatePaginationData, clearPaginationData } = slice.actions

export const selectPaginationData = state => state.paginationData

export default slice.reducer