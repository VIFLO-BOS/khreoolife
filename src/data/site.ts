export const siteUrl = "https://khreeolife.org";

export const images = {
  homeHero:
    "https://images.unsplash.com/photo-1768244016479-756ee49fe26c?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  homeHeroSecond:
    "https://images.unsplash.com/photo-1761666520005-3ffcf13e74c8?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  homeHeroThird:
    "https://images.unsplash.com/photo-1634334867692-bc2ad0e164f2?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  community:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  communitySupport:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  collaboration:
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  education:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  university:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  students:
    "https://images.unsplash.com/photo-1627423896085-e3e694d88e40?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  worship:
    "https://images.unsplash.com/photo-1634334867692-bc2ad0e164f2?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  worshipSecond:
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  church:
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  volunteering:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  partnership:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  support:
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  youthMappers:
    "https://www.generationunlimited.org/sites/unicef.org.genunlimited/files/styles/hero_extended/public/University%20of%20Ghana%20YouthMappers%2C%20Accra%2C%20Ghana.webp?itok=FYklg17t",
  communityEducation:
    "https://images.squarespace-cdn.com/content/v1/6111ba4696344d4b7229a081/e2599172-e0b4-4ba9-82f8-65336b00797f/Where%2Beducation%2Bis%2Bfree-41.jpg",
} as const;

export type ProjectCategory = "community" | "education" | "missions";

export interface ImpactItem {
  label: string;
  value: string;
}

export interface Project {
  categories: ProjectCategory[];
  description: string;
  event: string;
  id: "iloba" | "uni" | "love" | "ibadan";
  image: string;
  imageAlt: string;
  impact: ImpactItem[];
  number: string;
  pillar: string;
  status: "Past" | "Upcoming";
  story: string;
  title: string;
}

export const projects: Project[] = [
  {
    id: "iloba",
    number: "01",
    title: "Iloba Outreach",
    pillar: "Community Development",
    categories: ["community"],
    status: "Past",
    description:
      "A past Community Development project with a linked outreach event documented in Osun State.",
    story:
      "A past Khreeolife Community Development project. The site architecture links it to the Iloba Outreach Event, documented in Osun State.",
    event: "Iloba Outreach Event - Past · Osun State.",
    image: images.collaboration,
    imageAlt: "Community members collaborating",
    impact: [
      { value: "Pillar", label: "Community Development" },
      { value: "Status", label: "Past" },
    ],
  },
  {
    id: "uni",
    number: "02",
    title: "Help 20 Students Get Into Uni",
    pillar: "Education Empowerment",
    categories: ["education"],
    status: "Past",
    description:
      "An education empowerment project focused on helping 20 students progress toward university.",
    story:
      "An education empowerment project focused on helping 20 students progress toward university.",
    event: "Help 20 Into Uni - Sponsorship Drive - Past.",
    image: images.education,
    imageAlt: "Students in a learning environment",
    impact: [
      { value: "20", label: "Students targeted" },
      { value: "Pillar", label: "Education" },
    ],
  },
  {
    id: "love",
    number: "03",
    title: "Sharing The Ultimate Love Story",
    pillar: "Christian Missions",
    categories: ["missions"],
    status: "Past",
    description:
      "A Christian Missions project connected to a Valentine's Day outreach event.",
    story:
      "A Christian Missions project connected to a Valentine's Day outreach event.",
    event: "Sharing The Ultimate Love Story - Valentine's Day · Past.",
    image: images.worship,
    imageAlt: "Christian worship gathering",
    impact: [
      { value: "100", label: "Fed - event impact example" },
      { value: "100", label: "Taught - event impact example" },
      { value: "Also recorded", label: "Healings - event impact note" },
    ],
  },
  {
    id: "ibadan",
    number: "04",
    title: "Ibadan Mission Outreach",
    pillar: "Community Development · Missions",
    categories: ["community", "missions"],
    status: "Upcoming",
    description:
      "An upcoming project combining Community Development and Christian Missions. Date details are still to be confirmed.",
    story:
      "An upcoming project combining Community Development and Christian Missions. The architecture lists the date as TBD.",
    event: "Ibadan Mission Outreach - Upcoming · TBD.",
    image: images.volunteering,
    imageAlt: "People preparing for community service",
    impact: [
      { value: "Status", label: "Upcoming" },
      { value: "Date", label: "TBD" },
    ],
  },
];

export type EventFilter = "past" | "ongoing" | "future";

export interface SiteEvent {
  description: string;
  filter: EventFilter;
  id: "iloba-event" | "love-event" | "uni-event" | "ibadan-event";
  image: string;
  imageAlt: string;
  impact: ImpactItem[];
  location: string;
  number: string;
  project: string;
  status: "Past" | "Future";
  title: string;
}

export const events: SiteEvent[] = [
  {
    id: "iloba-event",
    number: "01",
    title: "Iloba Outreach Event",
    project: "Iloba Outreach",
    location: "Osun State",
    status: "Past",
    filter: "past",
    description:
      "Linked to the Iloba Outreach project under Community Development.",
    image: images.community,
    imageAlt: "Community outreach gathering",
    impact: [
      { value: "Project", label: "Iloba Outreach" },
      { value: "Location", label: "Osun State" },
    ],
  },
  {
    id: "love-event",
    number: "02",
    title: "Sharing The Ultimate Love Story",
    project: "Christian Missions",
    location: "Valentine's Day",
    status: "Past",
    filter: "past",
    description:
      "The architecture records this event with an impact summary example including 100 fed, 100 taught and healings recorded.",
    image: images.worship,
    imageAlt: "Christian mission gathering",
    impact: [
      { value: "100", label: "Fed - architecture example" },
      { value: "100", label: "Taught - architecture example" },
      { value: "Recorded", label: "Healings - architecture note" },
    ],
  },
  {
    id: "uni-event",
    number: "03",
    title: "Help 20 Into Uni - Sponsorship Drive",
    project: "Education Empowerment",
    location: "Past",
    status: "Past",
    filter: "past",
    description:
      "A sponsorship-driven event linked to the Education Empowerment project.",
    image: images.university,
    imageAlt: "Students on a campus",
    impact: [
      { value: "Project", label: "Education Empowerment" },
      { value: "Status", label: "Past" },
    ],
  },
  {
    id: "ibadan-event",
    number: "04",
    title: "Ibadan Mission Outreach",
    project: "Community Dev · Missions",
    location: "TBD",
    status: "Future",
    filter: "future",
    description:
      "An upcoming event with final date and details still to be confirmed.",
    image: images.volunteering,
    imageAlt: "People preparing to serve",
    impact: [
      { value: "Status", label: "Future" },
      { value: "Date", label: "TBD" },
    ],
  },
];

export interface PillarImage {
  alt: string;
  label: string;
  objectPosition: string;
  src: string;
}

export interface Pillar {
  heading: string;
  images: PillarImage[];
  name: string;
  text: string;
}

export const pillars: Pillar[] = [
  {
    name: "Community Development",
    heading: "Community Development",
    text: "Serving communities through development initiatives including skill acquisition, education and practical support.",
    images: [
      {
        src: images.community,
        alt: "People gathered together in community",
        objectPosition: "50% center",
        label: "Develop",
      },
      {
        src: images.collaboration,
        alt: "Community members collaborating",
        objectPosition: "48% center",
        label: "Serve",
      },
      {
        src: images.communitySupport,
        alt: "Community support and development",
        objectPosition: "50% 44%",
        label: "Strengthen",
      },
    ],
  },
  {
    name: "Education",
    heading: "Education",
    text: "Equipping young people at an early age with the right information, exposure, alternative sources of education, work experience, sense of duty to community and maintenance culture.",
    images: [
      {
        src: images.education,
        alt: "A classroom learning environment",
        objectPosition: "50% center",
        label: "Inform",
      },
      {
        src: images.university,
        alt: "Students on a university campus",
        objectPosition: "50% 45%",
        label: "Expose",
      },
      {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&fm=jpg&q=82&w=1200",
        alt: "Young students learning together",
        objectPosition: "50% center",
        label: "Equip",
      },
    ],
  },
  {
    name: "Christian Missions",
    heading: "Christian Missions",
    text: "Spreading the gospel through intentional outreaches, evangelism and discipleship.",
    images: [
      {
        src: images.worship,
        alt: "Christian worship gathering",
        objectPosition: "50% 45%",
        label: "Reach",
      },
      {
        src: images.worshipSecond,
        alt: "People worshipping together",
        objectPosition: "50% center",
        label: "Share",
      },
      {
        src: images.church,
        alt: "Church community gathering",
        objectPosition: "50% 42%",
        label: "Disciple",
      },
    ],
  },
];

export interface CampaignCard {
  accent: "purple" | "yellow" | "cream";
  description: string;
  image: string;
  imageAlt: string;
  number: string;
  title: string;
}

export const campaignCards: CampaignCard[] = [
  {
    number: "01",
    title: "The Ordained Life",
    description:
      "A life shaped by purpose, service, transformation and the love of God - lived visibly in community.",
    image: images.homeHeroSecond,
    imageAlt: "Young people gathered in community",
    accent: "purple",
  },
  {
    number: "02",
    title: "Beholding. Becoming.",
    description:
      "What we continually behold shapes who we become. Education and exposure help young people see possibility early.",
    image: images.students,
    imageAlt: "Students learning together in an African classroom",
    accent: "yellow",
  },
  {
    number: "03",
    title: "With The Gospel",
    description:
      "Christian mission expressed through intentional outreach, evangelism, discipleship and practical love.",
    image: images.worship,
    imageAlt: "Christian worship gathering",
    accent: "cream",
  },
];

export type ArticleCategory = "community" | "devotional" | "updates" | "events";

export interface Article {
  body: string;
  category: ArticleCategory;
  description: string;
  id:
    | "ordained"
    | "words-deeds"
    | "devotional"
    | "uni-update"
    | "love-coverage"
    | "brand-language";
  image?: string;
  imageAlt?: string;
  label: string;
  presentation?: "purple" | "yellow";
  title: string;
}

export const articles: Article[] = [
  {
    id: "ordained",
    label: "Featured Editorial Preview",
    category: "devotional",
    title: "The Ordained Life",
    description:
      "Khreeolife is a gospel-centered organization dedicated to reflecting Jesus Christ's love through words and actions. This editorial space is designed to carry that story in long-form.",
    body: "Khreeolife is a gospel-centered organization dedicated to reflecting Jesus Christ's love through words and actions. The magazine can expand this foundation into devotionals, community stories, project updates and event coverage as the organisation grows.",
    image: images.collaboration,
    imageAlt: "People together in community",
  },
  {
    id: "words-deeds",
    label: "Community Story",
    category: "community",
    title: "Love in words and in deeds",
    description:
      "How Khreeolife's mission combines what is spoken with what is practically done.",
    body: "The phrase both in words and in deeds gives the editorial system a strong recurring theme: tell the gospel-centered story, then document the practical work through projects, events, images and impact highlights.",
    image: images.communitySupport,
    imageAlt: "Community-focused documentary scene",
  },
  {
    id: "devotional",
    label: "Devotional",
    category: "devotional",
    title: "The Ordained Life",
    description: "A reflection space anchored in Khreeolife's motto.",
    body: "The brand identity defines The Ordained Life as Khreeolife's motto. This preview demonstrates how that language can become a clean long-form editorial experience without inventing final devotional copy.",
    presentation: "purple",
  },
  {
    id: "uni-update",
    label: "Update",
    category: "updates",
    title: "Help 20 Students Get Into Uni",
    description:
      "An education empowerment project designed around opportunity and progression.",
    body: "As final content is populated, this post format can combine the project story, sponsorship-drive update, photography, participant voices and documented outcomes.",
    image: images.education,
    imageAlt: "Education setting",
  },
  {
    id: "love-coverage",
    label: "Events Coverage",
    category: "events",
    title: "Sharing The Ultimate Love Story",
    description:
      "Event coverage can combine story, impact summary, photography and a related project link.",
    body: "The architecture notes an impact-summary example for this event including 100 fed, 100 taught and healings recorded. A final event article can combine those documented outcomes with approved imagery and testimony.",
    image: images.worship,
    imageAlt: "Christian mission gathering",
  },
  {
    id: "brand-language",
    label: "Brand Story",
    category: "community",
    title: "Language of the life",
    description:
      "Khreeolife's identity system uses expressive sticker language around the central motto.",
    body: "Alongside The Ordained Life, the brand deck includes the miraculous life and supernatural life. These phrases can be used as supporting visual language while the website keeps The Ordained Life as the primary motto.",
    presentation: "yellow",
  },
];
