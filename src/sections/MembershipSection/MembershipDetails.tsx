const Membership = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-10 pb-20 pl-10 pr-10">
      <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-slate-800 p-[2px] backdrop-blur-3xl">
        <span className="absolute inset-[-1000%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F23005_0%,#F2055C_50%,#F2E205_100%)]" />
        <div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <h1>Chi7aja</h1>
          <h3 className="mt-5 ml-8 font-palanquin text-2xl leading-normal text-justify">
            Whether engaging in intense multiplayer battles, exploring new game
            releases, or participating
          </h3>
        </div>
      </div>
      <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-slate-800 p-[2px] backdrop-blur-3xl">
        <span className="absolute inset-[-1000%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F23005_0%,#F2055C_50%,#F28705_100%)]" />
        <div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <h3>Chi7aja</h3>
        </div>
      </div>
    </section>
  );
};

export default Membership;
