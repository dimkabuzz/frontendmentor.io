"use strict";

const faqItems = document.querySelectorAll(".faq-item");
const faqBtns = document.querySelectorAll(".faq-btn");

for (let i = 0; i < faqBtns.length; i++) {
  faqBtns[i].addEventListener("click", function () {
    const activeItem = document.querySelector(".active");
    if (activeItem && activeItem !== faqItems[i])
      activeItem.classList.remove("active");
    faqItems[i].classList.toggle("active");
  });
}
