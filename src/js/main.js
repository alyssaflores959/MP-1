// CAROUSEL
let index = 0;
const carousel_slides = document.getElementsByClassName("carousel-image");
const total_slides = carousel_slides.length;
function showSlides(n) {
    if (total_slides === 0) {
        return;
    }
    index = (n + total_slides) % total_slides;
    for (const slide of carousel_slides) {
        slide.classList.remove("active");
    }
    carousel_slides[index].classList.add("active");
}
function plusSlides(n) {
    showSlides(index + n);
}
showSlides(index);

// SMOOTH SCROLLING
const navbar = document.getElementById('sticky-nav-bar');
const links = document.querySelectorAll('#sticky-nav-bar a');
const sections = document.querySelectorAll('section');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// RESIZE NAV BAR
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 50) {
        navbar.style.padding = '5px 0';
        links.forEach(link => link.style.fontSize = '16px');
    } else {
        navbar.style.padding = '10px 0';
        links.forEach(link => link.style.fontSize = '20px');
    }
    // HIGHLIGHT ACTIVE SECTION
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop - 60 && scrollPos < section.offsetTop + section.offsetHeight) {
            const id = section.getAttribute('id');
            links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
        }
    });
});



// MODAL
const modal = document.querySelector(".travel-modal");
const modal_img = document.getElementById("modal-image");
const caption = document.getElementById("caption");
const close = document.querySelector(".travel-modal .close");
document.querySelectorAll(".travel-gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modal_img.src = img.src;
    caption.textContent = img.alt;
  });
});
close.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

