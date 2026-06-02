export interface TeamMember {
  id: string;
  name: string;
  position: string;
  role: 'coordinator' | 'mentor' | 'core' | 'executive' | 'technical' | 'marketing';
  department: string;
  photo: string;
  linkedin: string;
  github?: string;
}

export interface EventItem {
  id: string;
  name: string;
  date: string;
  venue: string;
  type: 'workshop' | 'hackathon' | 'speaker' | 'community';
  status: 'upcoming' | 'past';
  poster: string;
  description: string;
  details: string;
  speakers?: string[];
  itinerary?: { time: string; activity: string }[];
  registrationUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'workshop' | 'hackathon' | 'speaker' | 'community';
  image: string;
  date: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // Faculty Coordinator
  {
    id: 'f-coord-1',
    name: 'Dr. Amit Patel',
    position: 'Faculty Coordinator',
    role: 'coordinator',
    department: 'Computer Science & Engineering',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  // Faculty Mentors
  {
    id: 'f-mentor-1',
    name: 'Prof. Sneha Sharma',
    position: 'Faculty Mentor',
    role: 'mentor',
    department: 'Information Technology',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'f-mentor-2',
    name: 'Prof. Rajesh Mehta',
    position: 'Faculty Mentor',
    role: 'mentor',
    department: 'Computer Engineering',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  // Core Team
  {
    id: 'core-1',
    name: 'Aryan Shah',
    position: 'Student Lead',
    role: 'core',
    department: 'CSE - Cloud Computing (B.Tech)',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: 'core-2',
    name: 'Diya Vyas',
    position: 'Co-Lead',
    role: 'core',
    department: 'Information Technology (B.Tech)',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  // Executive Team
  {
    id: 'exe-1',
    name: 'Karan Dave',
    position: 'Operations Head',
    role: 'executive',
    department: 'CSE (B.Tech)',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'exe-2',
    name: 'Riddhi Patel',
    position: 'Treasurer',
    role: 'executive',
    department: 'Computer Engineering',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  // Technical Team
  {
    id: 'tech-1',
    name: 'Smit Joshi',
    position: 'Cloud Architect Lead',
    role: 'technical',
    department: 'CSE - Cloud Computing',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: 'tech-2',
    name: 'Neha Prajapati',
    position: 'AI/ML Specialist',
    role: 'technical',
    department: 'CSE - Artificial Intelligence',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: 'tech-3',
    name: 'Devan Patel',
    position: 'DevOps Engineer',
    role: 'technical',
    department: 'Information Technology',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  // Marketing & Design Team
  {
    id: 'mkt-1',
    name: 'Anjali Panchal',
    position: 'Design Lead',
    role: 'marketing',
    department: 'Computer Engineering',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'mkt-2',
    name: 'Rohan Trivedi',
    position: 'Content & Socials Head',
    role: 'marketing',
    department: 'Information Technology',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'event-1',
    name: 'GEN AI ON AWS',
    date: 'May 25, 2026',
    venue: 'Online Event (Meetup Live)',
    type: 'speaker',
    status: 'past',
    poster: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    description: 'An online technical session illustrating the future of Generative AI, featuring industry use cases, building agents, and real-world tools using AWS Bedrock.',
    details: 'This online webinar was highly focused on Generative AI. Over 225+ student attendees gathered online to listen to Mr. Ashwin Raiyani break down the mechanics of Large Language Models (LLMs), foundational models on Amazon Bedrock, and building modern agentic apps.',
    speakers: ['Mr. Ashwin Raiyani (Expert AI Speaker)'],
    itinerary: [
      { time: '04:00 PM - 04:15 PM', activity: 'Introduction to GenAI' },
      { time: '04:15 PM - 05:00 PM', activity: 'AWS Bedrock Service Walkthrough' },
      { time: '05:00 PM - 05:30 PM', activity: 'Q&A & Learning Roadmaps' }
    ],
    registrationUrl: 'https://www.meetup.com/aws-sbg-at-ganpat-university/'
  },
  {
    id: 'event-2',
    name: 'AWS Cloud Ignite',
    date: 'March 24, 2026',
    venue: '209 Seminar Hall, New Building, Ganpat University, Mehsana',
    type: 'workshop',
    status: 'past',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'The flagship tech-ignite event at UVPCE Campus, providing students with cloud essentials, hands-on serverless labs, and career pathways in the AWS ecosystem.',
    details: 'With over 675+ active students attending in person at the 209 Seminar Hall, AWS Cloud Ignite served as a massive platform for cloud education. Attendees configured their first Amazon EC2 instances, explored AWS storage architectures, and learned about cloud computing paths.',
    speakers: ['AWS SBG Core Team', 'GNU Faculty Coordinators'],
    itinerary: [
      { time: '10:00 AM - 10:30 AM', activity: 'Keynote & Launch' },
      { time: '10:30 AM - 12:00 PM', activity: 'EC2 & S3 Console Hands-On' },
      { time: '12:00 PM - 01:00 PM', activity: 'Q&A & Career Guidance' }
    ],
    registrationUrl: 'https://www.meetup.com/aws-sbg-at-ganpat-university/'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Cloud Practitioner Bootcamp Labs',
    category: 'workshop',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    date: 'May 2026'
  },
  {
    id: 'gal-2',
    title: 'Collaborative Group Ideation',
    category: 'workshop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    date: 'May 2026'
  },
  {
    id: 'gal-3',
    title: 'SpaceHack 24-hour Hacking Zone',
    category: 'hackathon',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    date: 'April 2026'
  },
  {
    id: 'gal-4',
    title: 'Final Pitching to AWS Judges',
    category: 'hackathon',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    date: 'April 2026'
  },
  {
    id: 'gal-5',
    title: 'Keynote on Serverless Architecture',
    category: 'speaker',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    date: 'March 2026'
  },
  {
    id: 'gal-6',
    title: 'Q&A Round with Cloud Consultant',
    category: 'speaker',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    date: 'March 2026'
  },
  {
    id: 'gal-7',
    title: 'Community Team Building in Amphitheatre',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    date: 'January 2026'
  },
  {
    id: 'gal-8',
    title: 'Interactive Icebreaker Quiz Winners',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    date: 'January 2026'
  }
];
