import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialMediaIcon({ socialMedia }) {
  const handleOnClickLink = () => {
    window.open(`${socialMedia.path}`, '_blank');
  };

  return (
    <div className='icon'>
      <FontAwesomeIcon
        onClick={handleOnClickLink}
        className={`fab ${
          socialMedia.isSecondary ? 'secondary-icon' : 'primary-icon'
        }`}
        icon={socialMedia.icon}
      />
    </div>
  );
}

export default SocialMediaIcon;
