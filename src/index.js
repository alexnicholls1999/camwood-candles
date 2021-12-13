const routes = {
    '/': home,
    '/about' : about,
}

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const useRouter = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )   
    rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}