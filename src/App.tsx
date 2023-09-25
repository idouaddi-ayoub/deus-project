import {
  Games,
  Hero,
  Navbar,
  Overview,
  Services,
  SpecialOffer,
  Footer,
} from "./sections";

const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Overview />
    </section>
    <section className="padding">
      <Games />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <SpecialOffer />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
