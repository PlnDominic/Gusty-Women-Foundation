export interface Program {
  slug: string
  title: string
  subtitle?: string
  description: string
  longDescription: string
  status: 'open' | 'soon' | 'closed'
  statusLabel: string
  image: string
  dates?: string
  time?: string
  location?: string
  theme?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: string
}

export interface Mentor {
  name: string
  role: string
  expertise: string
  bio: string
  image: string
}

export interface AlumniStory {
  name: string
  cohort: string
  venture: string
  story: string
  outcome: string
  image: string
}

export interface ImpactMetric {
  value: number
  suffix?: string
  label: string
  description: string
}

export const programs: Program[] = [
  {
    slug: 'masterclass',
    title: 'Mentorship Program Masterclass',
    subtitle: 'Cohort 2',
    theme: 'Ignite • Build • Scale: Turning Dreams Into Reality',
    description: 'A 3-day intensive masterclass connecting ambitious young women with experienced mentors, business builders, and industry leaders.',
    longDescription: 'The Gutsy Women Foundation Mentorship Program Masterclass is a transformative 3-day immersive experience designed for young women who are ready to move beyond dreaming and start building. Through expert-led sessions, one-on-one mentorship, and peer collaboration, you will leave with a concrete plan, a powerful network, and the confidence to execute your goals.',
    status: 'open',
    statusLabel: 'Applications Open',
    image: '/assets/gwf-cake-cutting.jpg',
    dates: '5th - 7th August 2026',
    time: '8:00AM Each Day',
    location: 'Yota East, Legon, Accra',
  },
  {
    slug: 'bootcamp',
    title: 'Business Bootcamp',
    description: 'An intensive weekend bootcamp covering business fundamentals: from ideation to MVP, pitching, and funding basics.',
    longDescription: 'The GWF Business Bootcamp is a weekend intensive focused on practical entrepreneurship skills. Sessions cover ideation and validation, building your first product, financial fundamentals, and how to pitch to investors and partners.',
    status: 'soon',
    statusLabel: 'Coming Soon',
    image: '/assets/gwf-community-outreach.jpg',
    location: 'Accra, Ghana',
  },
  {
    slug: 'webinars',
    title: 'Leadership Webinar Series',
    description: 'Monthly online sessions with successful women leaders sharing strategies in business, policy, and social impact.',
    longDescription: 'Our monthly Leadership Webinar Series brings together accomplished women from across Ghana and the diaspora to share strategies, insights, and lessons learned. Each session is followed by a live Q&A and networking breakout.',
    status: 'open',
    statusLabel: 'Free to Join',
    image: '/assets/gwf-speaker-mic.jpg',
    location: 'Online (Zoom)',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'cohort-1-recap',
    title: 'Cohort 1 in Review: 40 Women, 3 Days, Infinite Possibilities',
    excerpt: 'Here is what happened when we brought 40 of Ghana\'s most driven young women together for the first Gutsy Women Foundation Masterclass.',
    content: 'When we launched Cohort 1 of the GWF Masterclass, we had one goal: give Ghana\'s most driven young women the tools, mentors and community they needed to stop dreaming and start building. Forty women joined us at Yota East for three days of intensive sessions, fireside chats and workshops...',
    author: 'GWF Team',
    date: '2026-03-15',
    image: '/assets/gwf-group-photo.jpg',
    category: 'Impact',
  },
  {
    slug: 'why-mentorship-matters',
    title: 'Why Mentorship is the Missing Piece for Young Women in Business',
    excerpt: 'Access to the right mentor can compress years of learning into months. Here is the evidence and what we are doing about it.',
    content: 'The statistics are stark: women-led businesses in Sub-Saharan Africa receive less than 2% of venture capital funding. But the gap is not talent, it is access. Access to networks, to knowledge, and most critically, to mentors who have walked the path before...',
    author: 'Founder, GWF',
    date: '2026-04-20',
    image: '/assets/gwf-podium.jpg',
    category: 'Insights',
  },
  {
    slug: 'cohort-2-announcement',
    title: 'Cohort 2 is Here: Apply Now for the Ignite • Build • Scale Masterclass',
    excerpt: 'Applications are open for the second Gutsy Women Foundation Masterclass: 5th to 7th August 2026 at Yota East, Legon.',
    content: 'We are thrilled to announce that applications are now open for Cohort 2 of the GWF Mentorship Program Masterclass. This year\'s theme, Ignite, Build, Scale: Turning Dreams Into Reality, speaks to our belief that every young woman in Ghana has the raw material to build something remarkable...',
    author: 'GWF Team',
    date: '2026-05-01',
    image: '/assets/gwf-cake-cutting.jpg',
    category: 'Announcement',
  },
  {
    slug: 'meet-the-mentor-abena',
    title: 'Meet the Mentor: Abena Asante on Building a Business with No Safety Net',
    excerpt: 'In our mentor spotlight series, Abena shares how she left a corporate career to bootstrap a supply-chain company and what she wishes she had known.',
    content: 'Abena Asante built her logistics company from nothing but a laptop, a phone, and an obsessive understanding of how supply chains break in West Africa. Today her company employs 28 people and is expanding into Togo and Côte d\'Ivoire...',
    author: 'GWF Editorial',
    date: '2026-05-28',
    image: '/assets/gwf-speaker-mic.jpg',
    category: 'Mentor Spotlight',
  },
]

export const mentors: Mentor[] = [
  {
    name: 'Abena Asante',
    role: 'Founder, Asante Supply Co.',
    expertise: 'Operations & supply chains',
    bio: 'Abena helps emerging founders turn early traction into repeatable systems, with a focus on logistics, hiring and customer delivery.',
    image: '/assets/gwf-podium.jpg',
  },
  {
    name: 'Naa Korkoi Mensah',
    role: 'Investment Readiness Advisor',
    expertise: 'Pitching & finance',
    bio: 'Naa supports participants with financial storytelling, pitch structure and practical funding preparation for early-stage businesses.',
    image: '/assets/gwf-speaker-mic.jpg',
  },
  {
    name: 'Efua Boateng',
    role: 'Leadership Coach',
    expertise: 'Leadership & confidence',
    bio: 'Efua works with young women to build executive presence, decision-making confidence and personal leadership routines.',
    image: '/assets/gwf-purple-mic.jpg',
  },
  {
    name: 'Akosua Danquah',
    role: 'Brand Strategist',
    expertise: 'Brand & go-to-market',
    bio: 'Akosua guides founders through customer positioning, digital launch plans and building brands that communities trust.',
    image: '/assets/ceo-raynelle.jpg',
  },
]

export const alumniStories: AlumniStory[] = [
  {
    name: 'Akosua D.',
    cohort: 'Cohort 1',
    venture: 'Shea Glow Collective',
    story: 'Akosua joined with a raw idea for a skincare cooperative and left with a launch plan, pricing model and mentor check-ins.',
    outcome: 'Launched her first product bundle and onboarded 12 women suppliers.',
    image: '/assets/event-participant.jpg',
  },
  {
    name: 'Efua B.',
    cohort: 'Cohort 1',
    venture: 'Market Link GH',
    story: 'Efua used the masterclass to validate a marketplace concept connecting student creators with local buyers.',
    outcome: 'Built a pilot customer list and secured her first institutional partner.',
    image: '/assets/event-audience.jpg',
  },
  {
    name: 'Naa K.',
    cohort: 'Cohort 1',
    venture: 'BrightPath Tutoring',
    story: 'Naa refined her education idea into a weekend tutoring service supported by clear goals and accountability.',
    outcome: 'Started paid sessions and recruited a team of four volunteer tutors.',
    image: '/assets/event-hero.jpg',
  },
]

export const impactMetrics: ImpactMetric[] = [
  {
    value: 240,
    suffix: '+',
    label: 'Applicants reached',
    description: 'Young women engaged through applications, outreach and programme interest forms.',
  },
  {
    value: 40,
    label: 'Accepted participants',
    description: 'Women selected for Cohort 1 of the Mentorship Program Masterclass.',
  },
  {
    value: 18,
    label: 'Businesses launched',
    description: 'Participant ventures, pilots or side projects moved from idea to market activity.',
  },
  {
    value: 24,
    label: 'Mentors engaged',
    description: 'Leaders, founders and advisors supporting participants across topics.',
  },
  {
    value: 36,
    label: 'Sessions delivered',
    description: 'Workshops, fireside chats, coaching blocks and peer accountability sessions.',
  },
]

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug)
}

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
