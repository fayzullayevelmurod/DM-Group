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

let swiper3 = new Swiper(".examples_Swiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".examples_Swiper-next",
    prevEl: ".examples_Swiper-prev",
  },
});

const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}