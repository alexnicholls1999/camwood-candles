const contacts = [
  {
    icon: 'far fa-map',
    text: 'Ashington, RH20 3BX'
  },
  {
    icon: 'fa fas fa-phone',
    text: '0742424342523'
  },
  {
    icon: 'far fa-envelope',
    text: 'camwoodcandles@gmail.com'
  }
];

export function Contacts() {
  const contactGrid = document.querySelector('.contact-grid');

  const contactItems = contacts
    .map((contact) => {
      return `
            <div class="contact-method">
                <i class="${contact.icon}"></i>
                <p>${contact.text}</p>
            </div>
        `;
    })
    .join('');

  contactGrid.innerHTML = contactItems;
}
