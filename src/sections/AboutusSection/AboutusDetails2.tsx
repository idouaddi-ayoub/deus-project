import Gamer from "../../assets/images/Gamerfist.jpg";

const AboutusDetails2 = () => {
  return (
    <>
      <section className="max-container flex justify-center flex-wrap gap-10 pb-20 pl-10 pr-10">
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16">
          <h1 className="mt-5 ml-8 font-palanquin text-4xl leading-normal font-bold text-justify">
            Community-Driven
          </h1>
          <h3 className="mt-5 ml-8 font-palanquin text-2xl leading-normal text-justify">
            A collaborative haven where enthusiasts collaborate, compete, and
            forge lasting connections. Run by and for the community, the center
            organizes regular events, tournaments, and workshops, encouraging
            skill development and camaraderie. The inclusive atmosphere fosters
            a sense of belonging, making it a welcoming space for newcomers and
            seasoned gamers alike.
          </h3>
        </div>
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10">
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-center">
            <img
              src={Gamer}
              alt="logo"
              className="justify-center rounded-game-img-border select-none"
              width={1080}
              height={1080}
              draggable="false"
            />
          </h3>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default AboutusDetails2;
