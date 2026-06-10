import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vinod",
  lastName: "Kumar",
  name: `Vinod Kumar`,
  role: "Sr. Design Manager — AI-Native Product Experience",
  avatar: "/images/avatar.jpg",
  email: "vinoddhanda001@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on AI-native product design, web performance, and building at scale.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vinoddhanda",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vinoddhanda/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Sr. Design Manager & AI-Native Product Experience Owner`,
  description: `Portfolio of ${person.name} — Sr. Design Manager with 15+ years leading product design and frontend development at CarDekho and 91Wheels.com. AI-native workflow using Claude Code, Cursor, and Figma AI.`,
  headline: <>One person. AI-powered. Team-level output.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">91Wheels</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/91wheels",
  },
  subline: (
  <>
    I'm Vinod — <Text as="span" size="xl" weight="strong">Sr. Design Manager</Text> with 15+ years
    leading product experience at{" "}
    <Text as="span" size="xl" weight="strong">CarDekho</Text> and{" "}
    <Text as="span" size="xl" weight="strong">91Wheels.com</Text>.
    <br />
    I own the full stack — UX strategy, Figma design systems, Next.js
    production code, and GA4 optimization. Using Claude Code, Cursor,
    and Figma AI, I deliver what used to take a team of 3-4.
  </>
),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, Sr. Design Manager & AI-Native Product Experience Owner based in Gurugram, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Sr. Design Manager and Frontend Engineer with 15+ years owning
        product experience end-to-end — from UX strategy to production code.
        <br /><br />
        At <strong>91Wheels.com</strong>, I lead design and frontend as a single
        owner. I set design direction, build in Next.js + Tailwind CSS, optimize
        Core Web Vitals, and make data-driven decisions via GA4 — without
        dependency on external teams. One result: redesigned lead flow doubled
        conversion from <strong>3.5% to 7%</strong>.
        <br /><br />
        At <strong>CarDekho</strong> — India's largest automotive marketplace —
        I shipped UI systems used by millions of daily users across vehicle
        discovery, comparison, and dealer enquiry flows.
        <br /><br />
        Over the last 2 years, I've rebuilt my entire workflow around AI tools —
        <strong> Claude Code, Cursor, and Figma AI</strong>. Work that previously
        required a 3-4 person team, I now deliver solo — faster iteration,
        lower cost, higher output quality. I don't just use AI as a shortcut;
        I use it to think bigger, ship faster, and own more.
        <br /><br />
        I don't wait for requirements. I identify problems, propose solutions
        backed by data, and drive execution across design, frontend, and
        product teams.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "91Wheels.com (Vansun Mediatech Pvt. Ltd.)",
        timeframe: "2020 — Present",
        role: "Sr. Design Manager",
        achievements: [
          <>
            <strong>Led complete product experience</strong> as sole design and
            frontend owner — setting UX strategy, design systems, and shipping
            production code independently across the full product lifecycle.
          </>,
          <>
            Redesigned lead generation flow using GA4 data — improved conversion
            from <strong>3.5% to 7%</strong>, doubling lead volume through
            data-informed UX decisions executed in Figma and Next.js.
          </>,
          <>
            <strong>Rebuilt entire workflow around AI tools</strong> — Claude Code,
            Cursor, Figma AI — delivering work that previously required a 3-4
            person team, solo and faster.
          </>,
          <>
            Built complete frontend from scratch in{" "}
            <strong>Next.js + Tailwind CSS</strong> — vehicle listings, detail
            pages, advanced search/filter UX, and mobile-first responsive layouts
            serving millions of monthly users.
          </>,
          <>
            Achieved <strong>PageSpeed 90+</strong> across key pages — Core Web
            Vitals optimization directly improving SEO rankings and reducing
            bounce rate.
          </>,
          <>
            Established <strong>GA4 + Search Console</strong> tracking
            infrastructure — enabling proactive identification of conversion
            bottlenecks before they became business problems.
          </>,
        ],
        images: [],
      },
      {
        company: "CarDekho (GirnarSoft)",
        timeframe: "2013 — 2020",
        role: "Sr. Product Designer",
        achievements: [
          <>
            Worked on India's largest automotive marketplace serving{" "}
            <strong>millions of monthly users</strong> — vehicle discovery,
            comparison tools, and dealer enquiry flows at scale.
          </>,
          <>
            Led UI/UX design for key product features — vehicle listings, search
            experience, finance tools, and mobile interfaces — collaborating
            directly with product and engineering teams.
          </>,
          <>
            Shipped features that improved user engagement and conversion metrics
            at scale — product thinking backed by data, not assumptions.
          </>,
        ],
        images: [],
      },
      {
        company: "Genpact",
        timeframe: "2009 — 2013",
        role: "UI Designer",
        achievements: [
          <>
            Enterprise-scale UI design for B2B products across multiple business
            verticals — built strong foundation in user research, wireframing,
            and cross-functional collaboration.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Skills & Tools",
    institutions: [
      {
        name: "AI-Native Workflow",
        description: (
          <>
            Claude Code, Cursor, Figma AI — I've rebuilt my entire product
            workflow around AI tools. Work that previously required a team,
            I now ship solo: faster iteration, lower cost, higher output quality.
          </>
        ),
      },
      {
        name: "Design",
        description: (
          <>
            Figma, UI/UX Design, Design Systems, Component Libraries,
            Wireframing, Prototyping, Mobile-First Design, Responsive Web Design
          </>
        ),
      },
      {
        name: "Development",
        description: (
          <>
            Next.js, React, Tailwind CSS, HTML/CSS, JavaScript,
            Claude Code, Cursor, REST APIs, Sanity CMS,
            Frontend Performance Optimization
          </>
        ),
      },
      {
        name: "Analytics & Performance",
        description: (
          <>
            Core Web Vitals, Google PageSpeed Insights, Google Search Console,
            Google Analytics GA4, Lighthouse, SEO Best Practices
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI-Native Development — Claude Code + Cursor",
        description: (
          <>
            I use Claude Code and Cursor as my primary development environment —
            shipping production-ready Next.js code faster than traditional
            workflows. This is my daily stack, not an experiment.
          </>
        ),
        tags: [
          { name: "Claude Code", icon: "claude" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Figma — Design Systems & AI-Assisted Design",
        description: (
          <>
            End-to-end product design in Figma — from wireframes to
            production-ready design systems. Using Figma AI for rapid
            iteration and developer-ready handoffs.
          </>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
        ],
        images: [],
      },
      {
        title: "Conversion Optimization — GA4 + Data-Driven UX",
        description: (
          <>
            I identify conversion problems through GA4 behavioral data,
            design the fix in Figma, and ship the code in Next.js —
            end-to-end ownership. Doubled 91Wheels lead conversion
            from 3.5% to 7% this way.
          </>
        ),
        tags: [
          { name: "GA4", icon: "google" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI-native design and product...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A visual collection by ${person.name}`,
  images: [],
};

export { about, blog, gallery, home, newsletter, person, social, work };
