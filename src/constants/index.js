import {
  facebook,
  instagram,
  twitter,
  pc,
  controller,
  wheel,
} from "../assets/icons";

export const navlink = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#games", label: "Games" },
  { href: "#special-offer", label: "Special Offer" },
];

export const Card = [
  {
    imgURL: pc,
    label: "PC",
    subtext:
      "Experience gaming without limits on our high-performance gaming computers, where power meets precision.",
  },
  {
    imgURL: controller,
    label: "Console",
    subtext:
      "Elevate your gaming adventures with the PS5, where stunning graphics and lightning-fast load times redefine your gaming experience.",
  },
  {
    imgURL: wheel,
    label: "Simulation",
    subtext:
      "Get ready to hit the virtual road with our state-of-the-art driving simulation setups, bringing the thrill of racing right to your home.",
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Chi7aja", link: "/" },
      { name: "Age", link: "/" },
      { name: "Balls", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "deusexmachinaprogaming@gmail.com",
        link: "mailto: deusexmachinaprogaming@gmail.com",
      },
      { name: "+212 642426298", link: "tel:+212642426298" },
    ],
  },
];
