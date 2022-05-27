import React from 'react';
import SocialMediaIcon from '../Atoms/Iconography/SocialMediaIcon';

function SocialMedia({ socialmedias }) {
  return (
    <div className="social-media">
      {socialmedias.map((socialmedia) => (
        <SocialMediaIcon
          socialMedia={{ icon: socialmedia.icon, path: socialmedia.path }}
        />
      ))}
    </div>
  );
}

export default SocialMedia;
