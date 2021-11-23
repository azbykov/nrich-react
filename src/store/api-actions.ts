import {toast} from 'react-toastify';
import axios from 'axios';
import {AnyAction, ThunkAction} from '@reduxjs/toolkit';
import {authorize, loadNews, setFetchStatus} from './action';
import {saveToken} from '../services/token';
import {AUTH_DATA} from '../constants/auth-data';
import {AuthStatus} from '../constants/auth-status';
import {AuthData} from '../types/auth-data';
import {State} from '../types/state';
import {FetchStatus} from '../constants/fetch-status';

export const fetchNewsAction = (): ThunkAction<void, State, void, AnyAction> =>
  async (dispatch): Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.Loading));
    const {data} = await axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=50');
    dispatch(loadNews(data));
    dispatch(setFetchStatus(FetchStatus.Complete));
  };

export const loginAction = ({username, password}: AuthData): ThunkAction<void, State, void, AnyAction> => (dispatch) => {
  if (username === AUTH_DATA.username && password === AUTH_DATA.password) {
    dispatch(authorize(AuthStatus.Auth));
    saveToken(AuthStatus.Auth);
  } else {
    toast.info('Не получилось авторизоваться')
  }
};
