import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Machinery } from "@/components/sections/Machinery";
import { PebStructure } from "@/components/sections/PebStructure";
import { ManufacturingProcess } from "@/components/sections/ManufacturingProcess";
import { QualityAssurance } from "@/components/sections/QualityAssurance";
import { AssemblyShowcase } from "@/components/sections/AssemblyShowcase";
import { Certifications } from "@/components/sections/Certifications";
import { Sectors } from "@/components/sections/Sectors";
import { Facility } from "@/components/sections/Facility";
import { Sustainability } from "@/components/sections/Sustainability";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <WhyUs />
      <Services />
      <Machinery />
      <PebStructure />
      <ManufacturingProcess />
      <QualityAssurance />
      <AssemblyShowcase />
      <Certifications />
      <Sectors />
      <Facility />
      <Sustainability />
      <Faq />
      <Contact />
    </>
  );
}
