import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/site";

const stories = [
  {
    title: "Young people choosing service",
    tag: "Community Story",
    image: images.community2,
    size: "col-span-6 row-span-2 min-h-[650px]",
  },
  {
    title: "Opportunity starts with exposure",
    tag: "Education",
    image: images.education,
    size: "col-span-6 min-h-[315px]",
  },
  {
    title: "Listening before building",
    tag: "Field Note",
    image: images.community3,
    size: "col-span-3 min-h-[315px]",
  },
  {
    title: "Faith in action",
    tag: "Christian Missions",
    image: images.mission,
    size: "col-span-3 min-h-[315px]",
  },
];

export function StoriesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Blog / Magazine"
            title={
              <>
                Stories from
                <br />
                the field.
              </>
            }
            description="A magazine-style content hub for devotionals, community stories, updates and event coverage."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-12 gap-3 max-md:grid-cols-1">
          {stories.map((story, index) => (
            <Reveal
              key={story.title}
              delay={index * 0.06}
              className={`${story.size} max-md:col-span-1 max-md:row-span-1 max-md:min-h-[420px]`}
            >
              <article className="card-border group relative h-full min-h-[inherit]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover saturate-[.82] transition-transform duration-700 group-hover:scale-[1.035]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-paper/95 p-2 backdrop-blur-md">
                  <span className="pill-tag text-brand">{story.tag}</span>
                  <h3 className="mt-3 font-display text-[clamp(20px,2.8vw,20px)] font-normal tracking-[-.04em]">
                    {story.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <AnimatedButton href="/blog" label="Open Magazine" variant="dark" />
        </div>
      </div>
    </section>
  );
}
