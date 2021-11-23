import {AuthStatus} from '../constants/auth-status';
import {FetchStatus} from '../constants/fetch-status';
import {News} from './news';

export type State = {
  news: News[];
  authStatus: AuthStatus;
  fetchStatus: FetchStatus;
};
