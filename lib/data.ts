import type { Achievement, BlogPost, Certification, Profile, Project, Service, SocialLink, Testimonial } from "@/types/content";

export const profile: Profile = {
  full_name: "Chinagolum Arinzechukwu Igwe",
  professional_title: "Tech Leader | Digital Strategist | Program Manager | ICT Policy Advisor | Digital Marketing Expert | Web Developer | Entrepreneur",
  tagline: "Empowering Individuals, Organizations, and Governments Through Technology, Education, and Innovation.",
  summary:
    "Experienced technology leader, digital strategist, educator, and ICT policy advisor with over 10 years of experience in program management, digital marketing, web development, youth empowerment, and government technology transformation.",
  portrait_url: "/agolu-agolu.jpeg",
  cv_url: "https://drive.google.com/file/d/1vmj6s-yRqxFz4n5HHZyMWFE_MCgML67L/view?usp=drive_link",
  calendly_url: "https://calendly.com/agolumarinze",
  location: "Enugu, Nigeria",
  nationality: "Nigerian",
  email: "agolumarinze@gmail.com",
  phone: "09048127607",
  whatsapp_number: "09048127607",
  instagram_url: "https://www.instagram.com/ritzyagolum?igsh=OW00NHdhcmE5dnh5",
  facebook_url: "https://www.facebook.com/igwea",
  linkedin_url: "#",
  x_url: "https://x.com/Ritzygeniusa",
};

export const metrics = [
  ["10+", "Years Experience"],
  ["1,000+", "People Trained"],
  ["50+", "Digital Projects"],
  ["Multiple", "Leadership Roles"],
] as const;

export const achievements: Achievement[] = [
  {
    title: "Head of Programs",
    organization: "Learnexity",
    description: "Leads program strategy, cohort delivery, learning operations, and innovation-focused training experiences.",
    icon: "Network",
    year: "Current",
  },
  {
    title: "Digital Marketing Facilitator",
    organization: "Learnexity",
    description: "Trains learners and teams in digital growth strategy, content systems, campaign planning, and analytics.",
    icon: "Megaphone",
    year: "Current",
  },
  {
    title: "Senior Special Assistant on ICT",
    organization: "Igbo-Etiti LGA",
    description: "Advises local government leadership on digital transformation, ICT policy, and public-sector technology adoption.",
    icon: "Landmark",
    year: "Current",
  },
  {
    title: "Manager",
    organization: "Igbo-Etiti Tech Hub",
    description: "Coordinates hub operations, digital skills development, community innovation, and youth empowerment initiatives.",
    icon: "Cpu",
    year: "Current",
  },
  {
    title: "Programs Delivery Manager",
    organization: "Career Crest Edu",
    description: "Managed education programs, training delivery systems, and learner outcomes for professional development cohorts.",
    icon: "GraduationCap",
    year: "Leadership",
  },
  {
    title: "CEO",
    organization: "RitzyGenius Enterprise",
    description: "Builds digital products, consulting engagements, and entrepreneurial programs for organizations and individuals.",
    icon: "BriefcaseBusiness",
    year: "Founder",
  },
];

export const services: Service[] = [
  {
    title: "Website Development",
    slug: "website-development",
    description: "Premium, conversion-focused websites and web platforms built for credibility, speed, SEO, and measurable business outcomes.",
    outcomes: ["Brand websites", "Portfolio platforms", "Landing pages", "Business automation"],
    icon: "Code2",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-informed growth strategy spanning content, funnels, social campaigns, paid media, analytics, and community building.",
    outcomes: ["Campaign strategy", "SEO foundations", "Social growth", "Analytics reporting"],
    icon: "TrendingUp",
  },
  {
    title: "ICT Consulting",
    slug: "ict-consulting",
    description: "Technology advisory for organizations and public institutions that need pragmatic digital transformation roadmaps.",
    outcomes: ["ICT policy", "Systems audit", "Digital roadmaps", "Vendor guidance"],
    icon: "ShieldCheck",
  },
  {
    title: "Program Management",
    slug: "program-management",
    description: "Structured planning, delivery, stakeholder management, and reporting for education, innovation, and transformation programs.",
    outcomes: ["Program design", "Delivery systems", "Monitoring", "Impact reporting"],
    icon: "ClipboardCheck",
  },
  {
    title: "Corporate Training",
    slug: "corporate-training",
    description: "Hands-on training in digital literacy, productivity tools, marketing, web technology, and organizational adoption.",
    outcomes: ["Team upskilling", "Workshops", "Curriculum design", "Assessments"],
    icon: "Presentation",
  },
  {
    title: "Government Digital Transformation",
    slug: "government-digital-transformation",
    description: "Civic technology strategy for local governments seeking better service delivery, transparency, and citizen engagement.",
    outcomes: ["Digital governance", "Capacity building", "Tech hub strategy", "Public service innovation"],
    icon: "Building2",
  },
];

export const projects: Project[] = [
  {
    title: "Igbo-Etiti Tech Hub Digital Enablement",
    slug: "igbo-etiti-tech-hub-digital-enablement",
    short_description: "A civic technology and youth empowerment initiative for skills, innovation, and local digital transformation.",
    full_description:
      "Program architecture and operational leadership for a public-sector tech hub designed to expand digital access, train young people, and support ICT adoption in local government.",
    challenge: "Young people and public institutions needed a practical structure for skills development and technology adoption.",
    solution: "Designed program workflows, training tracks, community engagement systems, and stakeholder reporting rhythms.",
    results: "Improved visibility for local innovation, created a platform for recurring digital skills programs, and strengthened ICT capacity.",
    technologies: ["Program Design", "ICT Policy", "Digital Literacy", "Stakeholder Management"],
    client_name: "Igbo-Etiti Local Government",
    industry: "Government",
    category: "Government Projects",
    live_url: "#",
    featured: true,
    published: true,
    completed_at: "2025-10-01",
    thumbnail_url: "/project-government.svg",
  },
  {
    title: "Learnexity Digital Skills Programs",
    slug: "learnexity-digital-skills-programs",
    short_description: "Training systems for digital marketing, productivity, and employability-focused technology education.",
    full_description:
      "End-to-end program leadership for technology and digital marketing learning experiences focused on practical capability, confidence, and career outcomes.",
    challenge: "Learners needed structured, market-relevant training that moved beyond theory into practice.",
    solution: "Built facilitation plans, cohort operations, project-based assignments, and assessment frameworks.",
    results: "Supported scalable learner outcomes and strengthened Learnexity's reputation for practical digital education.",
    technologies: ["Digital Marketing", "Training", "Curriculum", "Analytics"],
    client_name: "Learnexity",
    industry: "Education Technology",
    category: "Training Programs",
    live_url: "#",
    featured: true,
    published: true,
    completed_at: "2025-08-01",
    thumbnail_url: "/project-training.svg",
  },
  {
    title: "SME Web Presence Transformation",
    slug: "sme-web-presence-transformation",
    short_description: "Responsive business websites and digital growth foundations for Nigerian SMEs and personal brands.",
    full_description:
      "A portfolio of web development engagements focused on helping entrepreneurs and organizations establish credible, searchable, conversion-ready online presences.",
    challenge: "Many businesses had weak digital credibility, low discoverability, and fragmented customer journeys.",
    solution: "Delivered responsive websites, SEO metadata, lead forms, WhatsApp CTAs, analytics, and clear service storytelling.",
    results: "Improved brand trust, simplified lead generation, and created reusable digital assets for client growth.",
    technologies: ["Next.js", "WordPress", "SEO", "Analytics", "WhatsApp"],
    client_name: "Multiple Clients",
    industry: "SME",
    category: "Web Development",
    live_url: "#",
    github_url: "#",
    featured: true,
    published: true,
    completed_at: "2025-06-01",
    thumbnail_url: "/project-web.svg",
  },
  {
    title: "Digital Campaign Growth Systems",
    slug: "digital-campaign-growth-systems",
    short_description: "Marketing strategy, content calendars, and measurement systems for education and enterprise campaigns.",
    full_description:
      "Digital marketing operations built around audience clarity, campaign planning, compelling content, and measurable performance indicators.",
    challenge: "Organizations needed consistent campaign execution and clearer reporting.",
    solution: "Created campaign calendars, social content systems, lead capture journeys, and performance dashboards.",
    results: "Better audience engagement, stronger campaign discipline, and improved decision-making from analytics.",
    technologies: ["Content Strategy", "Meta", "Google Analytics", "SEO", "Email"],
    client_name: "Education and Enterprise Clients",
    industry: "Digital Marketing",
    category: "Digital Marketing",
    live_url: "#",
    featured: false,
    published: true,
    completed_at: "2025-04-01",
    thumbnail_url: "/project-marketing.svg",
  },
];

export const certifications: Certification[] = [
  {
    name: "Digital Marketing Certification",
    issuer: "Genesys Tech Hub",
    date: "2023-01-01",
    description: "Professional training in digital marketing strategy, campaign execution, content, and growth channels.",
  },
  {
    name: "Advanced Productivity Tools",
    issuer: "Wootlab Foundation",
    date: "2022-01-01",
    description: "Advanced capability in workplace productivity tools, collaboration workflows, and digital operations.",
  },
  {
    name: "Productivity Tools and Basic Digital Literacy",
    issuer: "Wootlab Foundation",
    date: "2021-01-01",
    description: "Foundational digital literacy and productivity skills for modern work and training delivery.",
  },
  {
    name: "BSc Biochemistry",
    issuer: "University of Nigeria Nsukka",
    date: "2018-01-01",
    description: "Bachelor of Science degree with a rigorous foundation in scientific thinking, research, and analytical discipline.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Chinagolum combines strategic clarity with practical execution. His programs leave people more capable and organizations more confident.",
    name: "Program Partner",
    role: "Education Lead",
    company: "Learning Ecosystem",
  },
  {
    quote: "He understands both technology and people. That rare mix makes his consulting useful from policy room to training room.",
    name: "Public Sector Stakeholder",
    role: "Administrative Leader",
    company: "Local Government",
  },
  {
    quote: "His digital marketing sessions were practical, current, and immediately useful. The experience changed how our team thinks about growth.",
    name: "Training Participant",
    role: "Entrepreneur",
    company: "SME Founder",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Digital Transformation Starts With People",
    slug: "digital-transformation-starts-with-people",
    excerpt: "Why government and organizational technology programs succeed when they begin with capacity, clarity, and trust.",
    content:
      "Digital transformation is not simply the purchase of software. It is the disciplined work of helping people, systems, and institutions adopt better ways to serve their mission. Sustainable transformation starts with skills, leadership alignment, citizen or customer empathy, and simple measurable wins.",
    category: "ICT Strategy",
    tags: ["ICT", "Government", "Leadership"],
    published_at: "2026-01-15",
  },
  {
    title: "What Every SME Website Must Do",
    slug: "what-every-sme-website-must-do",
    excerpt: "A practical framework for building business websites that earn trust and generate qualified conversations.",
    content:
      "A strong SME website should communicate credibility quickly, make the offer clear, answer common objections, and provide simple paths to contact. Design is not decoration here. It is a business system that helps strangers understand why they should trust you.",
    category: "Web Development",
    tags: ["Web", "SEO", "Business"],
    published_at: "2026-02-10",
  },
];

export function getSocialLinks(source: Profile = profile): SocialLink[] {
  return [
    { label: "Instagram", href: source.instagram_url },
    { label: "Facebook", href: source.facebook_url },
    { label: "LinkedIn", href: source.linkedin_url },
    { label: "X", href: source.x_url },
  ].filter((link) => Boolean(link.href && link.href !== "#")) as SocialLink[];
}

export const socialLinks = getSocialLinks(profile);
