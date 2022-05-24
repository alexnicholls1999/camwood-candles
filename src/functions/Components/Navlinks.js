export const links = [
  {
    id: 0,
    path: '#top',
    title: 'Home'
  },
  {
    id: 1,
    path: '#aboutus',
    title: 'About'
  },
  {
    id: 2,
    path: '#votives',
    title: 'Votives'
  },
  {
    id: 3,
    path: '#meltsnburners',
    title: 'Melts & Burners'
  },
  {
    id: 4,
    path: '#skincare',
    title: 'Skincare'
  }
];

export function NavLinks(links) {
  const menu = document.querySelector('.nav-menu');

  const navLinks = links
    .map((link) => {
      return `
          <li class="nav-link" key=${link.id}>
              <a href=${link.path}>${link.title}</a>
          </li>
      `;
    })
    .join(' ');

  menu.innerHTML = `
      ${navLinks}

      <li class="btn-wrapper">
          <button class="btn btn-primary" data-dimensionsClick>Dimensions</button>
          <button class="btn btn-primary" data-contactClick>Contact</button>
      </li>
    `;
}
