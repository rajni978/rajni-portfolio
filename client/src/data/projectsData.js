export const PROJECTS_DATA = [
  {
    id: 'collabsphere',
    title: 'CollabSphere',
    tagline: 'Collaborative Project Workspace & AI-Assisted Platform',
    featured: true,
    categories: ['Full Stack', 'Frontend', 'Backend', 'AI'],
    mockupType: 'collabsphere',
    shortDescription:
      'A collaborative project workspace where users can manage projects, collaborate with members, create notes, share workspaces, upload files, and use AI-powered assistance.',
    overview:
      'CollabSphere brings project organization, team collaboration, notes, file uploads, and AI-powered assistance into a unified full-stack workspace.',
    problemStatement:
      'Project teams often juggle disconnected tools for organizing tasks, writing notes, sharing files, and getting technical explanations.',
    solution:
      'Built a centralized MERN workspace with JWT authentication, member collaboration, shared workspaces, Cloudinary file uploads, and Google Gemini API assistance.',
    features: [
      'JWT user authentication & protected workspace routes',
      'Project management and team member collaboration',
      'Structured notes creation and shared workspaces',
      'File uploads powered by Cloudinary',
      'AI-powered assistance integrated via Gemini API',
    ],
    techStack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Cloudinary',
      'Gemini API',
    ],
    myContribution:
      'Architected the end-to-end MERN application, designed MongoDB schemas, implemented JWT authentication middleware, and integrated Cloudinary and Gemini API services.',
    challenges:
      'Structuring clean access control across shared workspaces while keeping file uploads and AI requests responsive.',
    githubUrl: 'https://github.com/rajni978/CollabSphere', 
    liveUrl: 'https://collab-sphere-three-lyart.vercel.app',
  },
  {
    id: 'feedback-manager',
    title: 'Feedback Manager',
    tagline: 'Full-Stack Feedback Collection & Management Application',
    featured: false,
    categories: ['Full Stack', 'Frontend', 'Backend'],
    mockupType: 'feedback',
    shortDescription:
      'A web application for collecting and managing user feedback with backend APIs and database integration.',
    overview:
      'Feedback Manager connects a responsive React interface with Node.js, Express, and MongoDB to streamline how user feedback is collected, stored, and retrieved.',
    problemStatement:
      'Collecting unstructured user feedback without a dedicated API and database makes reviewing and managing submissions difficult.',
    solution:
      'Developed a full-stack application with RESTful Express endpoints and MongoDB persistence for reliable feedback submission and retrieval.',
    features: [
      'Structured feedback submission workflow with validation',
      'Database-backed feedback storage and retrieval',
      'RESTful Express API integration',
      'Responsive interface for desktop and mobile devices',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    myContribution:
      'Built both the React frontend and the Node.js/Express REST API endpoints with MongoDB integration and cloud deployment.',
    challenges:
      'Handling asynchronous API requests and clear loading/error states across client and server.',
    githubUrl: 'https://github.com/rajni978/Feedback-manager',
    liveUrl: 'https://feedback-manager-frontend.vercel.app',
  },
  {
    id: 'ask-gemini',
    title: 'Ask Gemini',
    tagline: 'AI-Powered Prompt & Response Application',
    featured: false,
    categories: ['Full Stack', 'AI', 'Backend'],
    mockupType: 'gemini',
    shortDescription:
      "An AI-powered application that allows users to submit prompts and receive responses through Google's Gemini API.",
    overview:
      "Ask Gemini provides an interactive frontend connected to a Node.js and Express backend that communicates securely with Google's Gemini API.",
    problemStatement:
      'Calling generative AI APIs directly from the browser exposes API keys and lacks server-side request handling.',
    solution:
      "Engineered a Node.js and Express backend service that validates user prompts, communicates with Google's Gemini API, and returns structured responses to React.",
    features: [
      'Interactive prompt submission interface',
      'Server-side Google Gemini API integration',
      'Clean frontend-to-backend API communication',
      'Clear loading and error handling states',
    ],
    techStack: ['React', 'Node.js', 'Express', 'Gemini API'],
    myContribution:
      'Built the Express backend integration with Google Gemini API and the React prompt/response interface.',
    challenges:
      'Managing asynchronous AI response latency cleanly while keeping API credentials secured on the backend.',
    githubUrl: 'https://github.com/rajni978/ask-gemini',
    liveUrl: 'https://rajni978.github.io/ask-gemini/',
  },
  {
    id: 'jalsetu',
    title: 'JALSETU',
    tagline: 'Environmental Hackathon Project — Team BluePulse',
    featured: false,
    categories: ['Full Stack', 'Frontend', 'Backend'],
    mockupType: 'jalsetu',
    shortDescription:
      'An environmental hackathon project focused on water-related challenges and technology-driven solutions, built by Team BluePulse.',
    overview:
      'JALSETU addresses water-related challenges through a technology-driven web platform created collaboratively by Team BluePulse during a hackathon.',
    problemStatement:
      'Communities need accessible digital platforms to surface water-related challenges and explore practical conservation solutions.',
    solution:
      'Collaborated within Team BluePulse to build a full-stack React, Node.js, and Express application deployed across Vercel and Render.',
    features: [
      'Water-focused environmental awareness and solution modules',
      'Full-stack React frontend connected to a hosted Express backend',
      'Responsive interface built for broad accessibility',
      'Collaborative team delivery by Team BluePulse',
    ],
    techStack: ['React', 'Node.js', 'Express', 'REST APIs'],
    myContribution:
      'Contributed to full-stack development and team coordination as part of Team BluePulse.',
    challenges:
      'Integrating frontend and backend services smoothly within hackathon timelines.',
    githubUrl: '', // Configurable: add repository link when public
    liveUrl: 'https://jalsetu-rose.vercel.app',
    githubUrl: 'https://github.com/rajni978/JALSETU',
  },
];