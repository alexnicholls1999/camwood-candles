export function contactMe() {
    const contactLink = document.querySelector('#contact-me');

    function emailLink(){
        const camwoodcandlesemail = "camwoodcandles@gmail.com"
      
        window.location = `mailto:${camwoodcandlesemail}`
    }

    contactLink.addEventListener("click", emailLink)

}