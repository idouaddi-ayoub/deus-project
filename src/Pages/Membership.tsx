import MembershipHero from "../sections/MembershipSection/MembershipHero";
import CardFlip from "../components/CardFlip";
import MembershipOverview from "../sections/MembershipSection/MembershipOverview";
const Membership = () => {
  return (
    <main className="space-y-16">
      <MembershipHero />
      <MembershipOverview />
      <CardFlip />
    </main>
  );
};

export default Membership;
