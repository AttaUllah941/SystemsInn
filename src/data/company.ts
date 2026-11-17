import {
  Blocks,
  Bot,
  Cloud,
  Code2,
  Compass,
  Globe,
  Headset,
  Smartphone,
  Layers,
  Lightbulb,
  PencilRuler,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Target,
  Users,
  Gem,
} from "lucide-react";
import type { NavLink, ProcessStep, Project, Reason, Service } from "@/types";

export const company = {
  name: "SystemInn",
  tagline: "Build · Innovate · Grow",
  footerLine: "SystemInn — Build. Innovate. Grow.",
  positioning: "Your Trusted Partner in Software & Technology.",
  description:
    "SystemInn is a software development and technology company building innovative digital solutions, SaaS products and technology consulting for growing businesses.",
  email: "Systeminn.info@gmail.com",
  phoneDisplay: "+923134832030",
  phoneHref: "tel:+923134832030",
  linkedin: "https://www.linkedin.com/company/system-inn-082/",
  address: {
    display: "Street 2, Flyover, Bhutta pur, Muzaffargarh, Muzaffargarh, Punjab 34200",
    street: "Street 2, Flyover, Bhutta pur",
    city: "Muzaffargarh",
    region: "Punjab",
    postalCode: "34200",
    country: "PK",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Street 2, Flyover, Bhutta pur, Muzaffargarh, Punjab 34200"),
  },
  /** Set NEXT_PUBLIC_SITE_URL once the production domain is established. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Why Choose Us", href: "#why-us", id: "why-us" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const services: Service[] = [
  {
    title: "Web App Development",
    description:
      "Fast, responsive websites and web applications built to convert visitors and support daily operations.",
    icon: Globe,
    features: [
      "Business websites & web portals",
      "E-commerce storefronts",
      "Dashboards & admin panels",
      "Performance & SEO-ready builds",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Polished mobile experiences that put your product in your customers' hands, on iOS and Android.",
    icon: Smartphone,
    features: [
      "iOS & Android applications",
      "Cross-platform development",
      "Mobile UI/UX design",
      "API & backend integration",
    ],
  },
  {
    title: "AI Agents & Automation",
    description:
      "Practical AI agents that handle repetitive work, answer questions and connect to the tools you already use.",
    icon: Bot,
    features: [
      "Custom AI agents & assistants",
      "Workflow automation",
      "Chatbots for support & sales",
      "Integration with business systems",
    ],
  },
  {
    title: "Software Development",
    description:
      "Tailored software and web applications designed around how your business actually works.",
    icon: Code2,
    features: [
      "Custom software development",
      "Web application development",
      "Scalable digital solutions",
      "Business process automation",
    ],
  },
  {
    title: "SaaS Solutions",
    description:
      "End-to-end product engineering for cloud platforms that are ready to grow with your customers.",
    icon: Cloud,
    features: [
      "SaaS product development",
      "Cloud-based platforms",
      "Subscription-based applications",
      "Scalable software architecture",
    ],
  },
  {
    title: "IT Services & Support",
    description:
      "Dependable technical expertise to keep your systems running smoothly and efficiently.",
    icon: Headset,
    features: [
      "Technical consulting",
      "Software maintenance",
      "Technical support",
      "System optimization",
    ],
  },
  {
    title: "Technology Consulting & Strategy",
    description:
      "Clear, practical guidance to align technology decisions with your business goals.",
    icon: Compass,
    features: [
      "Digital transformation",
      "Technology strategy",
      "Architecture consulting",
      "Business technology solutions",
    ],
  },
];

export const reasons: Reason[] = [
  {
    title: "Innovation Driven",
    description:
      "We explore modern approaches and apply them where they create real value for your product.",
    icon: Lightbulb,
  },
  {
    title: "Client Focused",
    description:
      "Your goals shape every decision, with clear communication from first call to delivery.",
    icon: Users,
  },
  {
    title: "Reliable & Secure",
    description:
      "Dependable engineering with security considered from the start, not added at the end.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Solutions",
    description:
      "Architecture planned so your software can grow alongside your business.",
    icon: Layers,
  },
  {
    title: "Quality Development",
    description:
      "Clean, maintainable code and careful testing for software you can build on.",
    icon: Gem,
  },
  {
    title: "Business-Oriented Approach",
    description:
      "We measure technology by what it does for your business, not by how complex it is.",
    icon: Target,
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery & Planning",
    description:
      "We learn your goals, users and constraints, then shape a clear plan and scope.",
    icon: SearchCheck,
  },
  {
    title: "Strategy & Design",
    description:
      "We define the architecture and design the experience before development begins.",
    icon: PencilRuler,
  },
  {
    title: "Development",
    description:
      "We build iteratively, sharing progress so you stay informed and in control.",
    icon: Blocks,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We verify functionality, usability and reliability before anything goes live.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Support",
    description:
      "We launch carefully and remain available to maintain and improve your product.",
    icon: Rocket,
  },
];

/**
 * Add future projects here. Only record facts that have been verified
 * against the live site or repository.
 */
export const projects: Project[] = [
  {
    slug: "aylee-store",
    name: "Aylee.store",
    category: "E-commerce · Online Fashion Store",
    featured: true,
    overview:
      "A live online clothing store serving customers across Pakistan.",
    description:
      "Aylee is an online storefront for a considered everyday clothing label. Shoppers can browse categories, discover new arrivals and sale pieces, and check out online, with delivery across Pakistan.",
    url: "https://aylee.store",
    highlights: [
      "Category browsing: T-shirts, sweater knit polos and cord sets",
      "New arrivals, featured pieces and sale sections",
      "Nationwide delivery across Pakistan",
      "Hosted card and mobile-wallet checkout",
    ],
    // Detected from the public site's page source (Next.js asset paths).
    technologies: ["Next.js"],
    image: {
      src: "/projects/aylee-store/og-aylee.jpg",
      alt: "Aylee official online store brand preview",
      width: 1200,
      height: 630,
      caption: "Brand preview image published by Aylee.store",
    },
  },
  {
    slug: "carehub",
    name: "CareHub",
    category: "Healthcare · Doctor & Appointment Platform",
    overview:
      "A healthcare platform for finding doctors and booking care across Pakistan.",
    description:
      "CareHub helps patients search for doctors by specialty and city, and brings appointments, lab tests, medicines and health information together in one place, with a separate path for doctors to join the platform.",
    url: "https://mycarehubs.netlify.app/",
    highlights: [
      "Doctor search by specialty, city, doctor name or condition",
      "In-clinic appointments and video consultations",
      "Lab tests, medicines and hospital listings",
      "Patient login and registration, plus a doctor sign-up path",
    ],
    technologies: [],
    image: {
      src: "/projects/carehub/home.png",
      alt: "CareHub homepage showing doctor search by specialty and city",
      width: 1440,
      height: 900,
      caption: "Homepage screenshot of the live CareHub site",
    },
  },
];
