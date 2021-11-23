import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {AuthStatus} from '../constants/auth-status';
import {FetchStatus} from '../constants/fetch-status';

export const loadNews = createAction(
  ActionType.LoadNews,
  (news) => ({
    payload: news
  })
);

export const authorize = createAction(
  ActionType.Authorize,
  (authStatus: AuthStatus) => ({
    payload: authStatus
  })
);

export const setFetchStatus = createAction(
  ActionType.SetFetchType,
  (status: FetchStatus) => ({
    payload: status
  })
);
