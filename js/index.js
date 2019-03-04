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

// nav

let navItems = siteContent["nav"];

const navBar = document.querySelectorAll("a");

navBar.forEach(function(item, i) {
  item.textContent = navItems[`nav-item-${i + 1}`];
  item.style.color = "green";
});

const navAdditions = ["Specials", "Follow"];
console.log(navAdditions);
navAdditions.forEach(currentValue => {
  const newNav = document.createElement("a");
  const navList = document.querySelector("nav");
  newNav.textContent = currentValue;
  navList.append(newNav);
});

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// cta
let ctaItems = siteContent["cta"];
const ctaHeader = document.getElementsByTagName("h1");
ctaHeader[0].textContent = ctaItems["h1"];

const ctaButton = document.getElementsByTagName("button");
ctaButton[0].textContent = ctaItems["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// //top-content

let mainContent = siteContent["main-content"];

const featuresHeader = document.querySelectorAll("h4")[0];
featuresHeader.textContent = mainContent["features-h4"];

const featuresContent = document.querySelectorAll("p")[0];
featuresContent.textContent = mainContent["features-content"];

const aboutHeader = document.querySelectorAll("h4")[1];
aboutHeader.textContent = mainContent["about-h4"];

const aboutContent = document.querySelectorAll("p")[1];
aboutContent.textContent = mainContent["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const servicesHeader = document.querySelectorAll("h4")[2];
servicesHeader.textContent = mainContent["services-h4"];

const servicesContent = document.querySelectorAll("p")[2];
servicesContent.textContent = mainContent["services-content"];

const productsHeader = document.querySelectorAll("h4")[3];
productsHeader.textContent = mainContent["product-h4"];

const productsContent = document.querySelectorAll("p")[3];
productsContent.textContent = mainContent["product-content"];

const visionHeader = document.querySelectorAll("h4")[4];
visionHeader.textContent = mainContent["vision-h4"];

const visionContent = document.querySelectorAll("p")[4];
visionContent.textContent = mainContent["vision-content"];

// Contact

let contactSection = siteContent["contact"];

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = contactSection["contact-h4"];

const contactAddress = document.querySelectorAll(".contact p")[0];
contactAddress.textContent = contactSection["address"];

const contactPhone = document.querySelectorAll(".contact p")[1];
contactPhone.textContent = contactSection["phone"];

const contactEmail = document.querySelectorAll(".contact p")[2];
contactEmail.textContent = contactSection["email"];

//footer
let footer = siteContent["footer"];

const footerContent = document.querySelector("footer p");
footerContent.textContent = footer["copyright"];
