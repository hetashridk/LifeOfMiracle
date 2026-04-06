import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MentalFitness } from "@/components/MentalFitness";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { PodcastBlog } from "@/components/PodcastBlog";
import { Clients } from "@/components/Clients";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navigation />
      <Hero />
      <About />
      <Reviews />
      <MentalFitness />
      <Services />
      <PodcastBlog />
      <Clients />
      <GetStarted />
      <Footer />
    </main>
  );
}
