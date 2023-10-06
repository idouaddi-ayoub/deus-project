import { Hero, Overview, Platform, SpecialOffer } from "../sections";

const Home = () => {
  return (
    <main className=" space-y-16">
      <Hero />
      <Overview />
      <Platform />
      <SpecialOffer />
    </main>
  );
};

export default Home;
