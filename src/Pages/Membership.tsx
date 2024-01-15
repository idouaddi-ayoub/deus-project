import MembershipHero from "../sections/MembershipSection/MembershipHero";
// import MembershipDetails from "../sections/MembershipSection/MembershipDetails";
// import MembershipDetails2 from "../sections/MembershipSection/MembershipDetails2";
import CardFlip from "../components/CardFlip";

const Membership = () => {
  return (
    <main className=" space-y-16">
      <MembershipHero />
      <CardFlip />
      {/* <MembershipDetails2 /> */}
    </main>
  );
};

export default Membership;
