import { AssassinCreedDark } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex bg-no-repeat bg-cover bg-fixed flex-col justify-center gap-10"
      style={{
        backgroundImage: `url(${AssassinCreedDark})`,
      }}
    >
      <div className="relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-8">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="text-white-400 xl:whitespace-nowrap relative pr-10 ">
            Deus Gaming
          </span>
          <br />
          <span className="text-red-300 inline-block mt-3">
            Master the Game
          </span>
        </h1>
        <p className="font-montserrat text-white-400 text-2xl leading-loose mt-6 mb-14 sm:max-w-screen-md font-bold ">
          Welcome to Deus Gaming Center Association based in Agadir, your haven
          for gathering gaming enthusiasts !
        </p>
        <button
          type="button"
          className="text-white text-3xl border border-gray-800 hover:bg-gray-900 bg-red-300 
          focus:ring-4 focus:outline-none focus:ring-gray-300 
          font-medium font-montserrat rounded-lg px-12 py-2.5 text-center mr-2 mb-2
          dark:border-gray-600  dark:hover:bg-red-300 dark:hover:bg-opacity-50 dark:focus:ring-red-900"
        >
          Learn More
        </button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"></div>
      </div>
    </section>
  );
};

export default Hero;
