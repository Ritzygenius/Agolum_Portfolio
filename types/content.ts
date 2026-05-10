export type Project = {
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  client_name: string;
  industry: string;
  category: string;
  live_url?: string;
  github_url?: string;
  featured: boolean;
  published: boolean;
  completed_at: string;
  thumbnail_url: string;
};

export type Achievement = {
  title: string;
  organization: string;
  description: string;
  icon: string;
  year: string;
};

export type Service = {
  title: string;
  slug: string;
  description: string;
  outcomes: string[];
  icon: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  description: string;
  certificate_url?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo_url?: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  published_at: string;
};
