export function currentPageObserver() {
    const changePage = (entries, observer) => {
        entries.forEach((entry) => {
            // verify the element is intersecting
            if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
                // remove old active class
                document.querySelector('.active-link').classList.remove('active-link');
                // get id of the intersecting section
                var id = entry.target.getAttribute('id');
                // find matching link & add appropriate class
                var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active-link');
            }
        });
    }

    const options = {
        threshold: 0.55
    }

    const observer = new IntersectionObserver(changePage, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        observer.observe(section);
    });
}
  