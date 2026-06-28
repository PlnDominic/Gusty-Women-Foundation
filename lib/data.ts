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

export interface TeamMember {
  name: string
  title: string
  bio?: string
  image: string
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
    content: `When we launched Cohort 1 of the GWF Masterclass, we had one goal: give Ghana's most driven young women the tools, mentors and community they needed to stop dreaming and start building. Forty women joined us at Yota East, Legon for three days of intensive sessions, fireside chats and hands-on workshops — and what unfolded exceeded every expectation we had set.

Day one opened with energy that was almost electric. Women arrived from across Ghana — from Accra to Cape Coast to the Northern regions — each carrying a different dream, a different story and a shared determination to make something happen. The morning kicked off with an orientation that quickly dissolved into a deep conversation about identity and ambition. What does it mean to be a gutsy woman today? What has stopped you before, and what brings you here now? The room filled with honest, vulnerable and powerful answers.

By afternoon, our mentors were already at work. Participants rotated through structured sessions on business modelling, personal branding and financial storytelling — not theory, but real tools walked through with real examples from Ghana's entrepreneurial landscape. In the evening, a fireside session with our lead mentor ran over by forty-five minutes because nobody wanted it to end.

Day two pushed harder. Participants worked in small peer groups to stress-test each other's ideas, identify blind spots and sharpen their pitches. Our mentors challenged assumptions, asked uncomfortable questions and refused to let vague language substitute for real plans. By the time the day wrapped, women who had arrived with rough ideas were leaving with structured frameworks, clearer positioning and the beginnings of actual execution plans.

Day three was about momentum. Participants made commitments — to their peers, to their mentors and to themselves — and the room held them to it. We closed with a ceremony that was part celebration, part accountability launch. Forty women walked in as applicants and walked out as GWF alumni, equipped with networks, plans and the shared belief that building something real is entirely possible.

In the months since Cohort 1, we have watched those women move. Businesses have been registered. Partnerships formed. Products launched. Conversations started that are still bearing fruit. Cohort 1 proved what we believed: when you give Ghana's women the right environment, the results take care of themselves.

Cohort 2 is now open. If you are ready to build, we are ready for you.`,
    author: 'GWF Team',
    date: '2026-03-15',
    image: '/assets/gwf-group-photo.jpg',
    category: 'Impact',
  },
  {
    slug: 'why-mentorship-matters',
    title: 'Why Mentorship is the Missing Piece for Young Women in Business',
    excerpt: 'Access to the right mentor can compress years of learning into months. Here is the evidence and what we are doing about it.',
    content: `The statistics are stark: women-led businesses in Sub-Saharan Africa receive less than 2% of venture capital funding. But the gap is not talent. It is access — access to networks, to knowledge, and most critically, to mentors who have walked the path before and are willing to walk it again alongside someone else.

In Ghana, the story is the same. Talented, driven young women are everywhere. You find them in university lecture halls, at trade fairs, behind market stalls, in corporate offices dreaming of something more. What is rarely available to them is structured guidance from someone who has built something, faced the obstacles and come out the other side. That absence is not small. It is the difference between an idea that stays in a notebook and a business that reaches a customer.

Research consistently shows that mentored entrepreneurs grow their ventures faster, make fewer costly mistakes and build more durable businesses than those who go it alone. A McKinsey study found that women who had mentors were more likely to aspire to senior roles, more likely to ask for promotions and more likely to receive them. The mechanism is simple: mentorship closes the confidence gap that experience has not yet filled.

At the Gutsy Women Foundation, we have seen this up close. In Cohort 1, women arrived with ideas they were afraid to say out loud. By day two, those same women were in front of mentors dissecting their assumptions, arguing for their positioning and asking hard questions about unit economics. The shift was not in their intelligence — that was always there. The shift was in their belief that their ideas were worth taking seriously, and that the path forward was knowable.

Mentorship works best when it is structured, when it is mutual and when it is embedded in a community of peers who are going through the same thing at the same time. That is the model we have built, and that is the model that produces the results we see.

If you are a young woman in Ghana with ambition but without a roadmap, the Gutsy Women Foundation exists because of you and for you. And if you are an experienced leader, founder or executive with lessons to share, we want to connect you with the next generation that needs them.

The gap is real. The solution is available. The only question is whether we are willing to show up for each other.`,
    author: 'Raynelle Nana Yaa Boadu, Founder & CEO',
    date: '2026-04-20',
    image: '/assets/gwf-podium.jpg',
    category: 'Insights',
  },
  {
    slug: 'cohort-2-announcement',
    title: 'Cohort 2 is Here: Apply Now for the Ignite • Build • Scale Masterclass',
    excerpt: 'Applications are open for the second Gutsy Women Foundation Masterclass: 5th to 7th August 2026 at Yota East, Legon.',
    content: `We are thrilled to announce that applications are now open for Cohort 2 of the GWF Mentorship Program Masterclass. This year's theme — Ignite, Build, Scale: Turning Dreams Into Reality — speaks to our belief that every young woman in Ghana has the raw material to build something remarkable. What she needs is the right environment to ignite it, the right tools to build it and the right network to scale it.

Cohort 2 takes place from 5th to 7th August 2026 at Yota East, Legon, Accra. Doors open at 8:00 AM each day. If you were part of Cohort 1, you already know what this looks like. If you are new, here is what to expect.

Three days of structured intensity. Morning sessions with experienced mentors covering leadership, financial planning, business strategy and personal branding. Afternoon workshops where you work on your own idea, challenge and be challenged by peers, and receive real-time feedback from people who have built businesses before. Evening conversations that go deeper — on purpose, on identity, on what it actually takes to sustain the commitment required to build something.

Cohort 2 is not a conference. You will not sit in a hall and listen to speeches. You will work, and you will be held to what you commit to. That is the culture we built in Cohort 1, and it produced real results. Women left with plans, with partnerships and with the kind of confidence that only comes from having your ideas taken seriously by people who know what they are talking about.

The application fee for Cohort 2 is GHS 550. This covers your programme materials, all sessions and daily lunch for the three days. Spaces are limited. Cohort 1 filled quickly, and we expect Cohort 2 to do the same.

To apply, complete the application form on our website. You will be asked about your background, your current occupation and your goals for the programme. We review every application and select participants based on drive, clarity of purpose and readiness to engage fully in the three days.

If this is your year to stop talking and start building, we are waiting for you.`,
    author: 'GWF Team',
    date: '2026-05-01',
    image: '/assets/gwf-cake-cutting.jpg',
    category: 'Announcement',
  },
  {
    slug: 'meet-the-mentor-abena',
    title: 'Meet the Mentor: Abena Asante on Building a Business with No Safety Net',
    excerpt: 'In our mentor spotlight series, Abena shares how she left a corporate career to bootstrap a supply-chain company and what she wishes she had known.',
    content: `Abena Asante built her logistics company from nothing but a laptop, a phone and an obsessive understanding of how supply chains break in West Africa. Today her company employs 28 people and is expanding into Togo and Côte d'Ivoire. She will be one of the lead mentors at Cohort 2, and she sat down with us to talk honestly about what it took.

GWF: You left a well-paid corporate role to start Asante Supply Co. What was going through your head?

Abena: Honestly? Terror. I had a good salary, health coverage and a title that impressed people at dinner parties. But I was watching supply chains fail around me every day and thinking — I understand this problem better than most people in this room. If I stay quiet and comfortable, someone else will solve it poorly. That thought was more uncomfortable than the risk.

GWF: The early years were difficult. What did you get wrong?

Abena: I thought the product would sell itself because the problem was obvious. I did not invest enough in relationships. In Ghana — in West Africa broadly — trust moves before contracts. I had a great logistics solution but no one knew me well enough to bet their business on me. I spent the first eighteen months rebuilding that social capital from scratch. That is time I could have saved if I had listened better earlier.

GWF: What does good mentorship look like to you?

Abena: A good mentor tells you what you cannot see because you are too close to the thing. They do not tell you what to do — they ask you the questions that force you to see clearly. The best mentor I ever had never gave me a single answer. She just kept asking "and then what?" until I had worked through the consequences of my own logic. That kind of challenge is uncomfortable. It is also irreplaceable.

GWF: What will you focus on with the Cohort 2 participants?

Abena: Operations and the mindset underneath operations. Most early-stage founders are great at selling the vision. Very few have thought carefully about how the product actually reaches the customer at a cost that works. I want to help women think about that before they have learned it the expensive way.

GWF: What do you wish someone had told you at the beginning?

Abena: That asking for help is strategy, not weakness. I wasted so much time trying to figure things out alone because I thought that was what real entrepreneurs did. The ones who move fastest are the ones who are relentlessly resourceful — and that means being willing to say "I don't know, but I know someone who does."

We are glad Abena is that person for Cohort 2.`,
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
  {
    name: 'Edith Amakye',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Edith arrived at Cohort 1 with ambition and curiosity. Through expert-led workshops, peer accountability circles, and one-on-one mentorship, she gained both the clarity and the courage to pursue her goals with intention.',
    outcome: 'Cohort 1 Graduate — focused, fearless, and moving forward.',
    image: '/assets/gwf-cohort1-edith-amakye.jpg',
  },
  {
    name: 'Fatimatu Dauda Affanyi',
    cohort: 'Cohort 1',
    venture: 'GWF Mentorship Masterclass',
    story: 'Fatimatu brought her whole self to Cohort 1 and left with so much more. The masterclass opened her eyes to new possibilities, connected her with mentors who understood her journey, and equipped her with tools to build a future on her own terms.',
    outcome: 'Cohort 1 Graduate — inspired, equipped, and unstoppable.',
    image: '/assets/gwf-cohort1-fatimatu-affanyi.jpg',
  },
]

export const impactMetrics: ImpactMetric[] = [
  {
    value: 35000,
    suffix: '+',
    label: 'Girls connected',
    description: 'Young women and girls reached through GWF outreach, events, and awareness programmes.',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Girls mentored',
    description: 'Young women who have received direct mentorship through GWF programmes.',
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

export const team: TeamMember[] = [
  {
    name: 'Raynelle Nana Yaa Boadu',
    title: 'Founder & Chief Executive Officer',
    bio: 'A gender advocate, communications professional, confidence coach, and writer, Raynelle leads GWF\'s programmes and interventions with deep empathy and strategic vision. She holds a BA in Strategic Communication, an MA in Gender and Law, and an MBA in Marketing, and is currently pursuing an MA in Development Management to further strengthen her capacity to design sustainable initiatives for women and girls across Ghana.',
    image: '/assets/ceo-raynelle.jpg',
  },
  {
    name: 'Hariratah Ibrahim Doudu',
    title: 'Social Media Lead',
    bio: 'A law professional and emerging leader passionate about legal excellence, leadership and public service. She holds an LL.B from GIMPA and is pursuing the Professional Law Course at the Ghana School of Law. Hariratah serves as VP of the Ghana School of Law Students\' Representative Council and leads GWF\'s communications and visibility.',
    image: '/assets/team-hariratah-ibrahim-doudu.jpg',
  },
  {
    name: 'Eugenia Abena Ahenkorah',
    title: 'Administrative Secretary',
    bio: 'A dedicated emerging leader in the health sciences at the University of Ghana and proud alumna of GWF Mentorship Cohort 1. Eugenia serves as Administrative Secretary of the GWF Administrative Team and Vice President of the UG Medical Laboratory Science Students\' Association (UG-MELSSA). Her work spans student advocacy, professional development and community service.',
    image: '/assets/team-eugenia-abena-ahenkorah.jpg',
  },
  {
    name: 'Eunice Esi Esaaba Essien',
    title: 'Youth Advocate',
    bio: 'A dynamic youth advocate and President of the Ghana Union of Professional Students. Eunice holds a BA in Public Relations Management and a Master of Arts in Digital and Strategic Marketing Management, bringing sharp communications and strategic thinking to everything she does.',
    image: '/assets/team-eunice-esi-esaaba-essien.jpg',
  },
  {
    name: 'Adwoa Sefah Gyasiwaa-Agyemang',
    title: 'Project Director & Administrative Lead',
    bio: 'A student leader and emerging professional passionate about leadership, youth development and social impact. Adwoa serves as Project Director, Administrative Lead and member of the Planning & Organising Team at GWF, and as Tutorials Lead for the 1835 Group. She is the former General Secretary of the University of Ghana Accra City Campus.',
    image: '/assets/team-adwoa-sefah-gyasiwaa-agyemang.jpg',
  },
  // Add more team members below.
  // Steps: drop photo in public/assets/, then copy and fill in a new block:
  //
  // {
  //   name: 'Full Name',
  //   title: 'Role / Title',
  //   bio: 'Short one- or two-sentence bio.',
  //   image: '/assets/your-photo-filename.jpg',
  // },
]

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug)
}

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
