const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

const gradients = [
  "#aee972","#aee972","#aee972","#aee972","#aee972","#aee972"
] ;
const options = {
  threshold: 0.3
}

let observer = new IntersectionObserver(navCheck , options);

function navCheck(entries){
  entries.forEach(entry =>{
    const className = entry.target.className;
    // console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if(entry.isIntersecting){
      bubble.style.setProperty("left", `${directions.left}px `);
      bubble.style.setProperty("top", `${directions.top}px `);
      bubble.style.setProperty("width", `${directions.width}px `);
      bubble.style.setProperty("height", `${directions.height}px `);
      bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach(section =>{
  observer.observe(section);
});



// burger
const hamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_items");
const links = document.querySelectorAll(".nav_items li");
hamburger.addEventListener('click', ()=>{//Animate Links
navLinks.classList.toggle("open");
links.forEach(link => {
link.classList.toggle("fade");
});
//Hamburger Animation
hamburger.classList.toggle("toggle");
});