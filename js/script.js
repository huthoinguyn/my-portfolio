// About

const timlineEduList = [
  {
    time: "2019 - 2021",
    schoolName: "THPT Thot Not",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere mollitia beatae quae quis, exercitationem doloremque repudiandae, suscipit expedita autem quo hic sequi obcaecati veritatis repellendus eum enim animi quasi. Dolore.",
  },
  {
    time: "2021 - Now",
    schoolName: "FPT Polytechnic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere mollitia beatae quae quis, exercitationem doloremque repudiandae, suscipit expedita autem quo hic sequi obcaecati veritatis repellendus eum enim animi quasi. Dolore.",
  },
];
const timlineExpList = [
  {
    time: "08/2021 - 04/2022",
    title: "HTML - CSS - JavaScript",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere mollitia beatae quae quis, exercitationem doloremque repudiandae, suscipit expedita autem quo hic sequi obcaecati veritatis repellendus eum enim animi quasi. Dolore.",
  },
  {
    time: "04/2022 - 08/2022",
    title: "PHP basic - React basic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere mollitia beatae quae quis, exercitationem doloremque repudiandae, suscipit expedita autem quo hic sequi obcaecati veritatis repellendus eum enim animi quasi. Dolore.",
  },
];

timlineEduList.map((edu) => {
  const template = `
  <div class="timeline-item">
  <div class="circle-dot"></div>
  <h3 class="timeline-date">
      <i class="fa fa-calendar"></i>
      ${edu.time}
      </h3>
      <h4 class="timeline-title">
      ${edu.schoolName}
      </h4>
      <p class="timeline-text">
      ${edu.desc}
      
  </p>
</div>
    `;
  $(".timeline-edu-list").insertAdjacentHTML("beforeend", template);
});
timlineExpList.map((exp) => {
  const template = `
  <div class="timeline-item">
  <div class="circle-dot"></div>
  <h3 class="timeline-date">
      <i class="fa fa-calendar"></i>
      ${exp.time}
      </h3>
      <h4 class="timeline-title">
      ${exp.title}
      </h4>
      <p class="timeline-text">
      ${exp.desc}
      
  </p>
</div>
    `;
  $(".timeline-exp-list").insertAdjacentHTML("beforeend", template);
});

// Portfolio

const portfolioList = [
  {
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    src: "https://huthoinguyn.github.io/ThoaiNHPC04496_ASM_GD1/",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    src: "https://nhtm-usic.vercel.app/",
  },
  {
    img: "https://images.unsplash.com/photo-1499343245400-cddc78a01317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    src: "https://trello-2imezxicm-huthoinguyn.vercel.app/",
  },
  {
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    src: "https://fashion-q84edpl8h-huthoinguyn.vercel.app/",
  },
  {
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    src: "https://fashion-q84edpl8h-huthoinguyn.vercel.app/",
  },
  {
    img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2058&q=80",
    src: "https://fashion-q84edpl8h-huthoinguyn.vercel.app/",
  },
];

portfolioList.map((port) => {
  const template = `
    <div class="portfolio-item p-12">
                    <div class="portfolio-item-inner shadow-dark">
                        <div class="portfolio-img">
                            <img src="${port.img}"
                                alt="">
                        </div>
                        <a href="${port.src}" target='blank' class="visit-website">Visit Website</a>
                        <div class="portfolio-blur"></div>
                    </div>
                </div>
    `;
  $(".portfolio-list").insertAdjacentHTML("beforeend", template);
});

// Service

const serviceList = [
  {
    icon: '<i class="fa fa-mobile-alt">',
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio temporibus id",
  },
  {
    icon: '<i class="fa fa-laptop-code">',
    title: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio temporibus id",
  },
  {
    icon: '<i class="fa fa-code">',
    title: "Backend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio temporibus id",
  },
  {
    icon: '<i class="fa fa-headphones">',
    title: "Photographer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio temporibus id",
  },
  {
    icon: '<i class="fa fa-search">',
    title: "Editor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio temporibus id",
  },
  {
    icon: '<i class="fa fa-palette">',
    title: "Designer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio temporibus id",
  },
];

serviceList.map((ser) => {
  const template = `
  <div class="service-item p-12">
  <div class="service-item-inner">
      <div class="icon">
          ${ser.icon}
          </i>
      </div>
      <h4>${ser.title}</h4>
      <p>
      ${ser.desc}
      </p>
  </div>
</div>
    `;
  $(".service-list").insertAdjacentHTML("beforeend", template);
});
