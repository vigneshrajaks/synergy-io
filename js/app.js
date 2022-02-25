var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////
/// Smooth scrolling animation ///

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const secEl = document.querySelector(href);
      secEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const sr = ScrollReveal({
  distance: "100px",
  duration: 750,
  // reset: true,
});

sr.reveal(`.heading-primary, .heading-secondary`, {
  origin: "left",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(`.hero-description, .about-description`, {
  origin: "right",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(
  `.offer-item, .pricing-price-box, .pricing-list-box, .pricing-img-box, .copyright, .main-nav-link`,
  {
    origin: "bottom",
    interval: 300,
    opacity: 0,
    easing: "ease",
  }
);
