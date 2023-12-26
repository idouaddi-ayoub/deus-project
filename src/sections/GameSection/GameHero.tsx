import { AssassinCreed } from "../../assets/images";

const GameHero = () => {
  return (
    <section
      className="w-full h-screen flex bg-no-repeat bg-cover bg-fixed flex-col justify-center gap-10"
      style={{
        backgroundImage: `url(${AssassinCreed})`,
      }}
    ></section>
  );
};

export default GameHero;
