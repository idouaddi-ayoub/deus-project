const PlatformCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-20 h-20 flex justify-center items-center bg-coral-red rounded-full mx-auto">
        <img src={imgURL} alt={label} width={24 * 2.25} height={24 * 2.25} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-center">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-center">
        {subtext}
      </p>
    </div>
  );
};

export default PlatformCard;
