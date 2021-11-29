"use strict";

const shareBox = document.querySelector(".article-share-box");
const shareBtn = document.querySelector(".article-share-btn");

shareBtn.addEventListener("click", function () {
  shareBox.classList.toggle("hide-share-box");
  shareBtn.classList.toggle("article-share-btn--active");
});

document.addEventListener("click", function (event) {
  if (!shareBtn.contains(event.target) && !shareBox.contains(event.target)) {
    if (!shareBox.classList.contains("hide-share-box")) {
      shareBox.classList.add("hide-share-box");
      shareBtn.classList.remove("article-share-btn--active");
    }
  }
});
