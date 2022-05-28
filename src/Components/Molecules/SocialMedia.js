import React from 'react';
import SocialMediaIcon from '../Atoms/Iconography/SocialMediaIcon';

function SocialMedia({ socialmedias }) {
  return (
    <div className='social-media'>
      {socialmedias.map((socialmedia) => (
        <SocialMediaIcon
          socialMedia={{
            isSecondary: socialmedia.isSecondary,
            icon: socialmedia.icon,
            path: socialmedia.path
          }}
        />
      ))}
    </div>
  );
}

export default SocialMedia;
