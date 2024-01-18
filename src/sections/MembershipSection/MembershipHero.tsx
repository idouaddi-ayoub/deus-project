import DeusCrown from "../../assets/images/DeusCrown.png";

const Membership = () => {
  return (
    <section
      id="membership"
      className="w-full h-screen flex bg-no-repeat bg-contain bg-right bg-fixed flex-col justify-center gap-10 bg-black"
      style={{
        backgroundImage: `url(${DeusCrown})`,
      }}
    >
      <div className="relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-8">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="text-red-300 xl:whitespace-nowrap relative pr-10 ">
            Membership
          </span>
        </h1>
        <p className="font-montserrat text-white-400 text-2xl leading-loose mt-10 mb-14 sm:max-w-screen-md font-bold ">
          {/* Make it short */}
          For the ultimate gaming adventure, elevate your experience with Deus
          Membership! Unlock a world of unlimited access to cutting-edge gaming
          setups, exclusive events and more. Deus Membership is your passport to
          a premium gaming environment tailored to enthusiasts like you!
        </p>
      </div>
    </section>
  );
};

export default Membership;
