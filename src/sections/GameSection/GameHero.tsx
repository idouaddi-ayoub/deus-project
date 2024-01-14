import { GamesBg } from "../../assets/images/";

const GameHero = () => {
  return (
    <section
      className="w-full h-screen flex bg-no-repeat bg-cover bg-fixed flex-col justify-center gap-10"
      style={{
        backgroundImage: `url(${GamesBg})`,
      }}
    >
      <div className="relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-8">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="text-red-300 xl:whitespace-nowrap relative pr-10 ">
            Deus Gaming
          </span>
          <br />
          <span className="text-white-400 inline-block mt-3">
            Master the Game
          </span>
        </h1>
        <p className="font-montserrat text-white-400 text-2xl leading-loose mt-6 mb-14 sm:max-w-screen-md font-bold ">
          Welcome to Deus Gaming Center Association based in Agadir, your haven
          for gathering gaming enthusiasts !
        </p>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"></div>
      </div>
    </section>
  );
};

export default GameHero;
