import { Background } from "../assets/images";

const AboutUsHero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex bg-no-repeat bg-cover bg-fixed flex-col justify-center gap-10"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-8">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="text-white-400 xl:whitespace-nowrap relative pr-10 ">
            Who are we
          </span>
        </h1>
        <p className="font-montserrat text-white-400 text-xl leading-loose mt-10 mb-14 sm:max-w-screen-md font-bold ">
          Deus is a meeting place for gamers of all levels, where they can play,
          chat, and share their passion for video games. We deeply believe that
          gaming is not just entertainment, it's also a career opportunity.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHero;
