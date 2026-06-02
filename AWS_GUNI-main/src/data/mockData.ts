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
  // Project Lead
  {
    id: 'project-lead-1',
    name: 'Yashas Raj R',
    position: 'Project Lead',
    role: 'coordinator',
    department: 'Pneumonia Detection System',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
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
    name: 'Cloud Odyssey: AWS Cloud Practitioner Essentials',
    date: 'June 25, 2026',
    venue: 'Seminar Hall 3, UVPCE Building, GNU',
    type: 'workshop',
    status: 'upcoming',
    poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive, hands-on bootcamp designed to introduce student developers to the fundamental concepts of AWS Cloud Computing and prepare them for the AWS Certified Cloud Practitioner exam.',
    details: 'This boot camp is specifically tailored for beginners in cloud computing. We will cover core AWS services (EC2, S3, RDS, IAM, VPC), billing structures, support options, and cloud security principles. Participants will get hands-on labs using AWS Academy sandboxes.',
    speakers: ['Aryan Shah (AWS Student Lead)', 'Smit Joshi (Cloud Architect)'],
    itinerary: [
      { time: '09:30 AM - 10:00 AM', activity: 'Inauguration & Cloud Fundamentals' },
      { time: '10:00 AM - 12:00 PM', activity: 'Hands-on: EC2 & VPC Configurations' },
      { time: '12:00 PM - 01:00 PM', activity: 'Networking Lunch' },
      { time: '01:00 PM - 03:00 PM', activity: 'AWS Academy Sandbox Labs: S3 & RDS' },
      { time: '03:00 PM - 04:00 PM', activity: 'Certification Prep & Quiz' }
    ],
    registrationUrl: 'https://forms.gle/aws-guni-odyssey'
  },
  {
    id: 'event-2',
    name: 'AI Spark: Serverless GenAI with AWS Bedrock',
    date: 'July 18, 2026',
    venue: 'Centre of Excellence in AI, GNU Campus',
    type: 'workshop',
    status: 'upcoming',
    poster: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    description: 'Explore the universe of Generative AI! Learn how to leverage AWS Bedrock, Amazon Q, and serverless architectures to deploy modern intelligent applications without managing heavy infrastructure.',
    details: 'In this advanced developer workshop, you will learn to interact with foundation models (Claude, Llama, Jurassic) using AWS Bedrock, construct langchain agents, and run serverless inference with AWS Lambda. Bring your laptop and your API thinking cap.',
    speakers: ['Neha Prajapati (AI/ML Lead)', 'Dr. Amit Patel (Faculty Advisor)'],
    itinerary: [
      { time: '10:00 AM - 11:00 AM', activity: 'GenAI & AWS Bedrock Overview' },
      { time: '11:00 AM - 01:00 PM', activity: 'Lab: Building a Chatbot using Claude 3' },
      { time: '01:00 PM - 02:00 PM', activity: 'Lunch & Networking' },
      { time: '02:00 PM - 03:30 PM', activity: 'Lab: Deploying LLM with Lambda & API Gateway' },
      { time: '03:30 PM - 04:30 PM', activity: 'Showcase & Project Pitching' }
    ],
    registrationUrl: 'https://forms.gle/aws-guni-aispark'
  },
  {
    id: 'event-3',
    name: 'DevOps Horizon: CI/CD Pipeline Automation',
    date: 'August 08, 2026',
    venue: 'GNU Computer Lab 5',
    type: 'workshop',
    status: 'upcoming',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'Learn the secrets of modern dev teams. Set up robust, automated, continuous integration and deployment pipelines using GitHub Actions, AWS CodePipeline, and AWS ECS (Elastic Container Service).',
    details: 'This workshop provides a complete walkthrough of DevOps principles on AWS. You will containerize a React + Node application, set up Git-triggered builds, configure AWS CodeBuild and deploy dynamically to containers.',
    speakers: ['Devan Patel (DevOps Lead)', 'Aryan Shah (AWS Student Lead)'],
    itinerary: [
      { time: '09:00 AM - 10:30 AM', activity: 'DevOps Principles & Dockerization' },
      { time: '10:30 AM - 12:30 PM', activity: 'Lab: GitHub Actions & AWS Integration' },
      { time: '12:30 PM - 01:30 PM', activity: 'Lunch' },
      { time: '01:30 PM - 03:30 PM', activity: 'Lab: Deploying containers on AWS ECS & Fargate' },
      { time: '03:30 PM - 04:00 PM', activity: 'Pipeline Debugging & Best Practices' }
    ],
    registrationUrl: 'https://forms.gle/aws-guni-devops'
  },
  {
    id: 'event-4',
    name: 'SpaceHack: Ganpat Cloud Hackathon 2026',
    date: 'April 14, 2026',
    venue: 'Main Auditorium & IT Building Labs, GNU',
    type: 'hackathon',
    status: 'past',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'An intensive 36-hour hackathon where student teams built cloud-native solutions aligning with the UN Sustainable Development Goals, using AWS services.',
    details: 'SpaceHack 2026 brought together 200+ students across Ganpat University to build scalable solutions. Mentors from AWS and industry evaluated projects based on cloud architecture, user experience, and social impact. Over $1,500 in AWS Credits was distributed.',
    speakers: ['Mr. Jatin Kulkarni (Senior Solutions Architect, AWS)', 'Dr. Amit Patel (GNU Coordinator)'],
    itinerary: [
      { time: 'Day 1, 09:00 AM', activity: 'Opening Ceremony & Theme Reveal' },
      { time: 'Day 1, 10:00 AM', activity: 'Hacking Begins & AWS Mentor Sessions' },
      { time: 'Day 2, 02:00 PM', activity: 'Hacking Concludes & Evaluation Round 1' },
      { time: 'Day 2, 04:00 PM', activity: 'Top 8 Presentations & Closing Ceremony' }
    ]
  },
  {
    id: 'event-5',
    name: 'AWS Serverless Deepdive',
    date: 'March 05, 2026',
    venue: 'Virtual Webinar (Microsoft Teams)',
    type: 'speaker',
    status: 'past',
    poster: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    description: 'An online technical talk mapping serverless patterns on AWS, focusing on Lambda, DynamoDB, API Gateway, and EventBridge.',
    details: 'This speaker session targeted intermediate programmers looking to understand event-driven architectures. The session highlighted standard decoupling strategies, DynamoDB single-table design, and cold-start mitigations.',
    speakers: ['Ms. Priyanshi Shah (AWS User Group Leader & Cloud Consultant)']
  },
  {
    id: 'event-6',
    name: 'Nebula Talk: Cybersecurity in AWS Cloud',
    date: 'February 12, 2026',
    venue: 'UVPCE Conference Room, GNU',
    type: 'speaker',
    status: 'past',
    poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'A cybersecurity masterclass illustrating defense-in-depth methodologies on AWS, covering VPC Peering, WAF, GuardDuty, and KMS.',
    details: 'An interactive offline session featuring live hacking demonstrations and cloud defense tactics. Students configured AWS GuardDuty, set up AWS WAF rules to prevent SQL injection, and learned key security principles.',
    speakers: ['Smit Joshi (Security Lead)', 'Prof. Rajesh Mehta (Faculty Mentor)']
  },
  {
    id: 'event-7',
    name: 'AWS Student Builder Community Kickoff',
    date: 'January 10, 2026',
    venue: 'GNU Amphitheatre',
    type: 'community',
    status: 'past',
    poster: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    description: 'Welcoming the new cohort of tech innovators to Ganpat University\'s AWS Student Builder Group. Program roadmap, cloud paths, and fun icebreakers.',
    details: 'Our annual kickoff where we launched the community registration for 2026. The core team introduced the AWS learning paths, upcoming certification sponsorships, study groups, and organized code challenges and cloud trivia with exciting goodies.'
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
