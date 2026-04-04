import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { PodcastBlog } from "@/components/PodcastBlog";
import { GetStarted } from "@/components/GetStarted";

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <PodcastBlog />
      <GetStarted />
    </main>
  );
}
