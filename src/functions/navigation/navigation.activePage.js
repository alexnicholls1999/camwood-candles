export function currentPageObserver() {
    const pages = document.querySelectorAll(".page-section");

    const toggleActiveClass = (target) => {
        document.querySelector(".active-link").classList.remove("active-link");

        const id = target.getAttribute("id")
        const newLink = document.querySelector(`[href="#${id}"]`).classList.add("active-link");
    }

    const options = {
        threshold: 0.55
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const { isIntersetcting, intersectionRatio, target } = entry;

            if (isIntersetcting && intersectionRatio >= 0.55) return toggleActiveClass(target);
        });
    }, options)

    pages.forEach((page) => {
        observer.observe(page);
    });
}