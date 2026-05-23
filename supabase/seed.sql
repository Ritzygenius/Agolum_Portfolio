insert into public.profiles (full_name, professional_title, tagline, summary, nationality, location, email, phone, whatsapp_number, portrait_url, cv_url, calendly_url, instagram_url, facebook_url, linkedin_url, x_url)
values (
  'Chinagolum Arinzechukwu Igwe',
  'Tech Leader | Digital Strategist | Program Manager | ICT Policy Advisor | Digital Marketing Expert | Web Developer | Entrepreneur',
  'Empowering Individuals, Organizations, and Governments Through Technology, Education, and Innovation.',
  'Experienced technology leader, digital strategist, educator, and ICT policy advisor with over 10 years of experience in program management, digital marketing, web development, youth empowerment, and government technology transformation.',
  'Nigerian',
  'Enugu, Nigeria',
  'agolumarinze@gmail.com',
  '09048127607',
  '09048127607',
  '/agolu-agolu.jpeg',
  'https://drive.google.com/file/d/1vmj6s-yRqxFz4n5HHZyMWFE_MCgML67L/view?usp=drive_link',
  'https://calendly.com/agolumarinze',
  'https://www.instagram.com/ritzyagolum?igsh=OW00NHdhcmE5dnh5',
  'https://www.facebook.com/igwea',
  '#',
  'https://x.com/Ritzygeniusa'
);

insert into public.services (title, slug, description, outcomes, icon, sort_order) values
('Website Development','website-development','Premium, conversion-focused websites and web platforms built for credibility, speed, SEO, and measurable business outcomes.', array['Brand websites','Portfolio platforms','Landing pages','Business automation'], 'Code2', 1),
('Digital Marketing','digital-marketing','Data-informed growth strategy spanning content, funnels, social campaigns, paid media, analytics, and community building.', array['Campaign strategy','SEO foundations','Social growth','Analytics reporting'], 'TrendingUp', 2),
('ICT Consulting','ict-consulting','Technology advisory for organizations and public institutions that need pragmatic digital transformation roadmaps.', array['ICT policy','Systems audit','Digital roadmaps','Vendor guidance'], 'ShieldCheck', 3),
('Program Management','program-management','Structured planning, delivery, stakeholder management, and reporting for education, innovation, and transformation programs.', array['Program design','Delivery systems','Monitoring','Impact reporting'], 'ClipboardCheck', 4),
('Corporate Training','corporate-training','Hands-on training in digital literacy, productivity tools, marketing, web technology, and organizational adoption.', array['Team upskilling','Workshops','Curriculum design','Assessments'], 'Presentation', 5),
('Government Digital Transformation','government-digital-transformation','Civic technology strategy for local governments seeking better service delivery, transparency, and citizen engagement.', array['Digital governance','Capacity building','Tech hub strategy','Public service innovation'], 'Building2', 6);

insert into public.achievements (title, organization, description, icon, year, sort_order) values
('Head of Programs','Learnexity','Leads program strategy, cohort delivery, learning operations, and innovation-focused training experiences.','Network','Current',1),
('Digital Marketing Facilitator','Learnexity','Trains learners and teams in digital growth strategy, content systems, campaign planning, and analytics.','Megaphone','Current',2),
('Senior Special Assistant on ICT','Igbo-Etiti LGA','Advises local government leadership on digital transformation, ICT policy, and public-sector technology adoption.','Landmark','Current',3),
('Manager','Igbo-Etiti Tech Hub','Coordinates hub operations, digital skills development, community innovation, and youth empowerment initiatives.','Cpu','Current',4),
('Programs Delivery Manager','Career Crest Edu','Managed education programs, training delivery systems, and learner outcomes for professional development cohorts.','GraduationCap','Leadership',5),
('CEO','RitzyGenius Enterprise','Builds digital products, consulting engagements, and entrepreneurial programs for organizations and individuals.','BriefcaseBusiness','Founder',6);

insert into public.projects (title, slug, short_description, full_description, challenge, solution, results, technologies, client_name, industry, category, live_url, github_url, video_url, featured, published, completed_at, thumbnail_url) values
('Igbo-Etiti Tech Hub Digital Enablement','igbo-etiti-tech-hub-digital-enablement','A civic technology and youth empowerment initiative for skills, innovation, and local digital transformation.','Program architecture and operational leadership for a public-sector tech hub designed to expand digital access, train young people, and support ICT adoption in local government.','Young people and public institutions needed a practical structure for skills development and technology adoption.','Designed program workflows, training tracks, community engagement systems, and stakeholder reporting rhythms.','Improved visibility for local innovation, created a platform for recurring digital skills programs, and strengthened ICT capacity.', array['Program Design','ICT Policy','Digital Literacy','Stakeholder Management'], 'Igbo-Etiti Local Government','Government','Government Projects','#', null, null, true, true, '2025-10-01','/project-government.svg'),
('Learnexity Digital Skills Programs','learnexity-digital-skills-programs','Training systems for digital marketing, productivity, and employability-focused technology education.','End-to-end program leadership for technology and digital marketing learning experiences focused on practical capability, confidence, and career outcomes.','Learners needed structured, market-relevant training that moved beyond theory into practice.','Built facilitation plans, cohort operations, project-based assignments, and assessment frameworks.','Supported scalable learner outcomes and strengthened Learnexity reputation for practical digital education.', array['Digital Marketing','Training','Curriculum','Analytics'], 'Learnexity','Education Technology','Training Programs','#', null, null, true, true, '2025-08-01','/project-training.svg'),
('SME Web Presence Transformation','sme-web-presence-transformation','Responsive business websites and digital growth foundations for Nigerian SMEs and personal brands.','A portfolio of web development engagements focused on helping entrepreneurs and organizations establish credible, searchable, conversion-ready online presences.','Many businesses had weak digital credibility, low discoverability, and fragmented customer journeys.','Delivered responsive websites, SEO metadata, lead forms, WhatsApp CTAs, analytics, and clear service storytelling.','Improved brand trust, simplified lead generation, and created reusable digital assets for client growth.', array['Next.js','WordPress','SEO','Analytics','WhatsApp'], 'Multiple Clients','SME','Web Development','#', '#', null, true, true, '2025-06-01','/project-web.svg'),
('Digital Campaign Growth Systems','digital-campaign-growth-systems','Marketing strategy, content calendars, and measurement systems for education and enterprise campaigns.','Digital marketing operations built around audience clarity, campaign planning, compelling content, and measurable performance indicators.','Organizations needed consistent campaign execution and clearer reporting.','Created campaign calendars, social content systems, lead capture journeys, and performance dashboards.','Better audience engagement, stronger campaign discipline, and improved decision-making from analytics.', array['Content Strategy','Meta','Google Analytics','SEO','Email'], 'Education and Enterprise Clients','Digital Marketing','Digital Marketing','#', null, null, false, true, '2025-04-01','/project-marketing.svg');

insert into public.certifications (name, issuer, date, description) values
('Digital Marketing Certification','Genesys Tech Hub','2023-01-01','Professional training in digital marketing strategy, campaign execution, content, and growth channels.'),
('Advanced Productivity Tools','Wootlab Foundation','2022-01-01','Advanced capability in workplace productivity tools, collaboration workflows, and digital operations.'),
('Productivity Tools and Basic Digital Literacy','Wootlab Foundation','2021-01-01','Foundational digital literacy and productivity skills for modern work and training delivery.'),
('BSc Biochemistry','University of Nigeria Nsukka','2018-01-01','Bachelor of Science degree with a rigorous foundation in scientific thinking, research, and analytical discipline.');

insert into public.testimonials (quote, name, role, company) values
('Chinagolum combines strategic clarity with practical execution. His programs leave people more capable and organizations more confident.','Program Partner','Education Lead','Learning Ecosystem'),
('He understands both technology and people. That rare mix makes his consulting useful from policy room to training room.','Public Sector Stakeholder','Administrative Leader','Local Government'),
('His digital marketing sessions were practical, current, and immediately useful. The experience changed how our team thinks about growth.','Training Participant','Entrepreneur','SME Founder');

insert into public.blog_posts (title, slug, excerpt, content, category, tags, published_at, published) values
('Digital Transformation Starts With People','digital-transformation-starts-with-people','Why government and organizational technology programs succeed when they begin with capacity, clarity, and trust.','Digital transformation is not simply the purchase of software. It is the disciplined work of helping people, systems, and institutions adopt better ways to serve their mission.', 'ICT Strategy', array['ICT','Government','Leadership'], '2026-01-15', true),
('What Every SME Website Must Do','what-every-sme-website-must-do','A practical framework for building business websites that earn trust and generate qualified conversations.','A strong SME website should communicate credibility quickly, make the offer clear, answer common objections, and provide simple paths to contact.', 'Web Development', array['Web','SEO','Business'], '2026-02-10', true);

insert into public.site_settings (site_title, tagline, email, phone, whatsapp_number, address, cv_url, hero_image_url)
values ('Chinagolum Arinzechukwu Igwe', 'Empowering Individuals, Organizations, and Governments Through Technology, Education, and Innovation.', 'agolumarinze@gmail.com', '09048127607', '09048127607', 'Enugu, Nigeria', 'https://drive.google.com/file/d/1vmj6s-yRqxFz4n5HHZyMWFE_MCgML67L/view?usp=drive_link', '/agolu-agolu.jpeg');

insert into public.social_links (label, url, icon, sort_order) values
('Instagram','https://www.instagram.com/ritzyagolum?igsh=OW00NHdhcmE5dnh5','Instagram',1),
('Facebook','https://www.facebook.com/igwea','Facebook',2),
('LinkedIn','#','Linkedin',3),
('X','https://x.com/Ritzygeniusa','Twitter',4);
