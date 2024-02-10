import { Sova } from "../../assets/images";
import { HashLink } from "react-router-hash-link";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse">
      <div className="flex-1 flex justify-center relative object-contain select-none">
        <img src={Sova} alt="Shoe Promotion" width={600} draggable="false" />
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
        <div className="mt-6 flex flex-wrap gap-4">
          <HashLink to="/membership#membership">
            <button
              type="button"
              className="text-white text-3xl border border-gray-800 hover:bg-gray-900 bg-red-300 
        focus:ring-4 focus:outline-none focus:ring-gray-300 
        font-medium font-montserrat rounded-lg px-12 py-2.5 text-center mr-2 mb-2
        dark:border-gray-600  dark:hover:bg-red-300 dark:hover:bg-opacity-50 dark:focus:ring-white-700"
            >
              More Details
            </button>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
