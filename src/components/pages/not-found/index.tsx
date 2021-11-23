import React from 'react';
import {Link} from 'react-router-dom';
import {Url} from '../../../constants/urls';

export const NotFoundPage = () => (
  <div className='container text-center'>
    <div className='row'>
      <div className='col-md-12'>
        <div className='error-template'>
          <h1>
            Oops!</h1>
          <h2>
            404 Not Found</h2>
          <div className='error-details'>
            Sorry, an error has occured, Requested page not found!
          </div>
          <div className='error-actions'>
            <Link to={Url.MAIN} className='btn btn-primary btn-lg'><span
              className='glyphicon glyphicon-home'></span>
              Take Me Home </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
