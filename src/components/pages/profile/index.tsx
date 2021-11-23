import React from 'react';

type ProfileComponentProps = {
  username: string;
};

export const ProfileComponent = ({username}: ProfileComponentProps) => {
  return (
    <div className='container mt-4 mb-4 p-3 d-flex justify-content-center'>
      <div className='card p-4'>
        <div className=' image d-flex flex-column justify-content-center align-items-center'>
          <button className='btn btn-secondary'>
            <img src='https://i.imgur.com/wvxPV9S.png' height='100' width='100'/>
          </button>
          <span className='name mt-3'>
            {username}
          </span>
          <div className='text mt-3'>
            <span>
              {username} is a creator of minimalistic x bold graphics and digital artwork.
              <br /><br /> Artist/ Creative Director by Day #NFT minting@ with FND night.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
