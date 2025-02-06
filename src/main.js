// Navigation animation

window.addEventListener("scroll", function() {
    const navContacts = document.querySelector(".nav_contacts");
    const nav = document.querySelector(".nav");
    const scrollPosition = window.scrollY;

    if(scrollPosition > 100) {
        navContacts.style.opacity = "0";
        navContacts.style.transition = "All 0.3s ease";
    
        nav.style.transform = "translate(-50%, -50px)";
        nav.style.transition = "transform 0.3s ease";
    } else {
        navContacts.style.opacity = "1";
        nav.style.transform = "translateX(-50%)";
    }
})

