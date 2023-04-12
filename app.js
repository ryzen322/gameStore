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
