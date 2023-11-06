console.log("Hello world!");
// const h1 = document.querySelector(".heading-primary");
// console.log(h1);
// h1.textContent = "Sarah";

// h1.addEventListener("click", function () {
//   h1.style.background = "blue";
//   h1.style.color = "#fff";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Navigation
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector("header");

btnNav.addEventListener("click", function () {
  // toggle looks at element, adds nav-open class if it's not there
  header.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Updating current year in footer
const yearElement = document.querySelector(".current-year");
const date = new Date().getFullYear();
yearElement.textContent = date;

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      // Removes nav-open if it's on the header
      header.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky header after hero section

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // !ent.isIntersecting
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // Inside viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
