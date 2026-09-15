import { HomeHero } from "@/components/home/HomeHero";
import { PillarSlider } from "@/components/home/PillarSlider";
import { LifeCampaign } from "@/components/home/LifeCampaign";
import { MissionVision } from "@/components/home/MissionVision";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HorizontalEvents } from "@/components/home/HorizontalEvents";
import { StoriesSection } from "@/components/home/StoriesSection";
import { HomeClosingCTA } from "@/components/home/HomeClosingCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PillarSlider />
      <LifeCampaign />
      <MissionVision />
      <FeaturedProjects />
      <HorizontalEvents />
      <StoriesSection />
      <HomeClosingCTA />
    </>
  );
}
