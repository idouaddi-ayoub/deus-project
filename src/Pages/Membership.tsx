import MembershipHero from "../sections/MembershipSection/MembershipHero";
import MembershipDetails from "../sections/MembershipSection/MembershipDetails";
// import MembershipDetails2 from "../sections/MembershipSection/MembershipDetails2";

const Membership = () => {
  return (
    <main className=" space-y-16">
      <MembershipHero />
      <MembershipDetails />
      {/* <MembershipDetails2 /> */}
    </main>
  );
};

export default Membership;
