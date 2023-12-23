const Membership = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-10 pb-20 pl-10 pr-10">
      <div className="relative sm:w-[350px] sm:min-w-[350px] overflow-hidden rounded-xl border border-slate-800 p-[2px] backdrop-blur-3xl mt-6">
        <span className="absolute inset-[-1000%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F23005_0%,#F2055C_50%,#F2E205_100%)]" />
        <div className="flex-1 h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <h1 className="mt-5 ml-8 mr-8 font-palanquin text-4xl leading-normal font-bold text-center">
            Hourly
          </h1>
          <h2 className="m-2 mb-8 font-palanquin text-4xl leading-normal text-center">
            15<span className="text-xl">MAD</span>
          </h2>
        </div>
      </div>
      <div className="relative sm:w-[350px] sm:min-w-[350px] overflow-hidden rounded-xl border border-slate-800 p-[2px] backdrop-blur-3xl mt-6">
        <span className="absolute inset-[-1000%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F23005_0%,#F2055C_50%,#F2E205_100%)]" />
        <div className="flex-1 h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <h1 className="mt-5 ml-8 mr-8 font-palanquin text-4xl leading-normal font-bold text-center">
            Semi-Annual
          </h1>
          <h2 className="m-2 mb-8 font-palanquin text-4xl leading-normal text-center">
            560<span className="text-xl">MAD</span>
          </h2>
        </div>
      </div>
      <div className="relative sm:w-[350px] sm:min-w-[350px] overflow-hidden rounded-xl bg-red-500">
        <h2 className="text-xl text-white text-center">
          Save 260<span className="text-xs">MAD</span>
        </h2>
        <div className="relative sm:w-[350px] sm:min-w-[350px] overflow-hidden rounded-xl border border-slate-800 p-[2px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F23005_0%,#F2055C_50%,#F2E205_100%)]" />
          <div className="flex-1 h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <h1 className="mt-5 ml-8 mr-8 font-palanquin text-4xl leading-normal font-bold text-center">
              Annual
            </h1>
            <h2 className="m-2 mb-8 font-palanquin text-4xl leading-normal text-center">
              860<span className="text-xl">MAD</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
