import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

import { Filter, FilterItem } from '../types/filter';

import {
  accountActiveStateList,
  accountStateList,
  brokerList,
} from '../utils/constants/dropdownList';

const initialState: Filter = {
  broker: {
    id: brokerList[0].id,
    title: brokerList[0].title,
  },
  accountState: {
    id: accountStateList[0].id,
    title: accountStateList[0].title,
  },
  accountActiveState: {
    id: accountActiveStateList[0].id,
    title: accountActiveStateList[0].title,
  },
};

const filterSlice = createSlice<Filter, SliceCaseReducers<Filter>>({
  name: 'filter',
  initialState,
  reducers: {
    setBrokerFilter: (state, action: PayloadAction<FilterItem>) => ({
      ...state,
      broker: { ...action.payload },
    }),
    setAccountStateFilter: (state, action: PayloadAction<FilterItem>) => ({
      ...state,
      accountState: { ...action.payload },
    }),
    setAccountActiveStateFilter: (
      state,
      action: PayloadAction<FilterItem>,
    ) => ({
      ...state,
      accountActiveState: { ...action.payload },
    }),
  },
});

export const {
  setBrokerFilter,
  setAccountStateFilter,
  setAccountActiveStateFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
