const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
        // link.classList.collapse("open");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// cerificates
// links.classList.click(function(){
//     $(".nav-links").collapse('open');
// });