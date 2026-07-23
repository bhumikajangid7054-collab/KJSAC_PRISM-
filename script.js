// Smooth navbar shadow on scroll

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 30){

navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow = "none";

}

});

// Fade-in animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="all .8s ease";

observer.observe(section);

});

// Highlight active navigation

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

if(link.getAttribute("href")===currentPage){

link.style.color="#1D4ED8";
link.style.fontWeight="700";

}

});
