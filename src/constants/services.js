export const SERVICES = [
  {
    icon: 'Mobile', slug: 'mobile-app-development', name: 'Mobile App Development',
    desc: 'iOS, Android, and cross-platform excellence using Flutter and React Native.',
    features: [
      'Native iOS development with Swift and Android with Kotlin',
      'Cross-platform builds with Flutter and React Native',
      'App Store and Google Play submission handled end-to-end',
      'Push notifications, offline mode, and in-app analytics',
      'Secure REST and GraphQL API integration',
      'Crash reporting, monitoring, and post-launch updates',
    ],
    techStack: [
      { n: 'Flutter',      g: 'Cross-platform' },
      { n: 'React Native', g: 'Cross-platform' },
      { n: 'Swift',        g: 'iOS' },
      { n: 'Kotlin',       g: 'Android' },
      { n: 'Firebase',     g: 'Backend' },
      { n: 'AWS',          g: 'Cloud' },
    ],
    faqs: [
      { q: 'How long does it take to build a mobile app?', a: 'Most projects take 8–20 weeks depending on scope and platform count. We start with a discovery phase to lock the feature set, then move into design and development sprints with regular demos.' },
      { q: 'Do you build for iOS, Android, or both?', a: 'Both — either natively with Swift and Kotlin, or cross-platform with Flutter or React Native, depending on your budget, timeline, and performance needs.' },
      { q: 'Who owns the app and its source code?', a: 'You do. Full source code, design files, and store account access are handed over at project completion — there is no vendor lock-in.' },
      { q: 'Do you offer support after launch?', a: 'Yes. We offer maintenance packages covering bug fixes, OS-version updates, and feature additions, plus crash monitoring so issues get caught early.' },
    ],
  },
  {
    icon: 'Web', slug: 'web-app-development', name: 'Web App Development',
    desc: 'Robust, scalable, and secure web solutions using modern frameworks like React, Angular, and Laravel.',
    features: [
      'Custom web apps built on React, Angular, or Node.js',
      'CMS and admin dashboards tailored to your workflow',
      'REST and GraphQL API design and integration',
      'Secure authentication and role-based access control',
      'Payment gateway and third-party service integration',
      'Performance tuning for fast load times and SEO',
    ],
    techStack: [
      { n: 'React',      g: 'Frontend' },
      { n: 'Angular',    g: 'Frontend' },
      { n: 'Node.js',    g: 'Backend' },
      { n: 'Laravel',    g: 'Backend' },
      { n: 'PostgreSQL', g: 'Database' },
      { n: 'AWS',        g: 'Cloud' },
    ],
    faqs: [
      { q: 'What frameworks do you build with?', a: "We primarily use React and Angular on the frontend and Node.js or Laravel on the backend, chosen based on your team's existing stack and the project's scale." },
      { q: 'Can you build e-commerce functionality?', a: 'Yes — product catalogs, cart and checkout flows, and payment gateway integration with providers like Stripe, Razorpay, and PayPal are things we build regularly.' },
      { q: 'Do you handle hosting and deployment?', a: 'We can set up and manage hosting on AWS or your preferred cloud provider, including CI/CD pipelines for smooth, repeatable deployments.' },
      { q: 'Will the app be mobile-responsive?', a: 'Every web app we build is responsive by default and tested across breakpoints, not adapted as an afterthought.' },
    ],
  },
  {
    icon: 'Brush', slug: 'ui-ux-design', name: 'UI/UX Design',
    desc: 'User-focused designs for delightful experiences — from wireframes to pixel-perfect interfaces.',
    features: [
      'User research, personas, and journey mapping',
      'Low-fidelity wireframes through pixel-perfect UI',
      'Interactive, clickable prototypes for stakeholder review',
      'Reusable design systems and component libraries',
      'Usability testing with real users before build',
      'Developer-ready handoff files and specs',
    ],
    techStack: [
      { n: 'Figma',      g: 'Design' },
      { n: 'Adobe XD',   g: 'Design' },
      { n: 'Photoshop',  g: 'Imaging' },
      { n: 'Illustrator',g: 'Vector' },
      { n: 'Maze',       g: 'Testing' },
      { n: 'Zeplin',     g: 'Handoff' },
    ],
    faqs: [
      { q: "What's the design process?", a: 'We move through research, wireframing, visual design, and prototyping in stages, with review checkpoints at each so nothing gets built on an unapproved direction.' },
      { q: 'How many revisions are included?', a: 'Each stage includes up to two rounds of revisions; additional rounds can be scoped in if requirements shift significantly mid-project.' },
      { q: 'Do you deliver a design system, not just screens?', a: 'Yes — for any multi-screen product we build a reusable component library so your team can extend the design consistently after handoff.' },
      { q: 'What do developers receive at handoff?', a: 'Figma files with inspectable specs, exported assets, and a documented component library — everything a dev team needs without back-and-forth.' },
    ],
  },
  {
    icon: 'Layers', slug: 'graphic-design', name: 'Graphic Design',
    desc: 'Visual storytelling that connects and converts — branding, creatives, and marketing materials.',
    features: [
      'Logo design and full brand identity systems',
      'Marketing collateral — brochures, flyers, and ads',
      'Social media templates and content creatives',
      'Packaging and print-ready design',
      'Pitch decks and presentation design',
      'Brand guideline documentation',
    ],
    techStack: [
      { n: 'Illustrator', g: 'Vector' },
      { n: 'Photoshop',   g: 'Imaging' },
      { n: 'InDesign',    g: 'Layout' },
      { n: 'Figma',       g: 'Design' },
      { n: 'Canva',       g: 'Social' },
    ],
    faqs: [
      { q: "What's included in a brand identity package?", a: 'Logo with variants, a color palette, typography system, and a brand guideline document covering usage rules across digital and print.' },
      { q: 'What file formats do we receive?', a: 'Editable source files (AI, PSD, Figma) plus export-ready formats (PNG, SVG, PDF) for immediate use across web and print.' },
      { q: "What's the typical turnaround?", a: 'Simple deliverables like social creatives typically take 3–5 business days; full brand identity projects run 2–4 weeks depending on scope.' },
      { q: 'Can you work within our existing brand guidelines?', a: 'Yes — we regularly design collateral that extends an existing brand system rather than starting from scratch.' },
    ],
  },
  {
    icon: 'Chart', slug: 'digital-marketing', name: 'Digital Marketing',
    desc: 'Data-backed strategies using SEO, PPC, social media, and content to amplify your brand.',
    features: [
      'Technical and on-page SEO audits and fixes',
      'Paid ads management across Google and Meta',
      'Social media strategy, content, and scheduling',
      'Email marketing campaigns and automation',
      'Conversion rate optimization',
      'Monthly performance reporting and analytics',
    ],
    techStack: [
      { n: 'Google Ads',       g: 'Paid' },
      { n: 'Meta Ads Manager', g: 'Paid' },
      { n: 'GA4',              g: 'Analytics' },
      { n: 'SEMrush',          g: 'SEO' },
      { n: 'Search Console',   g: 'SEO' },
      { n: 'Mailchimp',        g: 'Email' },
    ],
    faqs: [
      { q: 'How soon will we see results?', a: 'Paid campaigns typically show measurable data within 2–4 weeks; organic SEO gains build gradually and usually become visible over 3–6 months.' },
      { q: 'How do you report on performance?', a: 'You get a monthly report covering traffic, conversions, ad spend efficiency, and ranking movement, plus a call to walk through what changed and why.' },
      { q: 'Do you require a minimum ad budget?', a: "We'll recommend a realistic budget based on your industry and goals during onboarding — there's no fixed minimum, but very small budgets limit what paid channels can achieve." },
      { q: 'Which channels do you cover?', a: 'Google Search and Display, Meta (Facebook/Instagram), SEO, and email — we recommend a channel mix based on where your customers actually are.' },
    ],
  },
  {
    icon: 'Cloud', slug: 'cloud-computing', name: 'Cloud Computing',
    desc: 'Scalable cloud infrastructure on AWS, Google Cloud, and Azure for modern businesses.',
    features: [
      'Cloud migration planning and execution',
      'Auto-scaling infrastructure architecture',
      'CI/CD pipeline setup for faster releases',
      'Monitoring, logging, and alerting setup',
      'Cost optimization and resource right-sizing',
      'Backup and disaster recovery planning',
    ],
    techStack: [
      { n: 'AWS',         g: 'Cloud' },
      { n: 'Google Cloud',g: 'Cloud' },
      { n: 'Azure',       g: 'Cloud' },
      { n: 'Docker',      g: 'Containers' },
      { n: 'Kubernetes',  g: 'Containers' },
      { n: 'Terraform',   g: 'IaC' },
    ],
    faqs: [
      { q: 'Which cloud provider do you recommend?', a: "It depends on your existing stack and budget — AWS for breadth of services, Google Cloud for data and ML workloads, Azure if you're already in the Microsoft ecosystem. We advise after an assessment." },
      { q: 'Will there be downtime during migration?', a: 'We plan migrations in phases with rollback points to minimize downtime, and schedule cutover windows during your lowest-traffic periods.' },
      { q: 'How do you handle security and compliance?', a: 'We follow cloud provider security best practices — least-privilege IAM, encrypted storage, and network isolation — and can work within specific compliance requirements you have.' },
      { q: 'Can you reduce our current cloud bill?', a: 'Often, yes. A cost audit typically finds over-provisioned resources, unused storage, or better pricing models that cut spend without hurting performance.' },
    ],
  },
  {
    icon: 'Cog', slug: 'project-management', name: 'Project Management',
    desc: 'Agile delivery with clear communication and milestone-based execution for seamless outcomes.',
    features: [
      'Sprint planning and agile ceremonies',
      'Milestone tracking with clear deliverable dates',
      'Weekly stakeholder reporting',
      'Resource allocation across your project',
      'Risk identification and mitigation planning',
      'A dedicated single point of contact',
    ],
    techStack: [
      { n: 'Jira',   g: 'Tracking' },
      { n: 'Asana',  g: 'Tracking' },
      { n: 'Notion', g: 'Docs' },
      { n: 'Slack',  g: 'Comms' },
      { n: 'Linear', g: 'Tracking' },
    ],
    faqs: [
      { q: 'What methodology do you follow?', a: "Agile/Scrum by default, with two-week sprints, demos, and retrospectives. We adapt cadence for smaller projects that don't need full ceremony overhead." },
      { q: 'How often will we hear from you?', a: 'Weekly status updates at minimum, plus a dedicated Slack channel for anything time-sensitive in between.' },
      { q: 'What tools do you use for tracking?', a: 'Jira or Asana for task tracking, Notion for documentation, and Slack for day-to-day communication — you get direct visibility, not just periodic reports.' },
      { q: 'What happens if something goes off track?', a: 'We flag risks early rather than waiting for a status meeting, and bring options — scope, timeline, or resourcing trade-offs — rather than just the problem.' },
    ],
  },
  {
    icon: 'Bolt', slug: 'business-solutions', name: 'Business Solutions',
    desc: 'Custom-built tools — CRMs, ERPs, dashboards — to streamline operations and drive efficiency.',
    features: [
      'Custom CRM and ERP development',
      'Internal dashboards and reporting tools',
      'Workflow and process automation',
      'Integration with your existing software stack',
      'Role-based access and permission systems',
      'Scalable database architecture',
    ],
    techStack: [
      { n: 'Node.js',    g: 'Backend' },
      { n: 'React',      g: 'Frontend' },
      { n: 'PostgreSQL', g: 'Database' },
      { n: 'AWS',        g: 'Cloud' },
      { n: 'Zapier',     g: 'Automation' },
    ],
    faqs: [
      { q: 'Why build custom instead of using off-the-shelf software?', a: "Off-the-shelf tools work well until your process doesn't fit their template. Custom solutions pay off when you need workflows, integrations, or reporting generic software can't flex to." },
      { q: 'Can it integrate with tools we already use?', a: "Yes — we regularly integrate with existing CRMs, accounting software, and third-party APIs so you're not ripping out what already works." },
      { q: 'How long does a custom solution take to build?', a: 'A focused internal tool can ship in 6–10 weeks; a full CRM or ERP replacement typically runs 3–6 months depending on complexity.' },
      { q: 'Do you provide training for our team?', a: "Yes — we include onboarding documentation and a walkthrough session so your team is confident using the system from day one." },
    ],
  },
];

export const SERVICE_CATS = ['All', 'Development', 'Design', 'Strategy'];

export const SERVICE_TAGS = {
  'Mobile App Development': 'Development',
  'Web App Development':    'Development',
  'UI/UX Design':           'Design',
  'Graphic Design':         'Design',
  'Digital Marketing':      'Strategy',
  'Cloud Computing':        'Development',
  'Project Management':     'Strategy',
  'Business Solutions':     'Strategy',
};

export const PROCESS_STEPS = [
  { n: '01', t: 'Discovery',    d: 'Understanding your vision, goals, and business requirements in depth.',                    icon: 'Search', accent: '#3D6CFF' },
  { n: '02', t: 'Planning',     d: 'Strategizing a clear roadmap and architecture tailored to your product.',                  icon: 'Layers', accent: '#5D58FF' },
  { n: '03', t: 'Design',       d: 'Crafting intuitive and beautiful user experiences that resonate with users.',              icon: 'Brush',  accent: '#7A4CFF' },
  { n: '04', t: 'Development',  d: 'Building fast, scalable, and secure applications with modern technologies.',              icon: 'Cog',    accent: '#B14CFF' },
  { n: '05', t: 'Launch',       d: 'Deploying your solution with continuous testing, support, and optimisation.',             icon: 'Bolt',   accent: '#0B9E6A' },
];

export const WHY_US = [
  { icon: 'Cog',    t: 'Tailored Solutions',      d: "We don't do one-size-fits-all. Every solution is custom-built for your unique business needs." },
  { icon: 'Bolt',   t: 'Tech Expertise',           d: 'Our team brings in-depth technical knowledge across mobile, web, cloud, and design.' },
  { icon: 'Users',  t: 'Global Experience',        d: 'Over 100 successful projects delivered across the world for diverse industries.' },
  { icon: 'Shield', t: 'Client-Centric Approach',  d: 'Your vision is our priority. We stay aligned with your goals at every stage.' },
  { icon: 'Layers', t: 'End-to-End Services',      d: 'From idea to launch and beyond — we are with you at every step of the journey.' },
  { icon: 'Chart',  t: 'Results-Driven',           d: 'Every project is measured by business impact, not just delivery milestones.' },
];

export const TESTIMONIALS = [
  {
    q: "Appnity turned our idea into a powerful app that our users love! Their team understood our vision perfectly and delivered beyond expectations.",
    a: 'Rajesh K.', r: 'Startup Founder', i: 'RK',
  },
  {
    q: "Their design and development team went above and beyond. The UI they created is stunning and our engagement rates have improved significantly.",
    a: 'Anita S.', r: 'Digital Manager', i: 'AS',
  },
  {
    q: "Reliable, professional, and efficient — a pleasure to work with. Appnity delivered our web platform on time and within budget.",
    a: 'John M.', r: 'Business Consultant', i: 'JM',
  },
];
