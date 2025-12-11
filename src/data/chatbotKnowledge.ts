export interface KnowledgeBase {
  personal: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    whatsapp: string;
    linkedin: string;
  };
  summary: string;
  languages: {
    language: string;
    level: string;
  }[];
  experience: {
    company: string;
    title: string;
    period: string;
    location: string;
    description: string[];
    technologies: string[];
  }[];
  skills: {
    [category: string]: string[];
  };
  certifications: {
    title: string;
    issuer: string;
    date: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  };
}

export const knowledgeBase: KnowledgeBase = {
  personal: {
    name: 'Sayed Hussein',
    title: 'Senior Application Support Engineer & Developer',
    location: 'El Minya, Egypt',
    email: 'sayed.hussein.elsayed@gmail.com',
    phone: '+20 100 891 5894',
    whatsapp: '+20 100 891 5894',
    linkedin: 'https://www.linkedin.com/in/sayed-hussein-ba2685b2/'
  },
  summary: 'Experienced Senior Application Support Engineer and developer skilled in identifying and resolving computer software issues. Uses collaboration and communication skills to work with departments to streamline applications and improve operational efficiency. Qualified Application Developer with expertise in developing and revising source codes, thriving independently or in a team setting. Solid track record of increasing client satisfaction through effective problem-solving and technical support.',
  languages: [
    { language: 'Arabic', level: 'Native' },
    { language: 'English', level: 'Advanced (C1)' }
  ],
  experience: [
    {
      company: 'CypherLearning',
      title: 'SaaS Support Engineer',
      period: '02/2023 - Current',
      location: 'USA (Remote)',
      description: [
        'Respond to live customer questions related to using our products',
        'Investigate various customer scenarios (bugs, incorrect configurations) to identify root causes',
        'Escalate tickets to the Engineering team and provide details needed to reproduce scenarios',
        'Identify, record, and thoroughly document issues and bugs',
        'Test and verify bug fixes before informing clients of resolution',
        'Collaborate with internal team members, onshore and offshore, to solve client problems'
      ],
      technologies: ['Technical Support', 'Bug Investigation', 'Customer Service', 'Documentation']
    },
    {
      company: 'DocuSign',
      title: 'Developer Support Engineer 2',
      period: '05/2021 - 01/2023',
      location: 'USA (Remote)',
      description: [
        'Performed troubleshooting and development assistance to the DocuSign Developer Community',
        'Assisted customers with how-to questions, technical articles, and tutorials on DocuSign APIs and SDKs',
        'Acted as Subject Matter Expert for Advanced DocuSign Features including APIs, SDKs, webhooks',
        'Performed troubleshooting sessions with developers on API integrations and DocuSign connectors',
        'Diagnosed code samples from customers for advanced testing purposes',
        'Participated in DocuSign and StackOverflow.com forums to support developer community'
      ],
      technologies: ['APIs', 'SDKs', 'Webhooks', 'PowerForms', 'Salesforce Integration', 'Developer Support']
    },
    {
      company: 'American International School',
      title: 'Senior Application Developer & Support',
      period: '09/2018 - 05/2021',
      location: 'Giza, Egypt',
      description: [
        'Maintained PowerSchool and PowerTeacher Pro environments, including user accounts and security groups',
        'Planned and executed basic and advanced database functions related to systems operations',
        'Created and maintained advanced reporting capabilities within PowerSchool',
        'Led research, analysis, requirements, design, testing, and implementation of new PowerSchool features',
        'Designed, developed, and tested user portals, data integrations, and SSOs between systems',
        'Supported data analysis, student assessments and grading, and accreditation reporting needs'
      ],
      technologies: ['PowerSchool', 'PowerTeacher Pro', 'Database Management', 'SSO', 'Data Integration', 'Reporting']
    },
    {
      company: 'System Middle East',
      title: 'Senior Application Support',
      period: '03/2016 - 05/2018',
      location: 'Riyadh, Saudi Arabia',
      description: [
        'Defined application problems by conferring with clients and evaluating procedures and processes',
        'Implemented and provided training on queue management systems for customers in Riyadh',
        'Worked with more than 6 POS systems and completed setup and training for 100+ restaurants in UAE and KSA',
        'Developed solutions by preparing and evaluating alternative workflow solutions',
        'Performed database management and modifications using SQL Server',
        'Provided online support for customers outside the country'
      ],
      technologies: ['POS Systems', 'Queue Management', 'SQL Server', 'Training', 'Customer Support', 'System Implementation']
    },
    {
      company: 'System Middle East',
      title: 'Technical Support & Customer Care Engineer',
      period: '08/2013 - 05/2016',
      location: 'Cairo, Egypt',
      description: [
        'Supported various trading applications and platforms used in the fixed-income department',
        'Solved problems around profit and loss breaks, data feeds, risk figures, and user rights',
        'Liaised between front office, product control, risk, and strategy teams',
        'Handled migration projects, parallel testing, and regression testing',
        'Resolved urgent and immediate requests in a vibrant and demanding environment',
        'Tested applications for restaurants, retail shops, and hotels'
      ],
      technologies: ['Trading Applications', 'Data Feeds', 'Risk Management', 'Testing', 'Migration Projects', 'Customer Support']
    }
  ],
  skills: {
    'Programming Languages': ['C#', '.NET', 'JavaScript', 'Python', 'HTML/CSS', 'Flutter'],
    'Databases & Systems': ['Microsoft SQL Server', 'PowerSchool', 'Q System for Hospitals', 'POS Systems', 'Database Design', 'Data Integration'],
    'Cloud & DevOps': ['Azure', 'AWS Cloud Practitioner', 'Google Console Admin', 'RESTful APIs', 'Webhooks', 'System Integration'],
    'Frameworks & Tools': ['MVC5', 'Bootstrap', 'jQuery', 'DocuSign APIs', 'PowerForms', 'Salesforce Integration'],
    'Support & Communication': ['Technical Support', 'Customer Service', 'Training & Documentation', 'Bug Investigation', 'Troubleshooting', 'Team Collaboration'],
    'Industry Experience': ['Banking Systems', 'Education (PowerSchool)', 'Healthcare (Q System)', 'Restaurant/Retail POS', 'SaaS Platforms', 'Trading Applications']
  },
  certifications: [
    { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2023' },
    { title: 'Full Stack Developer', issuer: 'Udacity', date: '2021' },
    { title: 'MCSD: Microsoft Certified Solutions Developer', issuer: 'Microsoft', date: '2019' },
    { title: 'Web Developer Certification', issuer: 'Information Technology Institute (ITI)', date: '2012' },
    { title: 'Web Developer', issuer: 'SMART', date: '2012' },
    { title: 'TOT (Training of Trainers)', issuer: 'Orascom', date: '2010' },
    { title: 'ICDL (International Computer Driving License)', issuer: 'UNESCO', date: '2010' },
    { title: 'C# Programming', issuer: 'Al Manara Academy', date: '2009' }
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'El Minya University, El Minya',
    year: '2011'
  }
};
