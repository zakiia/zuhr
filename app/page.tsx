import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import IntroBand from "@/components/IntroBand";
import Shop from "@/components/Shop";
import Story from "@/components/Story";
import FeatureSplit from "@/components/FeatureSplit";
import Essence from "@/components/Essence";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <IntroBand />
      <Shop />
      <Story />
      <FeatureSplit />
      <Essence />
      <Gallery />
      <Footer />
    </main>
  );
}
