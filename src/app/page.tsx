import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Craft } from "@/components/Craft";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Craft />
        <About />
        <Contact />
      </main>
    </>
  );
}
