import React, {FormEvent, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {Url} from '../../../constants/urls';
import {AuthData} from '../../../types/auth-data';
import {loginAction} from '../../../store/api-actions';
import {AuthStatus} from '../../../constants/auth-status';

const StyledForm = styled.form`
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
`

export const LoginComponent = ({authStatus}: {authStatus: AuthStatus}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      history.push(Url.PROFILE);
    }
  }, [authStatus, history]);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  }

  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (userNameRef.current && passwordRef.current) {
      onSubmit({
        username: userNameRef.current?.value,
        password: passwordRef.current?.value,
      });
    }
  };

  return  (
    <div className='text-center'>
      <StyledForm action='' onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
        <label htmlFor='inputEmail' className='sr-only'>Email address</label>
        <input
          ref={userNameRef}
          type='text'
          className='form-control'
          placeholder='Email address'
          required
          autoFocus
        />
        <label htmlFor='inputPassword' className='sr-only'>Password</label>
        <input
          ref={passwordRef}
          type='password'
          className='form-control'
          placeholder='Password'
          required
        />
        <button
          className='btn btn-lg btn-primary btn-block'
          type='submit'
        >Sign in</button>
        <p className='mt-5 mb-3 text-muted'>© 2021</p>
      </StyledForm>
    </div>
  );
}
