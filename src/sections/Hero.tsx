import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { jinx } from "../assets/images";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex 
      xl:flex-row flex-col 
      justify-center min-h-screen 
      gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-8">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap relative pr-10">
            Quis nostrud
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Deus</span>GC
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <Button label="Totam rem" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"></div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={jinx} alt="Chi7aja" className="object-contain relative" />
      </div>
    </section>
  );
};

export default Hero;
