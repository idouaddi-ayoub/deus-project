import Vision from "../../assets/images/Vision.jpg";

const AboutusDetails2 = () => {
  return (
    <>
      <section className="max-container flex justify-center flex-wrap gap-10 pb-20 pl-10 pr-10">
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10">
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-center">
            <img
              src={Vision}
              alt="logo"
              className="justify-center rounded-game-img-border select-none"
              width={1080}
              height={1080}
              draggable="false"
            />
          </h3>
        </div>
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16">
          <h1 className="mt-5 ml-8 font-palanquin text-4xl leading-normal font-bold text-justify">
            Our Vision
          </h1>
          <h3 className="mt-5 ml-8 font-palanquin text-2xl leading-normal text-justify">
            The gaming center serves as a training ground for teams, offering
            coaching sessions, strategy workshops, and access to
            professional-level resources. With a dedicated esports arena,
            complete with spectator seating and advanced streaming capabilities,
            the center aims to elevate the esports experience, fostering a sense
            of excitement and community engagement
          </h3>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default AboutusDetails2;
