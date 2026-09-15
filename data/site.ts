export type Pillar = {

  id: "community" | "education" | "missions";
  name: string;
  short: string;
  heading: string;
  description: string;
  labels: [string, string, string, string];
  images: [string, string, string, string];
};

export type Project = {
  id: string;
  title: string;
  pillars: string[];
  status: "Past" | "Upcoming";
  description: string;
  image: string;
  linkedEvent: string;
  impact?: Array<{ value: string; label: string }>;
};

export type SiteEvent = {
  id: string;
  title: string;
  project: string;
  status: "Past" | "Future";
  date: string;
  location?: string;
  image: string;
  description: string;
  impact?: Array<{ value: string; label: string }>;
};

export const images = {
  hero: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&fm=jpg&q=88&w=2200",
  community:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  community2:
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  community3:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  education:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  education2:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  education3:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  mission:
    "https://images.unsplash.com/photo-1634334867692-bc2ad0e164f2?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  mission2:
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  mission3:
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  volunteer:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  partner:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  give: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&fm=jpg&q=84&w=1800",
} as const;

export const pillars: Pillar[] = [
  {
    id: "community",
    name: "Community Development",
    short: "Community",
    heading: "Serving communities through practical development.",
    description:
      "Community development initiatives including skill acquisition, education and other practical support that strengthen people and communities.",
    labels: ["Develop", "Serve", "Strengthen", "Empower"],
    images: [images.community, images.community2, images.community3, images.volunteer],
  },
  {
    id: "education",
    name: "Education",
    short: "Education",
    heading:
      "Equipping young people early with the right information and exposure.",
    description:
      "Right information, exposure, alternative sources of education, work experience, a sense of duty to community and maintenance culture.",
    labels: ["Education", "Community", "Mission", "Growth"],
    images: [images.education, images.education2, images.education3, images.partner],
  },
  {
    id: "missions",
    name: "Christian Missions",
    short: "Missions",
    heading: "Spreading the gospel through intentional outreach.",
    description:
      "Intentional outreaches, evangelism and discipleship - reflecting Jesus Christ's love through words and actions.",
    labels: ["Reach", "Share", "Disciple", "Impact"],
    images: [images.mission, images.mission2, images.mission3, images.give],
  },
];

export const projects: Project[] = [
  {
    id: "iloba-outreach",
    title: "Iloba Outreach",
    pillars: ["Community Development"],
    status: "Past",
    description:
      "A documented Community Development project with a linked outreach event in Osun State.",
    image: images.community2,
    linkedEvent: "Iloba Outreach Event - Past · Osun State",
  },
  {
    id: "help-20-students",
    title: "Help 20 Students Get Into Uni",
    pillars: ["Education Empowerment"],
    status: "Past",
    description:
      "An education empowerment project focused on helping 20 students progress toward university.",
    image: images.education,
    linkedEvent: "Help 20 Into Uni - Sponsorship Drive - Past",
    impact: [{ value: "20", label: "Students targeted" }],
  },
  {
    id: "ultimate-love-story",
    title: "Sharing The Ultimate Love Story",
    pillars: ["Christian Missions"],
    status: "Past",
    description:
      "A Christian Missions project connected to a Valentine's Day outreach event.",
    image: images.mission,
    linkedEvent: "Sharing The Ultimate Love Story - Valentine's Day · Past",
  },
  {
    id: "ibadan-mission-outreach",
    title: "Ibadan Mission Outreach",
    pillars: ["Community Development", "Missions"],
    status: "Upcoming",
    description:
      "An upcoming project combining Community Development and Christian Missions. Final event date is still TBD.",
    image: images.volunteer,
    linkedEvent: "Ibadan Mission Outreach - Upcoming · TBD",
  },
];

export const events: SiteEvent[] = [
  {
    id: "iloba-event",
    title: "Iloba Outreach Event",
    project: "Iloba Outreach",
    status: "Past",
    date: "Past",
    location: "Osun State",
    image: images.community,
    description: "A past event linked to the Iloba Outreach project.",
  },
  {
    id: "love-story-event",
    title: "Sharing The Ultimate Love Story",
    project: "Christian Missions",
    status: "Past",
    date: "Valentine's Day",
    image: images.mission,
    description:
      "A Christian Missions event. The architecture notes an impact-summary example including 100 fed, 100 taught and healings recorded.",
    impact: [
      { value: "100", label: "Fed - architecture example" },
      { value: "100", label: "Taught - architecture example" },
      { value: "Recorded", label: "Healings - architecture note" },
    ],
  },
  {
    id: "uni-drive",
    title: "Help 20 Into Uni - Sponsorship Drive",
    project: "Education Empowerment",
    status: "Past",
    date: "Past",
    image: images.education2,
    description: "A sponsorship-drive event linked to Education Empowerment.",
  },
  {
    id: "ibadan-event",
    title: "Ibadan Mission Outreach",
    project: "Community Dev · Missions",
    status: "Future",
    date: "Upcoming - TBD",
    image: images.volunteer,
    description:
      "An upcoming event with final date and details still to be confirmed.",
  },
];

export const team = [
  { name: "Olabiwonninu Temiloluwa", role: "Founder", initials: "OT" },
  { name: "Alimi AbdulWasiu", role: "Team Member", initials: "AA" },
];

export const magazineCategories = [
  "All",
  "Devotionals",
  "Community Stories",
  "Updates",
  "Events Coverage",
] as const;
