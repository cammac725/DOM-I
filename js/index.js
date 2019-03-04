const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav
const navItem = document.querySelector("a");
// navItem.forEach(currentValue => {
//   navItem.textContent = ["nav"]["nav-item-1"];
// });

const ctaHeader = document.querySelector("h1");
// ctaHeader.textContent = "DOM Is Awesome";

const ctaButton = document.querySelector("button");

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const featuresHeader = document.querySelector(".top-content h4:nth-of-type(1n)";

const featuresContent = document.querySelector(".top-content p:nth-of-type(1n)");

const aboutHeader = document.querySelector(".top-content h4:nth-of-type(2n)");

const aboutContent = document.querySelector(".top-content p:nth-of-type(2n)");

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const servicesHeader = document.querySelector('.bottom-content h4:nth-of-type(1n)');

const servicesContent = document.querySelector('.bottom-content p:nth-of-type(1n)');

const productsHeader = document.querySelector('.bottom-content h4:nth-of-type(2n)');

const productsContent = document.querySelector('.bottom-content p:nth-of-type(2n)');

const visionHeader = document.querySelector('.bottom-content h4:nth-of-type(3n)');

const visionContent = document.querySelector('.bottom-content p:nth-of-type(3n)');

const contactHeader = document.querySelector('.contact h4');

const contactContent = document.querySelector('.contact p:nth-of-type(1n)');

const contactContent = document.querySelector('.contact p:nth-of-type(2n)');

const contactContent = document.querySelector('.contact p:nth-of-type(3n)');

const footerContent = document.querySelector('footer p');