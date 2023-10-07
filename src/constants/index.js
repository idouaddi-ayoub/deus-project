import {
  facebook,
  instagram,
  twitch,
  pc,
  controller,
  wheel,
} from "../assets/icons";

export const navlink = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/games", label: "Games" },
  { href: "/specialoffer", label: "Special Offer" },
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
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/profile.php?id=100083258262773",
  },
  {
    src: twitch,
    alt: "twitch logo",
    link: "https://www.twitch.tv/deusgtv/about",
  },
  {
    src: instagram,
    alt: "instagram logo",
    link: "https://www.instagram.com/deusgc/",
  },
];

export const footerLinks = [
  {
    title: "Products / Services",
    links: [
      { name: "PC Components", link: "/" },
      { name: "Membership", link: "/" },
      { name: "Coming soon", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/aboutus" },
      { name: "FAQs", link: "/faq" },
      { name: "How it works", link: "/howitworks" },
      { name: "Support", link: "/privacypolicy" },
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
