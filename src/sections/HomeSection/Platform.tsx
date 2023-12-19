import { Card } from "../../constants";
import PlatformCard from "../../components/PlatformCard";

const Platform = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-10 px-10">
      {Card.map((Card) => (
        <PlatformCard key={Card.label} {...Card} />
      ))}
    </section>
  );
};

export default Platform;
