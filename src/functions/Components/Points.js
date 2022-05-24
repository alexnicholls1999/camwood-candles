const points = [
  {
    id: 0,
    pointId: 'natural-substance',
    title: 'Natural Substance.',
    isSecondary: false,
    message:
      'Beeswax is a completely all-natural substance straight from Mother Nature herself. It is the purest and most natural of all waxes with no additives.'
  },
  {
    id: 1,
    pointId: 'burnefficency',
    title: 'Burn Efficency.',
    isSecondary: true,
    message: 'Beeswax burns longer, cleaner and brighter than any other waxes.'
  },
  {
    id: 2,
    pointId: 'native',
    title: 'Native.',
    isSecondary: false,
    message:
      'Beeswax is the only wax that is essentially used in its native state, with only filtering for processing.'
  },
  {
    id: 3,
    pointId: 'airquality',
    title: 'Better air quality.',
    isSecondary: true,
    message:
      'Natural beeswax candles can provide an important ingredient for a healthier home. They help eliminate bacteria, dust, pollen, pet dander and bacteria from the air when burned.'
  }
];

export function Points() {
  const pointsGrid = document.querySelector('.points-grid');

  const pointsList = points
    .map((point) => {
      if (point.isSecondary) {
        return `
            <div class="point secondary">
                <div class="point-content-container">
                    <div class="point-icon" id=${point.pointId}></div>
                    <h4 class="point--title">${point.title}</h4>
                    <p class="point--desc">${point.message}</p>
                </div>
            </div>
        `;
      } else {
        return `
            <div class="point primary">
                <div class="point-content-container">
                    <div class="point-icon" id=${point.pointId}></div>
                    <h4 class="point--title">${point.title}</h4>
                    <p class="point--desc">${point.message}</p>
                </div>
            </div>
        `;
      }
    })
    .join(' ');

  pointsGrid.innerHTML = pointsList;
}
