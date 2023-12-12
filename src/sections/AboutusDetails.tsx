import DeusDetails from "../assets/images/DeusDetails.jpeg";

const AboutusDetails = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-10 p-10">
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10">
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-center">
          <img src={DeusDetails} alt="logo" className="justify-center" />
        </h3>
      </div>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16">
        <h3 className="mt-5 ml-8 font-palanquin text-2xl leading-normal font-bold text-justify">
          We deeply believe that gaming is not just entertainment; it's also a
          career opportunity. That's why Deus Gaming provides its members with
          the first Esports training center in the Souss Massa region, thanks to
          our coaches and state-of-the-art equipment. The Deus Gaming Center is
          your ideal teammate!
        </h3>
      </div>
    </section>
  );
};

export default AboutusDetails;
