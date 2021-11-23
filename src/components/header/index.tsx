import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {authorize} from '../../store/action';
import {Url} from '../../constants/urls'
import {AuthStatus} from '../../constants/auth-status';

type HeaderProps = {
  authStatus: AuthStatus;
};

export const Header = ({authStatus}: HeaderProps) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authorize(AuthStatus.NoAuth));
  }

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light p-1'>
        <Link to={Url.MAIN} className='navbar-brand'>Test News</Link>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to={Url.MAIN}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={Url.NEWS}>News</Link>
            </li>
            <li className='nav-item'>
              {
                authStatus === AuthStatus.Auth
                  ? <Link className='nav-link' to={Url.PROFILE}>Profile</Link>
                  : <Link className='nav-link' to={Url.LOGIN}>Login</Link>
              }
            </li>
            {authStatus === AuthStatus.Auth && (
              <li className='nav-item'>
                <Link className='nav-link' to={Url.MAIN} onClick={(evt) => {
                  evt.preventDefault();
                  logout();
                }}>Sign out</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
