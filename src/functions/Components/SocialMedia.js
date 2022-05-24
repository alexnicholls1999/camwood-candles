const socialMediaIcons = [
  {
    id: 0,
    path: 'https://www.facebook.com/beautifulbeeswax',
    secondary: false,
    symbol: 'fa-facebook-f'
  },
  {
    id: 1,
    path: 'https://www.instagram.com/camwoodcandles/?hl=en-gb',
    secondary: true,
    symbol: 'fa-instagram'
  },
  {
    id: 2,
    path: '#',
    secondary: false,
    symbol: 'fa-twitter'
  }
];

export const SocialMedia = () => {
  const socialMedia = document.querySelector('.social-media');

  const socialMediaList = socialMediaIcons
    .map((socialMediaIcon) => {
      if (socialMediaIcon.secondary) {
        return `
            <div class="icon secondary-icon">
                <a href="${socialMediaIcon.path}" target="_blank">
                    <i class="fab ${socialMediaIcon.symbol}"></i>
                </a>
            </div>
        `;
      } else {
        return `
            <div class="icon primary-icon">
                <a href="${socialMediaIcon.path}" target="_blank">
                    <i class="fab ${socialMediaIcon.symbol}"></i>
                </a>
            </div>
        `;
      }
    })
    .join('');

  socialMedia.innerHTML = socialMediaList;
};
