//====================SLide Show============================
let imgs = document.querySelectorAll(".list-show");
let listImg = document.querySelector(".list-img");
let btnRight = document.querySelector(".btn-right-slideShow");
let btnLeft = document.querySelector(".btn-left-slideShow");
let btnSlide = document.querySelectorAll(".item-slideShow");
let current = 0;

function showSlide(index) {
  current = index;
  let width = imgs[3].offsetWidth;
  listImg.style.transform = `translateX(${width * -1 * current}px)`;
  activeBanner();
}

function activeBanner() {
  document.querySelector(".active-banner").classList.remove("active-banner");
  document
    .querySelector(".slide-item-" + current)
    .classList.add("active-banner");
}

function changeSlide() {
  let width = imgs[3].offsetWidth;
  if (current === imgs.length - 1) {
    current = 0;
    listImg.style.transform = `translateX(0px)`;
    activeBanner();
  } else {
    current++;
    listImg.style.transform = `translateX(${width * -1 * current}px)`;
    activeBanner();
  }
}
let changeSlideItv = setInterval(() => {
  changeSlide();
}, 4000);
//----Right
btnRight.addEventListener(`click`, function () {
  clearInterval(changeSlideItv);
  changeSlide();
  changeSlideItv = setInterval(() => {
    changeSlide();
  }, 4000);
});
//----Left
btnLeft.addEventListener(`click`, function () {
  clearInterval(changeSlideItv);
  let width = imgs[3].offsetWidth;
  if (current == 0) {
    current = imgs.length - 1;
    listImg.style.transform = `translateX(${width * -1 * current}px)`;
    activeBanner();
  } else {
    current--;
    listImg.style.transform = `translateX(${width * -1 * current}px)`;
    activeBanner();
  }
  changeSlideItv = setInterval(() => {
    changeSlide();
  }, 4000);
});
//---------btn bottom--------
btnSlide.forEach(function (btn, index) {
  btn.addEventListener(`click`, function () {
    clearInterval(changeSlideItv);
    showSlide(index);
    changeSlideItv = setInterval(() => {
      changeSlide();
    }, 4000);
  });
});
//====================item-category===============================================
let listCategorys = document.querySelectorAll(".list-category");
let btnRightCategory = document.querySelector(".btn-right-category");
let btnLeftCategory = document.querySelector(".btn-left-category");

Array.from(listCategorys).forEach(function (listCategory) {
  let widthListC = listCategory.scrollWidth;
  let widthClientC = listCategory.offsetWidth;

  btnRightCategory.addEventListener("click", function () {
    let i = 1;
    let widthTranC = widthListC - widthClientC * i;
    let currentCategory = 0;
    if (widthTranC <= 1200) {
      listCategory.style.transform = `translateX(${
        widthTranC * -1 + currentCategory
      }px)`;
      // btnRightCategory.style.display = `none`;
      // btnLeftCategory.style.display = `flex`;
    } else {
      widthTranC = 1200;
      listCategory.style.transform = `translateX(${widthTranC * -1 * i}px)`;
      i++;
      currentCategory += 1200;
      
    }
  });
  btnLeftCategory.addEventListener("click", function () {
    listCategory.style.transform = `translateX(0px)`;
    // btnLeftCategory.style.display = `none`;
    // btnRightCategory.style.display = `flex`;
  });
});

//-----countdown flash sale-----------
let endDay = new Date("07/27/2024").getTime();

function formTime(time) {
  return time < 10 ? "0" + time : time;
}

let countdown = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDay - now;
  const day = Math.floor(distance / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor(
    Math.floor(distance % (60 * 60 * 1000)) / (60 * 1000)
  );
  const seconds = Math.floor(Math.floor(distance % (60 * 1000)) / 1000);
  let formatDay = formTime(day);
  let formatHours = formTime(hours);
  let formatMinutes = formTime(minutes);
  let formatSeconds = formTime(seconds);

  document.querySelector("#day").innerText = formatDay;
  document.querySelector("#hours").innerText = formatHours;
  document.querySelector("#minutes").innerText = formatMinutes;
  document.querySelector("#seconds").innerText = formatSeconds;

  if (distance < 0) {
    clearInterval(countdown);
  }
}, 1000);
