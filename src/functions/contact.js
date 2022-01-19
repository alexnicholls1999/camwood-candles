export function contactMe() {
    // const contactLink = document.querySelector('#contact-me');

    // function emailLink(){

      
    //     window.location = `mailto:${camwoodcandlesemail}`
    // }

    // contactLink.addEventListener("click", emailLink)


    const contactBtn = document.querySelector('[data-oncontactclick]');

    contactBtn.addEventListener("click", function() {
        window.location = "#contact-me"
    })
    
}