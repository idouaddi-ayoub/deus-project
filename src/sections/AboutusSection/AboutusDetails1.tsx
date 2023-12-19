import DeusDetails from "../../assets/images/DeusDetails.jpeg";

const AboutusDetails = () => {
  return (
    <>
      <section className="max-container flex justify-center flex-wrap gap-10 pb-20 pl-10 pr-10">
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10">
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-center">
            <img
              src={DeusDetails}
              alt="logo"
              className="justify-center"
              width={1080}
              height={1080}
            />
          </h3>
        </div>
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16">
          <h1 className="mt-5 ml-8 font-palanquin text-4xl leading-normal font-bold text-justify">
            Our Mission
          </h1>
          <h3 className="mt-5 ml-8 font-palanquin text-2xl leading-normal text-justify">
            Whether engaging in intense multiplayer battles, exploring new game
            releases, or participating in community-led initiatives, the gaming
            center stands as a testament to the power of shared interests and
            the ability of gaming to bring people together.
          </h3>
        </div>
      </section>
    </>
  );
};

export default AboutusDetails;
