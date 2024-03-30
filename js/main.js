let tabs = document.querySelectorAll('.tab');
if (tabs.length) {
  tabs.forEach(tab => {
    let tab_btns = tab.querySelectorAll('button');
    let tab_items = tab.querySelectorAll('.tab_item');
    tab_btns.forEach((tab_btn, btn_idx) => {
      tab_btn.onclick = () => {
        if (!tab_items[btn_idx].classList.contains('active')) {
          tab_items.forEach((tab_item, item_idx) => {
            if (tab_item.classList.contains('active')) {
              tab_item.classList.remove('active');
              tab_item.classList.add('end-active')
              setTimeout(() => {
                tab_item.classList.remove('end-active')
              }, 200);
            }
          })
          setTimeout(() => {
            tab_items[btn_idx].classList.add('active')
          }, 200);
        }
        tab_btns.forEach(item => {
          item.classList.remove('active')
        })
        tab_btn.classList.add('active')
      }
    })
  })
}

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

let selecting_swiper = document.querySelector('.selecting__swiper');
if (selecting_swiper) {
  let selectingSwiper = new Swiper(selecting_swiper, {
    slidesPerView: 1,
    spaceBetween: 10,
    allowTouchMove: false,
    effect: 'fade',
  })

  document.querySelectorAll('.selecting__swiper .swiper-slide').forEach((el, idx) => {
    let btns = el.querySelectorAll('button');
    btns.forEach(btn => {
      btn.onclick = () => {
        selectingSwiper.slideNext();
      }
    })
  })
}

let services_swiper = document.querySelector('.services__swiper');
if (services_swiper) {
  let servicesSwiper = new Swiper (services_swiper, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: '.services_btns__next',
      prevEl: '.services_btns__prev',
    }
  })
}

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


let init = false;
let quick_search = document.querySelector('.quick_search');
let quickSwiper;

function swiperCard1() {
  let w = this.window.innerWidth;
  if (w <= 768) {
    if (!init) {
      init = true;
      quickSwiper = new Swiper ('.quick_search .swiper', {
        slidesPerView: 1,
        spaceBetween: 36,
        navigation: {
          nextEl: ".quick_search .swiper_btns__next",
          prevEl: ".quick_search .swiper_btns__prev",
        }
      });
    }
  } else if (init) {
    quickSwiper.destroy();
    init = false;
  }
}

if (quick_search) {
  swiperCard1();
}

window.addEventListener('resize', function () {
  if (quick_search) {
    swiperCard1();
  }
})

// window.addEventListener("resize", function () {
//   console.log(window.innerWidth);
//   if (quick_search) {
//     swiperCard1()
//   }
// });