import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyAttend from "@/components/WhyAttend";
import WhatsIncluded from "@/components/WhatsIncluded";
// import WhoShouldAttend from "@/components/WhoShouldAttend";
import FeaturedSpeaker from "@/components/FeaturedSpeaker";
import Networking from "@/components/Networking";
// import PadelExperience from "@/components/PadelExperience";
import Agenda from "@/components/Agenda";
import Sponsors from "@/components/Sponsors";
import TicketSelection from "@/components/TicketSelection";
import BecomeSponsor from "@/components/BecomeSponsor";
import VipRegistration from "@/components/VipRegistration";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyAttend />
        <WhatsIncluded />
        {/* <WhoShouldAttend /> */}
        <FeaturedSpeaker />
        <Networking />
        {/* <PadelExperience /> */}
        <Agenda />
        <TicketSelection />
        <Sponsors />
        <BecomeSponsor />
        <VipRegistration />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
