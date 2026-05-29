// Portfolio data extracted from resume and additional info
export const personalInfo = {
  name: 'Balkrishna Katakwar',
  title: 'Frontend Developer & ML Enthusiast',
  subtitle: 'B.Tech Computer Science Student',
  email: 'balkrishnakatkwar123@gmail.com',
  phone: '+91 7389172739',
  location: 'Korba, Chhattisgarh, India',
  bio: 'Motivated Frontend Developer and B.Tech Computer Science student with hands-on experience in React, JavaScript, Python, data analysis, and machine learning projects. I enjoy building responsive user interfaces, practical web applications, and data-driven tools that turn ideas into useful software.',

  links: {
    github: 'https://github.com/Katakwar123',
    linkedin: 'https://www.linkedin.com/in/balkrishna-katakwar-395628227/',
  },

  resumePath: '/resume/Balkrishna_Katakwar_Resume_v2.pdf',
};

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science Engineering',
  university: 'Amity University, Chhattisgarh',
  currentYear: '7th Semester (3rd Year)',
  expectedGraduation: '2025',
  status: 'Currently Pursuing',
};

export const skills = [
  {
    category: 'Programming Languages',
    items: ['C', 'C++', 'Python', 'JavaScript'],
    icon: 'Code2',
  },
  {
    category: 'Web Technologies',
    items: ['HTML', 'CSS', 'ReactJS', 'Bootstrap'],
    icon: 'Globe',
  },
  {
    category: 'Database & Analytics',
    items: ['MySQL', 'SQL', 'Power BI', 'MS Excel'],
    icon: 'Database',
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'UiPath'],
    icon: 'Wrench',
  },
];

export const experience = [
  {
    id: 1,
    title: 'Web Developer Intern',
    company: 'VIGAS INCELERATE FUTUREC VENTURES PRIVATE LIMITED',
    type: 'Internship',
    duration: '6 weeks',
    startDate: 'June 23, 2025',
    endDate: 'Present',
    location: 'Remote',
    description:
      'Currently working on web development projects, building responsive interfaces and collaborating with the team.',
    responsibilities: [
      'Developing responsive web applications',
      'Collaborating with design and development teams',
      'Learning modern web development practices',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 2,
    title: 'Intern',
    company: 'AON DigiCon LLP',
    type: 'Internship',
    duration: '2 months',
    startDate: 'June 2024',
    endDate: 'July 2024',
    location: 'Remote',
    description:
      'Built responsive web pages and gained hands-on experience in frontend development under the mentorship of Mr. Praveen Verma.',
    responsibilities: [
      'Built responsive web pages using HTML, CSS, JavaScript, and Bootstrap',
      'Integrated APIs for dynamic content',
      'Collaborated on landing page development',
      'Gained practical experience in frontend development workflow',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'API Integration'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Diabetes Prediction System',
    description:
      'A Streamlit-based machine learning app that predicts diabetes risk using patient health data, model comparison, and NLP-assisted text analysis.',
    longDescription:
      'Built an end-to-end diabetes prediction system with data preprocessing, multiple ML models, automatic model selection, visual risk reports, and an interactive Streamlit interface.',
    technologies: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'Pandas',
      'NLP',
      'Plotly',
    ],
    features: [
      'Random Forest model with about 79% accuracy',
      'Data preprocessing and feature engineering pipeline',
      'Interactive Streamlit prediction interface',
      'Risk visualizations and health recommendations',
    ],
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    github: 'https://github.com/Katakwar123/diabetes-prediction',
    demo: null,
    category: 'Machine Learning',
  },
  {
    id: 2,
    title: 'HR Performance & Recruitment System',
    description:
      'A web project for HR performance tracking and recruitment workflows, built with HTML, CSS, and Python.',
    longDescription:
      'Designed a practical HR system concept focused on organizing recruitment and employee performance information through a simple web interface.',
    technologies: ['HTML', 'CSS', 'Python'],
    features: [
      'HR-focused workflow structure',
      'Recruitment and performance management pages',
      'Responsive web interface',
      'Python-backed project structure',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    github: 'https://github.com/Katakwar123/HR-Performance-and-Recruitment-System',
    demo: null,
    category: 'Web App',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description:
      'A lightweight JavaScript blog platform project focused on basic publishing and frontend interaction.',
    longDescription:
      'Created a simple blog platform project to practice JavaScript-driven UI behavior and content presentation patterns.',
    technologies: ['JavaScript'],
    features: [
      'Blog-style content structure',
      'JavaScript-based interactivity',
      'Clean frontend project setup',
      'GitHub-hosted source code',
    ],
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    github: 'https://github.com/Katakwar123/blog-platform',
    demo: null,
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Text-to-Speech Translator',
    description:
      'A web application that translates text between languages and converts it to speech using Web Speech API.',
    longDescription:
      'Developed a comprehensive web app that combines language translation with text-to-speech functionality. Users can input text in one language, translate it to another, and hear the translation spoken aloud.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'MyMemory API',
      'Web Speech API',
    ],
    features: [
      'Multi-language translation support',
      'Text-to-speech conversion',
      'Clean and responsive UI',
      'Real-time translation',
    ],
    image: '/images/projects/text-to-speech.jpg',
    github: 'https://github.com/Katakwar123',
    demo: null,
    category: 'Web App',
  },
  {
    id: 5,
    title: 'OLA Data Analyst Dashboard',
    description:
      'Comprehensive data analysis project using SQL, Power BI, and Excel to analyze booking data and create interactive dashboards.',
    longDescription:
      'Analyzed OLA ride-booking data to extract meaningful insights. Created a detailed 70-page report with KPIs and built interactive Power BI dashboards for data visualization.',
    technologies: ['SQL', 'Power BI', 'MS Excel', 'Data Analysis'],
    features: [
      'SQL queries for data extraction',
      'Interactive Power BI dashboards',
      '70-page analytical report',
      'KPI tracking and visualization',
      'Booking trend analysis',
    ],
    image: '/images/projects/ola-dashboard.jpg',
    github: 'https://github.com/Katakwar123',
    demo: null,
    category: 'Data Analysis',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Machine Learning',
    issuer: 'Amity University',
    date: '2024',
    credentialUrl: null,
  },
  {
    id: 2,
    name: 'Power BI',
    issuer: 'Microsoft Learn',
    date: '2024',
    credentialUrl: null,
  },
  {
    id: 3,
    name: 'RPA (Robotic Process Automation)',
    issuer: 'UiPath Academy',
    date: '2024',
    credentialUrl: null,
  },
  {
    id: 4,
    name: 'Full Stack Development',
    issuer: 'Self-paced Learning',
    date: '2024',
    credentialUrl: null,
  },
];

export const languages = [
  {
    name: 'English',
    proficiency: 'Professional Proficiency',
  },
  {
    name: 'Hindi',
    proficiency: 'Native Speaker',
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Katakwar123',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/balkrishna-katakwar-395628227/',
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:balkrishnakatkwar123@gmail.com',
    icon: 'Mail',
  },
];

export const heroConfig = {
  backgroundImage:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
  greeting: "Hello, I'm",
  ctaButtons: [
    {
      text: 'View Projects',
      link: '#projects',
      primary: true,
    },
    {
      text: 'Download Resume',
      link: '/resume/Balkrishna_Katakwar_Resume_v2.pdf',
      primary: false,
      download: true,
    },
  ],
};
