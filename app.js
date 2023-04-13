const backdrop = document.querySelector(".backdrop");

const showLanguage = document.querySelector(".display-language");
const languages = document.querySelector(".navigation__signin--icons");

languages.addEventListener("mouseover", () => {
  showLanguage.hasAttribute("id") && showLanguage.removeAttribute("id");
});

languages.addEventListener("mouseout", () => {
  showLanguage.setAttribute("id", "display-none");
});

const signIn = document.querySelectorAll(".navigation__signin--icons");
const singUpForm = document.querySelector(".signup");

signIn[1].addEventListener("click", () => {
  console.log(singUpForm);
  console.log(backdrop);

  if (singUpForm.hasAttribute("id") && backdrop.hasAttribute("id")) {
    singUpForm.removeAttribute("id");
    backdrop.removeAttribute("id");
  }
});

const closeForm = document.querySelector(".signup__btn");

closeForm.addEventListener("click", () => {
  singUpForm.setAttribute("id", "display-none");
  backdrop.setAttribute("id", "display-none");
});

const signUp = document.querySelector(".signup__box--icons");

const typeOfAccount = [
  {
    name: "Epic Games",
    img: "./img/logo.png",
    backGroundColor: "#353535",
  },
  {
    name: "Facebook",
    img: "./img/facebooklogo.png",
    backGroundColor: "#3261a3",
  },
  {
    name: "Google",
    img: "./img/googleLogo.png",
    backGroundColor: "#fefdfd",
  },
  {
    name: "Xbox Live",
    img: "./img/xboxlogo.png",
    backGroundColor: "#027d00",
  },
  {
    name: "account for PlayStation™Network",
    img: "./img/playstationlogo.png",
    backGroundColor: "#0063c5",
  },
  {
    name: "Nintendo Account",
    img: "./img/nintentologo.png",
    backGroundColor: "#ffff",
  },
  {
    name: "Steam",
    img: "./img/steamlogo.png",
    backGroundColor: "#145c8f",
  },
  {
    name: "Apple",
    img: "./img/applelogo.png",
    backGroundColor: "#ffffff",
  },
];

typeOfAccount.forEach(({ name, img, backGroundColor }) => {
  const html = `       
<div class="icons-box">
  <div class="icons-box__logo" style="background-color: ${backGroundColor};">
    <img src="${img}" alt="">
  </div>

  <h2>Sign In with ${name}</h2>
  
  
</div>`;

  signUp.insertAdjacentHTML("beforeend", html);
});

const store = document.querySelector(".main__menu--store");

const storeArray = [
  {
    name: "Spring Sale",
    subImg: "./img/SubBg-1.png",
  },
  {
    name: "Dead Island 2",
    subImg: "./img/SubBg-2.png",
  },
  {
    name: "STAR WARS Jedi: Survivor™",
    subImg: "./img/SubBg-3.png",
  },
  {
    name: "Tchia™",
    subImg: "./img/SubBg-4.png",
  },
  {
    name: "Dying Light 2 Stay Human",
    subImg: "./img/SubBg-5.png",
  },
  {
    name: "Genshim Impact",
    subImg: "./img/SubBg-6.png",
  },
];

const sample = [];

storeArray.forEach(({ name, subImg }) => {
  const html = `  <div class="store-item">

  <div class="background-style">

  </div>

  <div class="store-item__logo">
    <img src="${subImg}" alt="">
  </div>

  <div class="store-item__text">
    <h1>${name}</h1>
  </div>

</div>`;

  store.insertAdjacentHTML("beforeend", html);
});

const scroll = document.querySelector(".scroll");

scroll.addEventListener("mouseover", () => {
  const logo = document.querySelector(".scroll-logo");
  logo.style.opacity = "1";
  logo.style.left = "0";
});

scroll.addEventListener("mouseout", () => {
  const logo = document.querySelector(".scroll-logo");
  logo.style.opacity = "0";
  logo.style.left = "7rem";
});

function visible() {
  const logo = document.querySelector(".scroll-logo");
  logo.style.opacity = "1";
  logo.style.left = "0";
}

function hide() {
  const logo = document.querySelector(".scroll-logo");
  logo.style.opacity = "0";
  logo.style.left = "7rem";
}

// selecting all element in scroll bar

const scrollLogo = document.querySelector(".scroll-logo");
const scrollText = document.querySelector(".scroll-text");
const scrollPrice = document.querySelector(".scroll-price");
const scrollBtn = document.querySelector(".scroll-btn__purchase");
const scrollBgImg = document.querySelector(".scroll__img");

const bgImg = scrollBgImg.querySelector("img"); //src
const logo = scrollLogo.querySelector("img"); //src
const date = scrollText.querySelector("p"); //textContent
const text = scrollText.querySelector("h2"); //textContent
const price = scrollPrice.querySelector("p"); //textContent
const btn = scrollBtn.querySelector("h2"); //textContent

console.log(logo);

const storeItem = document.querySelectorAll(".store-item");

const listOfArray = [
  {
    backGroundImage: "./img/backgroundimg-1.jpg",
    backGroundLogo: "./img/Headerbg-0.png",
    date: "APRIL 6 - APRIL 20",
    text: "Spring Sale has sprung! This season, save big on your favorite titles and grow your library",
    price: "",
    button: "SAVE Now",
  },

  {
    backGroundImage: "./img/backgroundimg-2.jpg",
    backGroundLogo: "./img/Headerbg-1.png",
    date: "AVAIVLABE APRIL 21",
    text: "Explore iconic, gore-drenched Los Angeles and evolve to become the ultimate Zombie Slayer",
    price: "Starting at Php 2,933.00",
    button: "PRE-PURCHNASE NOW",
  },

  {
    backGroundImage: "./img/backgroundimg-3.jpg",
    backGroundLogo: "./img/Headerbg-2.png",
    date: "COMING SOON",
    text: `The story of Cal Kestis continues! Pre-purchase now to outfit Cal with the "Jedi Survival" Cosmetic Pack.`,
    price: "Starting at Php 2,999.00",
    button: "PRE-PURCHNASE NOW",
  },

  {
    backGroundImage: "./img/backgroundimg-4.jpg",
    backGroundLogo: "./img/Headerbg-3.png",
    date: "AVAILABLE NOW",
    text: `Embark on your tropical adventure with Tchia. Set sail for a beautiful, open-world tropical adventure inspired by New Caledonia.`,
    price: "Starting at Php 1,495.00",
    button: "BUY NOW",
  },
  {
    backGroundImage: "./img/backgroundimg-5.jpg",
    backGroundLogo: "./img/Headerbg-4.png",
    date: "ON SALE",
    text: `The virus won and civilization has fallen back to the Dark Ages. Survive and reshape the world.`,
    price: "Starting at Php 1,495.00",
    button: "BUY NOW",
  },
  {
    backGroundImage: "./img/backgroundimg-6.jpg",
    backGroundLogo: "./img/Headerbg-5.png",
    date: "VERSION 3.6 NOW AVAILABLE",
    text: `Experience Akademiya's first major celebration. Meet Baizhu anmd Kaveh, and expand into a new area of wasteland and oasis.`,
    price: "FREE",
    button: "PLAY FOR FREE",
  },
];

storeItem.forEach((e, index) => {
  e.addEventListener("click", () => {
    const { backGroundImage, backGroundLogo, date, text, price, button } =
      listOfArray[index];

    bgImg.src = backGroundImage;
    logo.src = backGroundLogo;
    date.textContent = date;
    text.textContent = text;
    price.textContent = price;
    btn.textContent = button;

    visible();
  });

  e.addEventListener("mouseout", () => {
    hide();
  });
});

function displayData(num) {
  const { backGroundImage, backGroundLogo, date, text, price, button } =
    listOfArray[num];

  bgImg.src = backGroundImage;
  logo.src = backGroundLogo;
  date.textContent = date;
  text.textContent = text;
  price.textContent = price;
  btn.textContent = button;

  visible();
}

function showBackGround(count) {
  const storeValue = storeItem[count - 1];
  storeValue.style.backgroundColor = "#252525";

  const data = storeValue.querySelector(".background-style");
  data.style.backgroundColor = "#363636";
  data.style.width = "100%";
}

function hideBackGround(count) {
  const c = count - 1;
  const storeValue = storeItem[c - 1];
  storeValue.style.backgroundColor = "";

  const data = storeValue.querySelector(".background-style");
  data.style.backgroundColor = "";
  data.style.width = "0%";
}

function reset() {
  storeItem.forEach((e) => {
    const el = e.querySelector(".background-style");
    el.style.backgroundColor = "";
  });
}

let count = 0;
let intervalId;

function startInterval() {
  intervalId = setInterval(function () {
    count++;

    // condition

    displayData(count - 1);

    showBackGround(count);

    if (count === 1) {
      const c = count + 4;
      const value = storeItem[c];
      value.style.backgroundColor = "";

      const data = value.querySelector(".background-style");
      data.style.backgroundColor = "";
      data.style.width = "0%";
    }

    if (count === 2) {
      hideBackGround(count);
    }
    if (count === 3) {
      hideBackGround(count);
    }
    if (count === 4) {
      hideBackGround(count);
    }
    if (count === 5) {
      hideBackGround(count);
    }
    if (count === 6) {
      hideBackGround(count);
    }

    if (count === 6) {
      clearInterval(intervalId);

      count = 0;
      setTimeout(startInterval, 4000);
    }
  }, 4000);
}

startInterval();
