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
    slug: 'anti-drug-mentorship',
    title: 'Anti-Drug Abuse & Mentorship Program',
    subtitle: 'School Outreach',
    theme: 'Empowering Minds, Shaping Futures',
    description: 'Empowering young minds at the Ghana National Basic Inclusive School through meaningful conversations on career paths, the importance of choosing the right role models, and purposeful living.',
    longDescription: 'The GWF Anti-Drug Abuse & Mentorship Program brought the Gutsy Women Foundation directly into the Ghana National Basic Inclusive School, engaging students in open dialogue about the dangers of drug abuse, the power of informed choices, and the value of building purpose-driven futures. Sessions covered career exploration, the importance of selecting positive role models, and practical ways to invest time wisely through learning, volunteering, and community service. Together, GWF mentors and students reflected on what it means to break cycles, reach out for support, and take the first steps toward recovery and resilience. The program reinforced that recovery and growth start with a single choice — and that no young person has to navigate that path alone.',
    status: 'closed',
    statusLabel: 'Completed',
    image: '/assets/gwf-antidrug-facilitator.jpg',
    location: 'Ghana National Basic Inclusive School',
  },
  {
    slug: 'anti-drug-cape-coast',
    title: 'Anti-Drug Abuse Campaign & Mentorship Drive',
    subtitle: 'Cape Coast Schools',
    theme: 'Impacting Lives, One Conversation at a Time',
    description: 'A powerful outreach at Ghana National College and Ghana National Basic Inclusive School, Cape Coast — where students shared personal experiences, explored entrepreneurship and personal branding, and found a safe space to be heard.',
    longDescription: 'The GWF Anti-Drug Abuse Campaign & Mentorship Drive at Ghana National College and Ghana National Basic Inclusive School, Cape Coast was a remarkable success. Students showed incredible courage — sharing personal experiences, deepening their understanding of drug abuse, and actively engaging in meaningful conversations. From asking thoughtful questions about entrepreneurship and course selection to learning about personal branding and responsible social media use, the enthusiasm was truly inspiring. The GWF team was especially moved by those who opened up about their struggles. With the support of the GWF counselling team, they found a safe space to be heard, guided, and encouraged. This programme is a testament to what happens when young people are given the right environment to speak freely, ask boldly, and envision brighter futures — impacting lives, one conversation at a time.',
    status: 'closed',
    statusLabel: 'Completed',
    image: '/assets/gwf-cape-coast-speaker.jpg',
    location: 'Cape Coast, Ghana',
  },
  {
    slug: 'iwd-mentorship-adenta',
    title: "International Women's Day Mentorship Session",
    subtitle: 'Adenta Primary & JHS',
    theme: 'Give to Gain',
    description: 'Celebrating International Women\'s Day with students of Adenta Primary and Junior High School, Amrahia–Adenta — exploring effort, discipline, personal hygiene, confidence, and the power of lifting each other up.',
    longDescription: 'As part of this year\'s International Women\'s Day celebration, the Gutsy Women Foundation hosted a mentorship session for students of Adenta Primary and Junior High School, Amrahia–Adenta. Through engaging conversations built around the theme "Give to Gain," the girls explored powerful lessons about effort, discipline, personal hygiene, saying no to drugs, self-confidence, and supporting one another instead of competing. The GWF team reminded students that success does not appear overnight — every woman who has made it gave something first: time, courage, and consistency. Alongside the mentorship session, GWF donated sanitary supplies and essentials to the school, reinforcing the message that empowering girls means meeting both their minds and their practical needs. The future is bright when girls are empowered to believe, grow, and lift each other up.',
    status: 'closed',
    statusLabel: 'Completed',
    image: '/assets/gwf-iwd-address.jpg',
    location: 'Adenta Primary & JHS, Amrahia–Adenta',
  },
  {
    slug: 'anti-drug-campaign-drive',
    title: 'Breaking Chains, Building Futures',
    subtitle: 'Multi-School Campaign Drive',
    theme: 'You Are Not Alone',
    description: 'A transformative anti-drug campaign that has journeyed through Abuakwa State College, Mount Sinai SHS, Ghana National College, La PRESEC, Benkum Senior High, and Holy Trinity Senior High — reaching thousands of students with real conversations, truth, and healing.',
    longDescription: 'What began as a small vision to raise awareness has evolved into a transformative movement touching hearts, stirring minds, and igniting hope across Ghana. The Gutsy Women Foundation\'s Anti-Drug Abuse Campaign Drive has journeyed through Abuakwa State College, Mount Sinai Senior High, Ghana National College, La Presby SHS (La PRESEC), Benkum Senior High, and Holy Trinity Senior High (HOTCASS) — reaching thousands of students with honest conversations about one of the most silent but destructive threats facing young people today.\n\nEach school visit has unveiled not just curiosity, but pain, fear, and untold struggles hidden behind youthful smiles. Through open discussions, anonymous confessions, and interactive counselling sessions, the campaign has become a safe space for many students to share stories they\'ve held in silence for far too long. Students have shared stories of turning to drugs to escape domestic violence at home, using alcohol to numb grief after losing a friend, and self-destructive habits born of unprocessed trauma. These stories expose the truth — drug abuse among students is not just about curiosity or rebellion. It is about pain, pressure, and a cry for help.\n\nThrough the dedicated efforts of GWF counsellors and volunteers, students receive not just awareness but active support. Sessions emphasise that healing is possible, and that seeking help is a sign of courage, not weakness. GWF\'s mission goes beyond saying "Don\'t do drugs" — it is about saying "You are not alone."\n\nThe Gutsy Women Foundation remains committed to continuing this life-changing campaign across Ghana, educating, counselling, and empowering students to resist peer pressure, seek help, and live purpose-driven lives. Every child deserves love, guidance, and the chance to dream free from the chains of addiction.',
    status: 'closed',
    statusLabel: 'Ongoing Campaign',
    image: '/assets/gwf-campaign-auditorium.jpg',
    location: 'Multiple Schools Across Ghana',
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
  {
    slug: 'breaking-chains-building-futures',
    title: "Breaking Chains, Building Futures — GWF's Anti-Drug Abuse Campaign Journey",
    excerpt: 'What began as a small vision to raise awareness has evolved into a transformative movement touching hearts across Ghana — from Abuakwa State College to La PRESEC and Holy Trinity Senior High.',
    content: `FOR IMMEDIATE RELEASE — November 9, 2025

In a world where young people are constantly bombarded with societal pressures, identity struggles, and emotional battles, the Gutsy Women Foundation has taken a bold step to confront one of the most silent but destructive threats facing our youth today — Drug Abuse.

What began as a small vision to raise awareness has evolved into a transformative movement touching hearts, stirring minds, and igniting hope. Our Anti-Drug Abuse Campaign Drive has journeyed through several senior high schools across Ghana — from Abuakwa State College to Mount Sinai Senior High, Ghana National College, La Presby SHS (La PRESEC), Benkum Senior High, and Holy Trinity Senior High (HOTCASS) — reaching thousands of students with real conversations, truth, and healing.

Each school we visited has unveiled not just curiosity, but pain, fear, and untold struggles hidden behind youthful smiles. Through open discussions, anonymous confessions, and interactive counselling sessions, our campaign has become a safe space for many students to share stories they've held in silence for far too long.

One unforgettable revelation came from a young girl who bravely shared that she resorts to drugs whenever her parents fight — fights that often turn violent. Her father physically assaults her mother, and the children are forced to watch helplessly, sometimes waking up in the dead of night to the horror of abuse. For her, drugs became a means to escape — a false sense of peace in a world of chaos.

Another heart-wrenching story was from a student who turned to alcohol to numb her guilt and depression after an unfortunate incident involving a friend that led to the friend's passing. "I just couldn't face the pain," she said. "Drinking made me forget — at least for a while."

And then there was a quiet young girl who lives in constant fear of death after losing her two best friends — one in junior high and another in senior high. Her trauma has driven her to self-destructive habits in an attempt to outrun her grief.

Why Are Our Youth Turning to Drugs?

These stories expose the truth — drug abuse among students is not just about curiosity or rebellion. It's about pain, pressure, and a cry for help. From our interactions, several recurring causes have emerged: parental neglect and broken homes, peer pressure and the desperate need to fit in, emotional trauma, sexual abuse, and loss, lack of financial support and guidance, and curiosity and misinformation about drugs.

These are not just statistics; they are lived realities of the next generation — a reminder that drug abuse is not merely a moral issue but a social, emotional, and psychological one.

The Gutsy Response: Healing Through Hope

Through the dedicated efforts of our counsellors and volunteers, the Gutsy Women Foundation has been able to offer not just awareness, but active counselling and support for affected students. Our sessions emphasise that healing is possible, and that seeking help is a sign of courage, not weakness. We have seen tears turn into conversations, shame replaced with openness, and despair replaced with determination. Our mission goes beyond saying "Don't do drugs" — it's about saying "You are not alone."

A Call to Parents and Guardians

Parents must rise to the call. We urge them to be active participants in their children's emotional and social development — to build healthy communication, offer guidance, and create safe spaces where children can share their fears without judgment. A connected home is the first line of defence against drug abuse.

The Road Ahead

The Gutsy Women Foundation remains committed to continuing this life-changing campaign across Ghana. We aim to educate, counsel, and empower students to resist peer pressure, seek help, and live purpose-driven lives.

"Every child deserves love, guidance, and the chance to dream free from the chains of addiction."

Together, we are breaking barriers, restoring hope, and raising a generation that is brave, bold, and GUTSY.

— Raynelle Nana Yaa Boadu, Founder & CEO, Gutsy Women Foundation`,
    author: 'Raynelle Nana Yaa Boadu, Founder & CEO',
    date: '2025-11-09',
    image: '/assets/gwf-campaign-auditorium.jpg',
    category: 'Press Release',
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
    name: 'Bernice Amoah',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Bernice joined Cohort 1 with determination and an eagerness to grow. Through intensive sessions, peer circles, and one-on-one mentorship, she sharpened her vision and built a network of like-minded women ready to take on the world.',
    outcome: 'Cohort 1 Graduate — equipped, empowered, and ready to lead.',
    image: '/assets/gwf-cohort1-bernice-amoah.jpg',
  },
  {
    name: 'Asante-Ansah Kynell Marklyna',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Kynell Marklyna brought energy and ambition to every session of Cohort 1. The masterclass gave her the tools to translate bold ideas into actionable steps, supported by mentors who believed in her potential from day one.',
    outcome: 'Cohort 1 Graduate — turning ambition into action.',
    image: '/assets/gwf-cohort1-kynell-marklyna.jpg',
  },
  {
    name: 'Nana Kwegyirba Koomson',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Nana Kwegyirba arrived at Cohort 1 with a vision and left with a plan. The three-day masterclass connected her with experienced mentors and a community of driven women committed to building purposeful futures.',
    outcome: 'Cohort 1 Graduate — vision refined, confidence strengthened.',
    image: '/assets/gwf-cohort1-nana-koomson.jpg',
  },
  {
    name: 'Regina Clottey',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Regina embraced every moment of Cohort 1 — the workshops, the fireside conversations, and the accountability sessions. She left with clarity, a powerful network, and the confidence to pursue her goals without apology.',
    outcome: 'Cohort 1 Graduate — clear vision, unstoppable drive.',
    image: '/assets/gwf-cohort1-regina-clottey.jpg',
  },
  {
    name: 'Shemanica Naa Ayeley Aryeetey',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Shemanica Naa Ayeley brought her whole self to Cohort 1. Through honest conversations and expert-led sessions, she discovered new dimensions of her potential and built connections that continue to fuel her growth.',
    outcome: 'Cohort 1 Graduate — inspired, connected, and unstoppable.',
    image: '/assets/gwf-cohort1-shemanica-aryeetey.jpg',
  },
  {
    name: 'Gloria Darko',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Gloria joined Cohort 1 ready to grow, and the masterclass delivered. From business strategy to personal leadership, she gained practical tools and a circle of mentors who have continued to champion her journey beyond the programme.',
    outcome: 'Cohort 1 Graduate — grounded in purpose, growing in impact.',
    image: '/assets/gwf-cohort1-gloria-darko.jpg',
  },
  {
    name: 'Lawrencia Oparebea Sakyi',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Lawrencia came to Cohort 1 seeking direction and found a community. The mentorship sessions, peer collaborations, and expert guidance helped her chart a clear path forward — one she continues to walk with confidence and purpose.',
    outcome: 'Cohort 1 Graduate — purposeful, prepared, and ready to soar.',
    image: '/assets/gwf-cohort1-lawrencia-sakyi.jpg',
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
