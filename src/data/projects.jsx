// src/data/projects.js
import imageeci from '../images/Logo-eci-2.png';
// import Logo3 from '../images/Logo-Water.png';
// import apf from "../images/apf.svg"
import imgdefault from "../images/default-image.webp"
import qeralogo from '../images/mg.png';
import electrifylogo from '../images/logo.width-300.png';

const projects = [
  {
    name: "Qera",
    description:"Qera is a smart mobile application designed to scan store shelves and analyze products based on user-defined preferences such as price, health, and ecological impact. The app processes product data in real time and presents a personalized, ranked list to help users make informed purchasing decisions.I worked on building and optimizing core features, focusing on product scanning, data analysis, and user preference filtering to deliver fast and accurate results. The application emphasizes performance, usability, and scalability, providing a seamless experience for users seeking healthier and more sustainable choices.",
    imgSrc: qeralogo,
    tools: ["React Native", "Expo", "API integrations", "data processing & filtering", "performance optimization"],
    link: "https://www.qerapp.com/"
  },
  {
    name: "Eci ",
    description: "An engineering consulting firm that works in various areas of sustainable development, including the environment, climate change, the green economy and financing, private sector development, and many others.",
    link: "https://eci.ma/fr/",
    imgSrc: imageeci,
    tools: ["Wagtail", "Django", "PostgreSQL"]
  },
  {
    name: "Awards Engagement ",
    description: " Engagement Awards, which recognize companies and professionals committed to social, environmental, and societal responsibility. The platform offers information about the awards, eligibility criteria, registration steps, and deadlines. It allows users to submit their applications online, manage their submissions, and access support throughout the process. The awards highlight initiatives that make a real difference, encouraging organizations to showcase their positive impact. The site is available in French and is designed for simplicity, clarity, and user-friendly navigation, making it easy for companies to participate and gain recognition for their engagement efforts.",
    link: "https://awardsengagement.fr/",
    imgSrc: imgdefault,
    tools: ["Wagtail", "Django", "PostgreSQL"]

  },
  {
    name: "Electrify Africa",
    description: "Obleu is a leading e-commerce platform dedicated to offering a wide range of premium pool materials and accessories. Whether you're building a new pool, upgrading an existing one, or maintaining your pool, Obleu provides high-quality products and solutions to meet all your needs..",
    link: "https://electrifyafrica.com/",
    imgSrc: electrifylogo,
    tools: ["Wagtail", "Django", "Docker"]

  },
  // {
  //   name: "Elym Academy",
  //   description: "Elym provides sustainable solutions for eco-responsible event management. Their services include the rental of reusable tableware, waste sorting stations, and zero-waste logistics tailored for corporate events, festivals, and large gatherings. Elym supports clients in reducing their environmental footprint by offering practical, turnkey solutions that replace single-use items. The site highlights their mission, values, and impact, showcasing how events can be both professional and sustainable. With a clean, modern design, the platform allows visitors to learn about Elym’s services, view client testimonials, and easily request quotes or consultations.",
  //   link: "https://elym.green/fr/",
  //   imgSrc: imgdefault,
  //   tools: ["Wagtail", "Django", "Docker"]

  // },
  // {
  //   name: "Apf",
  //   description: "Apf provides comprehensive information about each product, including specifications, benefits, and usage tips. Educational resources such as blog posts and FAQs help customers stay informed about improvements.",
  //   link: "https://apf.yanvision.ma/",
  //   imgSrc: apf,
  //   tools: ["Wagtail", "Django", "Docker"]

  // }
];

  export default projects;
  