export const navigationItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Courses', href: '/courses' },
  { label: 'AI Assistant', href: '/ai-assistant' },
  { label: 'Resume Builder', href: '/resume-builder' },
  { label: 'Hackathons', href: '/hackathons' },
  { label: 'Roadmaps', href: '/roadmaps' },
];

export const features = [
  {
    id: 1,
    title: 'Structured Courses',
    description: 'Learn from industry experts with curated courses tailored to your career path',
    icon: 'BookOpen',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    id: 2,
    title: 'AI-Powered Assistant',
    description: 'Get personalized guidance and instant answers from our advanced AI assistant',
    icon: 'Brain',
    color: 'from-violet-400 to-blue-400',
  },
  {
    id: 3,
    title: 'Resume Builder',
    description: 'Create a stunning, ATS-optimized resume that gets you noticed by recruiters',
    icon: 'FileText',
    color: 'from-cyan-400 to-green-400',
  },
  {
    id: 4,
    title: 'Skill Assessment',
    description: 'Evaluate your technical skills with our comprehensive coding challenges',
    icon: 'Zap',
    color: 'from-orange-400 to-red-400',
  },
  {
    id: 5,
    title: 'Career Roadmaps',
    description: 'Personalized learning paths for different engineering specializations',
    icon: 'Map',
    color: 'from-pink-400 to-violet-400',
  },
  {
    id: 6,
    title: 'Mock Interviews',
    description: 'Practice with AI-powered mock interviews from top tech companies',
    icon: 'Users',
    color: 'from-green-400 to-blue-400',
  },
];

export const engineeringBranches = [
  {
    id: 1,
    title: 'Frontend Engineering',
    description: 'Master React, Vue, Angular and modern web technologies',
    courses: 24,
    difficulty: 'Intermediate',
    duration: '12 weeks',
    icon: 'Code2',
  },
  {
    id: 2,
    title: 'Backend Engineering',
    description: 'Build scalable systems with Node.js, Python, and Go',
    courses: 28,
    difficulty: 'Advanced',
    duration: '14 weeks',
    icon: 'Server',
  },
  {
    id: 3,
    title: 'Full Stack Development',
    description: 'Become a full-stack engineer with comprehensive coverage',
    courses: 36,
    difficulty: 'Advanced',
    duration: '18 weeks',
    icon: 'Layers',
  },
  {
    id: 4,
    title: 'DevOps & Cloud',
    description: 'Master AWS, Docker, Kubernetes and cloud infrastructure',
    courses: 20,
    difficulty: 'Advanced',
    duration: '10 weeks',
    icon: 'Cloud',
  },
  {
    id: 5,
    title: 'Data Engineering',
    description: 'Learn to build data pipelines and analytics platforms',
    courses: 22,
    difficulty: 'Advanced',
    duration: '12 weeks',
    icon: 'Database',
  },
  {
    id: 6,
    title: 'Machine Learning',
    description: 'Deep dive into ML models, neural networks, and AI',
    courses: 25,
    difficulty: 'Advanced',
    duration: '14 weeks',
    icon: 'Cpu',
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: '29',
    description: 'Perfect for beginners exploring tech careers',
    features: [
      'Access to 50+ courses',
      'Basic AI Assistant (5 conversations/day)',
      'Resume template access',
      'Community forums',
      'Email support',
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '79',
    description: 'For serious developers committed to growth',
    features: [
      'Access to 200+ courses',
      'Unlimited AI Assistant',
      'Advanced Resume Builder',
      'Mock interview practice',
      'Personalized roadmaps',
      'Priority support',
      'Skill assessments',
      'Certificate programs',
    ],
    highlighted: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Senior Software Engineer at Google',
    content: 'This platform completely transformed my career. The courses are world-class and the AI assistant is incredibly helpful.',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Full Stack Developer at Meta',
    content: 'The resume builder got me interviews at every top company I applied to. Highly recommend!',
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: 'Marcus Williams',
    role: 'DevOps Engineer at Amazon',
    content: 'The career roadmaps are incredibly detailed and practical. This is exactly what I needed to level up.',
    avatar: '👨‍💼',
  },
];

export const dashboardSections = [
  {
    id: 1,
    title: 'Continue Learning',
    description: 'Resume your current courses and progress',
  },
  {
    id: 2,
    title: 'Skill Assessment',
    description: 'Track your technical skills and growth',
  },
  {
    id: 3,
    title: 'Hackathons',
    description: 'Upcoming and past hackathon opportunities',
  },
];

export const sampleCourses = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    instructor: 'Dan Abramov',
    level: 'Advanced',
    duration: '8 weeks',
    progress: 65,
    rating: 4.8,
    reviews: 1240,
    image: 'React',
  },
  {
    id: 2,
    title: 'System Design Fundamentals',
    instructor: 'Alex Xu',
    level: 'Advanced',
    duration: '10 weeks',
    progress: 45,
    rating: 4.9,
    reviews: 890,
    image: 'Architecture',
  },
  {
    id: 3,
    title: 'TypeScript Mastery',
    instructor: 'Matt Pocock',
    level: 'Intermediate',
    duration: '6 weeks',
    progress: 85,
    rating: 4.7,
    reviews: 2100,
    image: 'TypeScript',
  },
  {
    id: 4,
    title: 'AWS Solutions Architect',
    instructor: 'Stephane Maarek',
    level: 'Advanced',
    duration: '12 weeks',
    progress: 30,
    rating: 4.8,
    reviews: 1560,
    image: 'AWS',
  },
];

export const hackathons = [
  {
    id: 1,
    title: 'AI Innovation Hackathon',
    date: 'March 15-17, 2025',
    location: 'San Francisco, CA',
    prize: '$50,000',
    participants: 500,
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Web3 Developer Challenge',
    date: 'April 5-7, 2025',
    location: 'Virtual',
    prize: '$30,000',
    participants: 1200,
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Climate Tech Sprint',
    date: 'May 10-12, 2025',
    location: 'Austin, TX',
    prize: '$40,000',
    participants: 800,
    status: 'upcoming',
  },
];
