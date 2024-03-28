let swiper1 = new Swiper(".repair_homeSwiper", {
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".repair-button-next",
      prevEl: ".repair-button-prev",
    },
});

let swiper2 = new Swiper(".examples_workSwiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".examples_work-next",
    prevEl: ".examples_work-prev",
  },
});

console.log(swiper2);