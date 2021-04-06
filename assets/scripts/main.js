const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// CHANGE BG HEADER

const scrollHeader = () => {
    const nav = document.getElementById("header");
  
    if (this.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  };
  
  window.addEventListener("scroll", scrollHeader);
  
  const scrollTop = () => {
    const scrollTop = document.getElementById("scroll-top");
  
    if (this.scrollY >= 560) scrollTop.classList.add("scroll-top");
    else scrollTop.classList.remove("scroll-top");
  };

  window.addEventListener("scroll", scrollTop);

  /*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
  });

const slideFromLeft = ScrollReveal({
  origin: "left",
  distance: "400px",
  duration: 2000,
  reset: false,
});
slideFromLeft.reveal('.home__title')
slideFromLeft.reveal('.section-title-white')

const slideFromLeftSlow = ScrollReveal({
  origin: "left",
  distance: "100px",
  duration: 2000,
  reset: false,
});
slideFromLeftSlow.reveal('.about-title')


const slideFromBottom = ScrollReveal({
  origin: "bottom",
  distance: "400px",
  duration: 2000,
  reset: false,
});

slideFromBottom.reveal('.home__subtitle')
slideFromBottom.reveal('.home__subtitle-dark')
slideFromBottom.reveal('.about__description')

const slideFromBottomSlow = ScrollReveal({
  origin: "bottom",
  distance: "100px",
  duration: 2000,
  reset: false,
});

slideFromBottomSlow.reveal('.button_more, .button_calc' )
  
  // sr.reveal(
  //   `.home__data, .home__img,
  //             .about__data, .about__img,
  //             .services__content, .menu__content,
  //             .app__data, .app__img,
  //             .contact__data, .contact__button,
  //             .footer__content`,
  //   {
  //     interval: 200,
  //   }
  // );

  // PROGRESS BAR

  function scrollProgressBar() {
    var getMax = function () {
      return $(document).height() - $(window).height();
    };
  
    var getValue = function () {
      return $(window).scrollTop();
    };
  
    var progressBar = $(".progress-bar"),
      max = getMax(),
      value,
      width;
  
    var getWidth = function () {
      // Calculate width in percentage
      value = getValue();
      width = (value / max) * 100;
      width = width + "%";
      return width;
    };
  
    var setWidth = function () {
      progressBar.css({ width: getWidth() });
    };
  
    $(document).on("scroll", setWidth);
    $(window).on("resize", function () {
      // Need to reset max
      max = getMax();
      setWidth();
    });
  }

  
  
    scrollProgressBar();