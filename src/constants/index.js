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
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: controller,
    label: "Console",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: wheel,
    label: "Simulation",
    subtext: "Our dedicated team is here to assist you every step of the way.",
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
