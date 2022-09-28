const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const section = $$(".section");

$$(".nav li a").forEach((li, ind) => {
  li.onclick = (e) => {
    e.preventDefault();
    [...$$(".section")].map((sec3) => sec3.classList.remove("back-section"));
    [...$$(".section")].map((sec2) => {
      if (sec2.classList.contains("active")) {
        sec2.classList.add("back-section");
      }
      sec2.classList.remove("active");
    });
    [...$$(".section")].map((sec) => sec.classList.remove("active"));
    [...$$(".nav li a")].map((i) => i.classList.remove("active"));
    li.classList.add("active");
    [...$$(".section")][ind].classList.add("active");
    toggleAside();
  };
});

$(".nav-toggler").onclick = () => {
  toggleAside();
};
function toggleAside() {
  $(".aside").classList.toggle("open");
  [...$$(".section")].map((s) => s.classList.toggle("open"));
  $(".nav-toggler").classList.toggle("open");
}

if (window.innerWidth < 1200) {
  $(".aside").classList.remove("open");
  $(".nav-toggler").classList.remove("open");
  $(".section").classList.remove("open");
}

$$(".hire-me").forEach((hm) => {
  hm.onclick = (e) => {
    e.preventDefault();
    [...$$(".section")].map((sec2) => {
      if (sec2.classList.contains("active")) {
        sec2.classList.add("back-section");
      }
      sec2.classList.remove("active");
    });
    const target = hm.getAttribute("href").split("#")[1];
    $(`.${target}`).classList.add("active");
    [...$$(".nav li a")].map((i) => i.classList.remove("active"));
    $(".nav-contact").classList.add("active");
  };
});

const typed = new Typed(".typing", {
  strings: [
    "",
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "Photographer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
const subTyped = new Typed(".sub-typing", {
  strings: [
    "",
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "Photographer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const tl = gsap.timeline();
tl.fromTo(
  ".intro-text span",
  { y: "100%" },
  { y: 0, duration: 0.4, stagger: 0.4, delay: 0.4 }
)
  .to(".intro-text span", {
    y: "-100%",
    duration: 0.4,
    stagger: 0.2,
    delay: 0.6,
  })
  .to(".sub-intro", { y: "-100%", duration: 0.9 })
  .to(".intro", { y: "-100%", duration: 0.4, delay: 0.4 }, "-=.6");
