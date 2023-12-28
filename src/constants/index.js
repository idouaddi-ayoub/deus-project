import {
  facebook,
  instagram,
  twitch,
  pc,
  controller,
  wheel,
} from "../assets/icons";

//Images
import { AssassinCreed, jinx, DEUS, Sova } from "../assets/images";
//Games
import {
  ApexLegends,
  CounterStrike2,
  StreetFighter6,
  RocketLeague,
  FC24,
  Fortnite,
  GodOfWar,
  LeagueOfLegends,
  Valorant,
} from "../assets/images";

export const navlink = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/games", label: "Games" },
  { href: "/membership", label: "Membership" },
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
    link: "https://www.twitch.tv/48_tv",
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
      // { name: "PC Components", link: "/pccomponents" },
      { name: "Membership", link: "/membership" },
      // { name: "Coming soon", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/aboutus" },
      // { name: "FAQs", link: "/faq" },
      // { name: "How it works", link: "/howitworks" },
      // { name: "Support", link: "/privacypolicy" },
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

export const gameData = [
  {
    id: 1,
    img: ApexLegends,
    name: "ApexLegends",
  },
  {
    id: 2,
    img: CounterStrike2,
    name: "CounterStrike2",
  },
  {
    id: 3,
    img: StreetFighter6,
    name: "StreetFighter6",
  },
  {
    id: 4,
    img: RocketLeague,
    name: "RocketLeague",
  },
  {
    id: 5,
    img: FC24,
    name: "FC24",
  },
  {
    id: 6,
    img: Fortnite,
    name: "Fortnite",
  },
  {
    id: 7,
    img: GodOfWar,
    name: "GodOfWar",
  },
  {
    id: 8,
    img: LeagueOfLegends,
    name: "LeagueOfLegends",
  },
  {
    id: 9,
    img: Valorant,
    name: "Valorant",
  },
  {
    id: 10,
    img: ApexLegends,
    name: "DEUS",
  },
];

export const slideLeft = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft - 500;
};

export const slideRight = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft + 500;
};

const SmoothHorizontalScroll = ({ children }) => {
  const ref = useRef();

  const bind = useDrag(({ movement: [mx] }) => {
    ref.current.scrollLeft -= mx;
  });
};
