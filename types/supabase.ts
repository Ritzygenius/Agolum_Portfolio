export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

type RowBase = {
  id: string;
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: RowBase & {
          full_name: string;
          professional_title: string | null;
          tagline: string | null;
          summary: string | null;
          nationality: string | null;
          location: string | null;
          email: string | null;
          phone: string | null;
          whatsapp_number: string | null;
          portrait_url: string | null;
          cv_url: string | null;
          calendly_url: string | null;
          instagram_url: string | null;
          facebook_url: string | null;
          linkedin_url: string | null;
          x_url: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]> & { full_name: string };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
        Relationships: [];
      };
      admin_users: {
        Row: RowBase & { auth_user_id: string | null; email: string };
        Insert: Partial<Database["public"]["Tables"]["admin_users"]["Row"]> & { email: string };
        Update: Partial<Database["public"]["Tables"]["admin_users"]["Row"]>;
        Relationships: [];
      };
      projects: {
        Row: RowBase & {
          title: string;
          slug: string;
          short_description: string | null;
          full_description: string | null;
          challenge: string | null;
          solution: string | null;
          results: string | null;
          technologies: string[] | null;
          client_name: string | null;
          industry: string | null;
          category: string | null;
          live_url: string | null;
          github_url: string | null;
          video_url: string | null;
          featured: boolean | null;
          published: boolean | null;
          completed_at: string | null;
          thumbnail_url: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["projects"]["Row"]> & { title: string; slug: string };
        Update: Partial<Database["public"]["Tables"]["projects"]["Row"]>;
        Relationships: [];
      };
      achievements: {
        Row: RowBase & { title: string; organization: string | null; description: string | null; icon: string | null; year: string | null; sort_order: number | null; published: boolean | null };
        Insert: Partial<Database["public"]["Tables"]["achievements"]["Row"]> & { title: string };
        Update: Partial<Database["public"]["Tables"]["achievements"]["Row"]>;
        Relationships: [];
      };
      certifications: {
        Row: RowBase & { name: string; issuer: string | null; date: string | null; description: string | null; certificate_url: string | null; sort_order: number | null; published: boolean | null };
        Insert: Partial<Database["public"]["Tables"]["certifications"]["Row"]> & { name: string };
        Update: Partial<Database["public"]["Tables"]["certifications"]["Row"]>;
        Relationships: [];
      };
      testimonials: {
        Row: RowBase & { quote: string; name: string; role: string | null; company: string | null; photo_url: string | null; sort_order: number | null; published: boolean | null };
        Insert: Partial<Database["public"]["Tables"]["testimonials"]["Row"]> & { quote: string; name: string };
        Update: Partial<Database["public"]["Tables"]["testimonials"]["Row"]>;
        Relationships: [];
      };
      services: {
        Row: RowBase & { title: string; slug: string; description: string | null; outcomes: string[] | null; icon: string | null; sort_order: number | null; published: boolean | null };
        Insert: Partial<Database["public"]["Tables"]["services"]["Row"]> & { title: string; slug: string };
        Update: Partial<Database["public"]["Tables"]["services"]["Row"]>;
        Relationships: [];
      };
      blog_categories: {
        Row: RowBase & { name: string; slug: string };
        Insert: Partial<Database["public"]["Tables"]["blog_categories"]["Row"]> & { name: string; slug: string };
        Update: Partial<Database["public"]["Tables"]["blog_categories"]["Row"]>;
        Relationships: [];
      };
      blog_posts: {
        Row: RowBase & { title: string; slug: string; excerpt: string | null; content: string | null; category: string | null; tags: string[] | null; featured_image_url: string | null; published_at: string | null; published: boolean | null };
        Insert: Partial<Database["public"]["Tables"]["blog_posts"]["Row"]> & { title: string; slug: string };
        Update: Partial<Database["public"]["Tables"]["blog_posts"]["Row"]>;
        Relationships: [];
      };
      contact_messages: {
        Row: RowBase & { name: string; email: string; phone: string | null; subject: string | null; message: string; is_read: boolean | null };
        Insert: Partial<Database["public"]["Tables"]["contact_messages"]["Row"]> & { name: string; email: string; message: string };
        Update: Partial<Database["public"]["Tables"]["contact_messages"]["Row"]>;
        Relationships: [];
      };
      site_settings: {
        Row: RowBase & { site_title: string | null; tagline: string | null; email: string | null; phone: string | null; whatsapp_number: string | null; address: string | null; cv_url: string | null; hero_image_url: string | null };
        Insert: Partial<Database["public"]["Tables"]["site_settings"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["site_settings"]["Row"]>;
        Relationships: [];
      };
      social_links: {
        Row: RowBase & { label: string; url: string; icon: string | null; sort_order: number | null; published: boolean | null };
        Insert: Partial<Database["public"]["Tables"]["social_links"]["Row"]> & { label: string; url: string };
        Update: Partial<Database["public"]["Tables"]["social_links"]["Row"]>;
        Relationships: [];
      };
      project_images: {
        Row: RowBase & { project_id: string | null; image_url: string; alt: string | null; sort_order: number | null };
        Insert: Partial<Database["public"]["Tables"]["project_images"]["Row"]> & { image_url: string };
        Update: Partial<Database["public"]["Tables"]["project_images"]["Row"]>;
        Relationships: [
          {
            foreignKeyName: "project_images_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
