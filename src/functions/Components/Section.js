export const Section = (element, sections) => {
  const parentElement = document.querySelector(element);

  const sectionsList = sections
    .map((section) => {
      return `
          <div class="pt-2 row">
                <div class="${
                  section.isSecondary ? 'col-md-6 order-2' : 'col-md-6'
                }">
                    <h2 class="h-2 primary--title">${section.title}</h2>
                    ${section.information
                      .map((info) => {
                        return `
                          <p>${info}</p>
                      `;
                      })
                      .join(' ')}
              </div>
              <div class="${
                section.isSecondary ? 'col-md-6 order-1' : 'col-md-6'
              }">
                  <div class="section-image">
                      <img
                          src=${section.img.src}
                          alt=${section.img.alt}
                      />
                  </div>
              </div>
          </div>
      `;
    })
    .join('');

  parentElement.innerHTML = sectionsList;
};
