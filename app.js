const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navLink = document.querySelector(".nav-links");
const wrapper = document.querySelector(".wrapper");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    closeBtn.classList.toggle("active");
    navLink.classList.toggle("active");
    wrapper.classList.toggle("active");
})

closeBtn.addEventListener("click", () => {
    closeBtn.classList.remove("active");
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active");
    wrapper.classList.toggle("active");
})

document.querySelectorAll('.nav-item').forEach(el => el.addEventListener("click", () => {
    closeBtn.classList.remove("active");
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active");
}))