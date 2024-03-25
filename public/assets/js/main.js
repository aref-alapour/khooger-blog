const overlay = document.querySelector("#overlay"),
  mobileMenuIcon = document.querySelector("#mobileMenuIcon"),
  MobileMenuSection = document.querySelector("#MobileMenuSection"),
  MenuCloseIcon = document.querySelector("#MenuCloseIcon"),
  tabsTitle = document.querySelectorAll(".tabs-title"),
  contentTab = document.querySelectorAll(".tab-content");

let overlayFunc = function ($type) {
  if ($type) {
    overlay.classList.remove("hidden");
    setTimeout(() => {
      overlay.classList.remove("scale-0");
    }, 100);
  }
  if (!$type) {
    overlay.classList.add("scale-0");
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
  }
};
let menuSectionFunc = function ($type) {
  if ($type) {
    MobileMenuSection.classList.remove("translate-x-80");
  }
  if (!$type) {
    MobileMenuSection.classList.add("translate-x-80");
  }
};
let MenuCloseIconFunc = function ($type) {
  if ($type) {
    MenuCloseIcon.classList.remove("-translate-x-10");
  }
  if (!$type) {
    MenuCloseIcon.classList.add("-translate-x-10");
  }
};
let tabActive = function () {
  tabsTitle.forEach((element) => {
    element.classList.remove("active");
  });
};
let contentTabActive = function () {
  contentTab.forEach((element) => {
    element.classList.add("hidden");
  });
};
overlay.addEventListener("click", () => {
  overlayFunc();
  menuSectionFunc();
  MenuCloseIconFunc();
});

mobileMenuIcon.addEventListener("click", () => {
  overlayFunc("open");
  menuSectionFunc("open");
  MenuCloseIconFunc("open");
});
MenuCloseIcon.addEventListener("click", () => {
  overlayFunc();
  menuSectionFunc();
  MenuCloseIconFunc();
});
tabsTitle.forEach((element) => {
  element.addEventListener("click", function () {
    tabActive();
    let typeMenu = element.getAttribute("data-menu");
    let typeContent = document.getElementById(typeMenu);
    element.classList.add("active");
    contentTabActive();
    typeContent.classList.remove("hidden");
  });
});

// BlogSection Slider
document.addEventListener("DOMContentLoaded", () => {
  const swiper_last_blog_section = new Swiper(".swiper_last_blog_section", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".teacher_section_slider_next",
      prevEl: ".teacher_section_slider_prev",
    },
  });
});


// CommentSection Slider
document.addEventListener("DOMContentLoaded", () => {
  const swiper_last_blog_section = new Swiper(".swiper_last_blog_section", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".teacher_section_slider_next",
      prevEl: ".teacher_section_slider_prev",
    },
  });
const commentSwiper = new Swiper(".swiper-comment", {
  spaceBetween: 16,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-comment-slide-left",
    prevEl: ".swiper-comment-slide-right"
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
});