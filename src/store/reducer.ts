import {createReducer} from '@reduxjs/toolkit';

import {loadNews, authorize, setFetchStatus} from './action';
import {AuthStatus} from '../constants/auth-status';
import {FetchStatus} from '../constants/fetch-status';
import {getToken} from '../services/token';

const initialState = {
  news: [],
  authStatus: getToken() || AuthStatus.NoAuth,
  fetchStatus: FetchStatus.Complete
};

export const reducer = createReducer(
  initialState, (builder) => {
  builder
    .addCase(loadNews, (state, {payload}) => {
      state.news = payload;
    })
    .addCase(authorize, (state, {payload}) => {
      state.authStatus = payload;
    })
    .addCase(setFetchStatus, (state, {payload}) => {
      state.fetchStatus = payload;
    })
});

