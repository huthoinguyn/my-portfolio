//
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.onclick = () => {
  document.querySelector(".style-switcher").classList.toggle("open");
};

window.onscroll = () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
};

// Theme color:

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// theme light & dark

const dayNight = document.querySelector('.day-night')

dayNight.onclick = () => {
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')

}

window.onload = () => {
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun')
    }else{
        dayNight.querySelector('i').classList.add('fa-moon')
    }
}
