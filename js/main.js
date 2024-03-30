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