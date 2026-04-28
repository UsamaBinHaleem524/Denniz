import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Features from "../components/Features";
import HowWeDoIt from "../components/HowWeDoIt";
import Reviews from "../components/Reviews";
import Introduction from "../components/Introduction";
import CaseStudies from "../components/CaseStudies";
import OfficialVideos from "../components/OfficialVideos";
import Genres from "../components/Genres";
import TestimonialVideos from "../components/TestimonialVideos";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <TestimonialVideos />
      <Features />
      <HowWeDoIt />
      <Reviews />
      <Introduction />
      <CaseStudies />
      <OfficialVideos />
      <Genres />
    </>
  );
}
