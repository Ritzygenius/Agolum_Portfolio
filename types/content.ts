export type Project = {
  id?: string;
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
  video_url?: string;
  featured: boolean;
  published: boolean;
  completed_at: string;
  thumbnail_url: string;
  project_images?: ProjectImage[];
};

export type ProjectImage = {
  id?: string;
  project_id?: string | null;
  image_url: string;
  alt?: string | null;
  sort_order?: number | null;
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
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured_image_url?: string;
  published?: boolean;
  published_at: string;
};

export type Profile = {
  id?: string;
  full_name: string;
  professional_title: string;
  tagline: string;
  summary: string;
  portrait_url: string;
  cv_url: string;
  calendly_url: string;
  email: string;
  phone: string;
  whatsapp_number: string;
  nationality: string;
  location: string;
  instagram_url: string;
  facebook_url: string;
  linkedin_url: string;
  x_url: string;
};

export type SocialLink = {
  label: "Instagram" | "Facebook" | "LinkedIn" | "X";
  href: string;
};
