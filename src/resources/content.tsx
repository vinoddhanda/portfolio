import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vinod",
  lastName: "Kumar",
  name: `Vinod Kumar`,
  role: "Senior Product Designer & Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "vinoddhanda001@gmail.com", // apni real email daalo
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on product design, web performance, and building at scale.</>,
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
    link: "https://www.linkedin.com/in/vinoddhanda/", // apna LinkedIn URL daalo
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
  title: `${person.name} — Product Designer & Frontend Developer`,
  description: `Portfolio of ${person.name} — Senior Product Designer and Frontend Developer with 15+ years experience at CarDekho, 91Wheels.com, Genpact`,
  headline: <>I design and build products that perform.</>,
  featured: {
    display: false,
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
      I'm Vinod, a Product Designer & Frontend Developer with{" "}
      <Text as="span" size="xl" weight="strong">15+ years</Text>{" "}
      of experience building automotive and marketplace platforms at{" "}
      <Text as="span" size="xl" weight="strong">CarDekho</Text> and{" "}
      <Text as="span" size="xl" weight="strong">91Wheels.com</Text>.
      I combine product thinking, Figma design, and Next.js development
      to ship fast, conversion-focused digital experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in New Delhi, India`,
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
        I am a Senior Product Designer and Frontend Developer with 15+ years of experience
        building high-traffic digital products. I have worked at India's leading automotive
        platforms — CarDekho and 91Wheels.com — where I led design and frontend development
        for products serving millions of monthly users.
        <br /><br />
        I work across the full product stack: Figma design systems, Next.js + Tailwind CSS
        frontend development, Core Web Vitals optimization, and Google Analytics-driven
        product decisions. I don't just deliver screens — I understand what makes
        products grow.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
  experiences: [
  {
    company: "91Wheels.com",
    timeframe: "2020 — Present",
    role: "Lead Frontend Developer & Product Designer",
    achievements: [
      <>
        Built and maintained complete frontend from scratch using{" "}
        <strong>Next.js and Tailwind CSS</strong> — serving millions of
        monthly automotive enthusiasts across India.
      </>,
      <>
        Redesigned lead generation flow in Figma — improved form
        conversion rate from <strong>3.5% to 7%</strong>, doubling
        lead volume through UI and UX flow changes alone.
      </>,
      <>
        Designed and implemented vehicle listing pages, detail pages,
        advanced search and filter UX, and mobile-first responsive
        layouts.
      </>,
      <>
        Optimized <strong>Core Web Vitals</strong> and Google PageSpeed
        scores — directly improving SEO rankings and ad campaign
        conversion performance.
      </>,
      <>
        Integrated <strong>Google Analytics (GA4)</strong> and Search
        Console tracking for data-driven product decisions.
      </>,
    ],
    images: [],
  },
      {
        company: "CarDekho",
        timeframe: "2013 — 2020",
        role: "Senior Product Designer",
        achievements: [
          <>
            Worked on India's largest automotive marketplace serving{" "}
            <strong>millions of monthly users</strong> — vehicle discovery,
            comparison tools, and dealer enquiry flows.
          </>,
          <>
            Led UI/UX design for key product features including vehicle
            listings, search experience, finance tools, and mobile interfaces.
          </>,
          <>
            Collaborated with product managers and engineering teams to ship
            features that improved user engagement and conversion metrics
            at scale.
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
            Enterprise-scale UI design for B2B products and internal tools
            across multiple business verticals.
          </>,
          <>
            Built strong foundation in user research, wireframing,
            information architecture, and cross-functional collaboration.
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
        name: "Design",
        description: (
          <>
            Figma, UI/UX Design, Design Systems, Component Libraries,
            Wireframing, Prototyping, Mobile-First Design, Claude Design,
            Responsive Web Design
          </>
        ),
      },
      {
        name: "Development",
        description: (
          <>
            Next.js, React, Tailwind CSS, HTML/CSS, JavaScript,
            Claude Code, REST APIs, Sanity CMS, Headless CMS,
            Frontend Performance Optimization
          </>
        ),
      },
      {
        name: "Analytics & Performance",
        description: (
          <>
            Core Web Vitals, Google PageSpeed Insights, Google Search Console,
            Google Analytics GA4, Lighthouse, WebPageTest, SEO Best Practices
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
        title: "Figma — Design Systems",
        description: (
          <>
            End-to-end product design in Figma — from wireframes to
            production-ready design systems and developer handoffs.
          </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "Next.js — Frontend Development",
        description: (
          <>
            Building fast, SEO-optimized frontends with Next.js, React,
            and Tailwind CSS. Specialized in automotive and marketplace
            platforms at scale.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and performance...",
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

export { person, social, newsletter, home, about, blog, work, gallery };
