import {State} from '../types/state';

export const getNewsSelector = (state: State) => state.news;
export const getAuthStatusSelector = (state: State) => state.authStatus;
export const getFetchStatusSelector = (state: State) => state.fetchStatus;
