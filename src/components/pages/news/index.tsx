import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewsAction} from '../../../store/api-actions';
import {getFetchStatusSelector, getNewsSelector} from '../../../store/selectors';
import {FetchStatus} from '../../../constants/fetch-status';

export const NewsComponent = () => {
  const dispatch = useDispatch();

  const news = useSelector(getNewsSelector);
  const fetchStatus = useSelector(getFetchStatusSelector);
  const isLoading = fetchStatus === FetchStatus.Loading;

  useEffect(() => {
    dispatch(fetchNewsAction());
  }, [dispatch]);

  return (
    <div className='container-fluid'>
      <h4>Space News</h4>
      {
        isLoading
          ? (
            <div className='d-flex justify-content-center'>
              <div className='spinner-border mt-5 mb-5' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          )
          : (
            <div className='row d-inline-flex'>
              {news.map(({id, title, imageUrl, summary, url, newsSite}) => (
                <div key={id} className='col-6 col-sm-4 col-md-3 p-2'>
                  <div className='card h-100'>
                    <img className='card-img-top' src={imageUrl} alt='Card image cap' />
                    <div className='card-body'>
                      <h5 className='card-title'>{title}</h5>
                      <p className='card-text'>{summary}</p>
                      <a href={url} rel='noreferrer' target='_blank' className='card-link'>{newsSite}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
      }
    </div>
  );
};
