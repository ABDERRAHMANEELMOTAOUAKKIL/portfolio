// src/data/projects.js
import imageeci from '../images/Logo-eci-2.png';
import Logo2 from '../images/Logo2.svg';
import Logo3 from '../images/Logo-Water.png';
import apf from "../images/apf.svg"
import imgdefault from "../images/default-image.webp"

const projects = [
  {
    name: "Eci ",
    description: "An engineering consulting firm that works in various areas of sustainable development, including the environment, climate change, the green economy and financing, private sector development, and many others.",
    link: "https://eci.yanvision.ma/en/",
    imgSrc: imageeci,
    tools: ["Wagtail", "Django", "PostgreSQL"]

    
  },
  {
    name: "IronParts",
    description: "E-comerce is a specialized e-commerce platform dedicated to providing a comprehensive range of car materials and accessories. Catering to both automotive enthusiasts and professionals, E-comerce offers an extensive selection of high-quality products designed to enhance vehicle performance, maintenance, and customization.",
    link: "https://ironparts.yanvision.ma/",
    imgSrc: Logo2,
    tools: ["Wagtail", "Django", "PostgreSQL","Dashboard Quasar"]

  },
  {
    name: "Obleu",
    description: "Obleu is a leading e-commerce platform dedicated to offering a wide range of premium pool materials and accessories. Whether you're building a new pool, upgrading an existing one, or maintaining your pool, Obleu provides high-quality products and solutions to meet all your needs..",
    link: "https://obleu.yanvision.ma/",
    imgSrc: Logo3,
    tools: ["Wagtail", "Django", "PostgreSQL","Dashboard Quasar"]

  },
  {
    name: "Opti",
    description: "Opti provides comprehensive information about each product, including specifications, benefits, and usage tips. Educational resources such as blog posts and FAQs help customers stay informed about improvements.",
    link: "https://www.opti.yanvision.ma/",
    imgSrc: imgdefault,
    tools: ["Wagtail", "Django", "Docker"]

  },
  {
    name: "Apf",
    description: "Apf provides comprehensive information about each product, including specifications, benefits, and usage tips. Educational resources such as blog posts and FAQs help customers stay informed about improvements.",
    link: "https://apf.yanvision.ma/",
    imgSrc: apf,
    tools: ["Wagtail", "Django", "Docker"]

  }
];

  export default projects;
  