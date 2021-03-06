export function closeButton(btn) {
    btn.innerHTML = `
    <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M9,1 C4.582,1 1,4.582 1,9 C1,13.418 4.582,17 9,17 C13.418,17 17,13.418 17,9 C17,4.582 13.418,1 9,1 Z M9.94266667,9 C9.94266667,9 12.0353333,11.0926667 12.138,11.1953333 C12.3986667,11.456 12.3986667,11.878 12.138,12.138 C11.8773333,12.3986667 11.4553333,12.3986667 11.1953333,12.138 C11.0926667,12.036 9,9.94266667 9,9.94266667 C9,9.94266667 6.90733333,12.0353333 6.80466667,12.138 C6.544,12.3986667 6.122,12.3986667 5.862,12.138 C5.60133333,11.8773333 5.60133333,11.4553333 5.862,11.1953333 C5.964,11.0926667 8.05733333,9 8.05733333,9 C8.05733333,9 5.96466667,6.90733333 5.862,6.80466667 C5.60133333,6.544 5.60133333,6.122 5.862,5.862 C6.12266667,5.60133333 6.54466667,5.60133333 6.80466667,5.862 C6.90733333,5.964 9,8.05733333 9,8.05733333 C9,8.05733333 11.0926667,5.96466667 11.1953333,5.862 C11.456,5.60133333 11.878,5.60133333 12.138,5.862 C12.3986667,6.12266667 12.3986667,6.54466667 12.138,6.80466667 C12.036,6.90733333 9.94266667,9 9.94266667,9 Z" id="path-1"></path>
        </defs>
        <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <mask id="mask-2" fill="white">
                <use xlink:href="#path-1"></use>
            </mask>
            <use id="Close-Circle" fill="#949494" fill-rule="nonzero" xlink:href="#path-1"></use>
        </g>
    </svg>
    `;
}

export function mobileMenu() { 
    const closeBtn = document.querySelector("[data-close]");
    const mobileBtn = document.querySelector("[data-open]");
    const menu = document.querySelector(".mobile-menu");

    const openMenu = (e) => {
        e.preventDefault();
        menu.classList.add("open");
    }

    const closeMenu = (e) => {
        e.preventDefault();
        menu.classList.remove("open");
    }

    mobileBtn.addEventListener("touchstart", openMenu)
    closeBtn.addEventListener("touchstart", closeMenu)

    mobileBtn.addEventListener("click", openMenu)
    closeBtn.addEventListener("click", closeMenu)
    
    closeButton(closeBtn);
}