const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade").forEach((el)=>{

    observer.observe(el);

});
const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const close = document.querySelector(".close");


images.forEach(image => {

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

    });

});


close.addEventListener("click",()=>{

    lightbox.style.display="none";

});
lightbox.addEventListener("click", (e)=>{

    if(e.target !== lightboxImg){

        lightbox.style.display="none";

    }

});