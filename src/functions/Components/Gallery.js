const images = [
  {
    src: '/src/assets/gallery/272896555_646407579938897_4415084328210236413_n.jpg',
    alt: 'instagram-image'
  },
  {
    src: '/src/assets/gallery/272947480_624551558843551_690097386572143986_n.jpg',
    alt: 'instagram-image'
  },
  {
    src: '/src/assets/gallery/273059730_267183262160951_3438234941065248415_n.jpg',
    alt: 'instagram-image'
  },
  {
    src: '/src/assets/gallery/273066710_467638144861426_6902820451433005858_n.jpg',
    alt: 'instagram-image'
  },
  {
    src: '/src/assets/gallery/273077638_292961712838222_2380055696589881482_n.jpg',
    alt: 'instagram-image'
  },
  {
    src: '/src/assets/gallery/273080435_509908090525839_8494720692570817881_n.jpg',
    alt: 'instagram-image'
  },
  {
    src: '/src/assets/gallery/273207738_613585489621627_2336879817597700760_n.jpg',
    alt: 'instagram-image'
  },
  {
    src: '/src/assets/gallery/273263557_1020114465514838_9085530217992514366_n.jpg',
    alt: 'instagram-image'
  },
  {
    src: '/src/assets/gallery/273561239_900940113909391_2377606561430269009_n.jpg',
    alt: 'instagram-image'
  }
];

export function Gallery() {
  const gallery = document.querySelector('.gallery-grid');

  const galleryItems = images
    .map((image) => {
      return `
        <div class="grid--item">
            <img src=${image.src} alt=${image.alt}/>
        </div>
      `;
    })
    .join('');

  gallery.innerHTML = galleryItems;
}
