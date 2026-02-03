import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

import Metadata from "next/head";


const metadata = {
  title: "testing",
  description: "testing"
};

export default function Home() {
  return (
    <>
      <Metadata>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Metadata>
      <ScrollUp />
      <Hero />
      
      <AboutSectionOne />
      
    </>
  );
}
