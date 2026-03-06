// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if(targetId.startsWith("#")){
            e.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }

    });
});


// Email enquiry button generator

function sendEnquiry() {

    const email = "info@conveyassist.co.za";

    const subject = encodeURIComponent("Enquiry - ConveyAssist SA Remote Paralegal Services");

    const body = encodeURIComponent(
`Dear ConveyAssist SA,

Our law firm would like more information regarding your remote conveyancing support services.

Firm Name:
Contact Person:
Type of Assistance Required:

Kind regards`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

}