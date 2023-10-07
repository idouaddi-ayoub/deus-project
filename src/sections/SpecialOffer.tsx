import { Sova } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse">
      <div className="flex-1 flex justify-center relative object-contain">
        <img src={Sova} alt="Shoe Promotion" width={600} />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text mr-14">
          Embark on a gaming journey that revolutionizes your experience with an
          unbeatable annual membership offer. From top-notch gaming selections
          to incredible savings, we provide unparalleled value that sets us
          apart.
        </p>
        <p className="mt-6 info-text mr-14">
          Explore a world of possibilities crafted to fulfill your gaming
          desires, exceeding the loftiest expectations. Your membership with us
          promises nothing short of an exceptional gaming adventure.
        </p>
        <div className="mt-11 flex flex-wrap gap-4"></div>
      </div>
    </section>
  );
};

export default SpecialOffer;
