
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Tasks 1 and 2:

// create a mapping between DOM elements and siteContent object
// each element of the array has this form:
// ['querySelector', 'contentType', 'section', 'item']

const domMap = [
  ['header nav a:nth-child(1)', 'textContent', 'nav', 'nav-item-1'],
  ['header nav a:nth-child(2)', 'textContent', 'nav', 'nav-item-2'],
  ['header nav a:nth-child(3)', 'textContent', 'nav', 'nav-item-3'],
  ['header nav a:nth-child(4)', 'textContent', 'nav', 'nav-item-4'],
  ['header nav a:nth-child(5)', 'textContent', 'nav', 'nav-item-5'],
  ['header nav a:nth-child(6)', 'textContent', 'nav', 'nav-item-6'],
  ['#logo-img', 'src', 'nav', 'img-src'],
  ['.cta .cta-text h1', 'innerHTML', 'cta', 'h1'],
  ['.cta .cta-text button', 'textContent', 'cta', 'button'],
  ['.cta img', 'src', 'cta', 'img-src'],
  ['.top-content .text-content:nth-child(1) h4', 'textContent', 'main-content', 'features-h4'],
  ['.top-content .text-content:nth-child(1) p', 'textContent', 'main-content', 'features-content'],
  ['.top-content .text-content:nth-child(2) h4', 'textContent', 'main-content', 'about-h4'],
  ['.top-content .text-content:nth-child(2) p', 'textContent', 'main-content', 'about-content'],
  ['#middle-img', 'src', 'main-content', 'middle-img-src'],
  ['.bottom-content .text-content:nth-child(1) h4', 'textContent', 'main-content', 'services-h4'],
  ['.bottom-content .text-content:nth-child(1) p', 'textContent', 'main-content', 'services-content'],
  ['.bottom-content .text-content:nth-child(2) h4', 'textContent', 'main-content', 'product-h4'],
  ['.bottom-content .text-content:nth-child(2) p', 'textContent', 'main-content', 'product-content'],
  ['.bottom-content .text-content:nth-child(3) h4', 'textContent', 'main-content', 'vision-h4'],
  ['.bottom-content .text-content:nth-child(3) p', 'textContent', 'main-content', 'vision-content'],
  ['.contact h4', 'textContent', 'contact', 'contact-h4'],
  ['.contact p:nth-child(2)', 'textContent', 'contact', 'address'],
  ['.contact p:nth-child(3)', 'textContent', 'contact', 'phone'],
  ['.contact p:nth-child(4)', 'textContent', 'contact', 'email'],
  ['footer p', 'textContent', 'footer', 'copyright'],
];



domMap.forEach(entry => {
  [qs, type, section, item] = entry;
  document.querySelector(qs)[type] = siteContent[section][item];
});


// let's add a little bit of formatting to get that address text to wrap better...
const contact = document.querySelector('.contact');
contact.style.width = '200px';

// only way to fix the CTA header was to change the HTML :(


// Task 3: add some stype and add some content



