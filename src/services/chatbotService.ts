import { knowledgeBase } from '../data/chatbotKnowledge';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface QuestionPattern {
  patterns: RegExp[];
  response: () => string;
  category: string;
}

const patterns: QuestionPattern[] = [
  {
    patterns: [
      /who (is|are) (you|sayed|he|she)/i,
      /tell me about (yourself|sayed|you|him|her)/i,
      /introduce yourself/i,
      /what do you do/i,
      /who are you/i,
      /your profile/i
    ],
    response: () =>
      `${knowledgeBase.personal.name} is a ${knowledgeBase.personal.title} based in ${knowledgeBase.personal.location}. ${knowledgeBase.summary}`,
    category: 'about'
  },
  {
    patterns: [
      /where (do you|does he|she) work/i,
      /current (job|position|role|company)/i,
      /working (at|for)/i,
      /(what|where) is (your|his|her) current/i,
      /now (working|employed|at|for)/i
    ],
    response: () => {
      const current = knowledgeBase.experience[0];
      return `Currently working as ${current.title} at ${current.company} (${current.location}) since ${current.period.split(' - ')[0]}. Responsibilities include: ${current.description.slice(0, 3).join(', ')}.`;
    },
    category: 'experience'
  },
  {
    patterns: [
      /experience/i,
      /work history/i,
      /previous (jobs|companies|roles|positions)/i,
      /worked (at|for|with)/i,
      /career history/i,
      /professional background/i
    ],
    response: () => {
      const exp = knowledgeBase.experience.map((e, i) =>
        `${i + 1}. ${e.title} at ${e.company} (${e.period})`
      ).join('\n');
      return `Here's the work experience:\n${exp}\n\nTotal of 11+ years in application support and development.`;
    },
    category: 'experience'
  },
  {
    patterns: [
      /docusign/i,
      /tell me about docusign/i
    ],
    response: () => {
      const docusign = knowledgeBase.experience.find(e => e.company === 'DocuSign');
      if (docusign) {
        return `At DocuSign (${docusign.period}), worked as ${docusign.title}. Key responsibilities included: ${docusign.description.slice(0, 3).join(', ')}. Technologies: ${docusign.technologies.join(', ')}.`;
      }
      return 'Information about DocuSign experience is available in the experience section.';
    },
    category: 'experience'
  },
  {
    patterns: [
      /cypherlearning/i,
      /cypher/i
    ],
    response: () => {
      const cypher = knowledgeBase.experience.find(e => e.company === 'CypherLearning');
      if (cypher) {
        return `Currently at CypherLearning since ${cypher.period.split(' - ')[0]}, working as ${cypher.title}. Main responsibilities: ${cypher.description.slice(0, 3).join(', ')}.`;
      }
      return 'Information about CypherLearning experience is available.';
    },
    category: 'experience'
  },
  {
    patterns: [
      /powerschool/i,
      /school/i,
      /american international/i,
      /ais/i
    ],
    response: () => {
      const school = knowledgeBase.experience.find(e => e.company.includes('School'));
      if (school) {
        return `At ${school.company} (${school.period}), worked as ${school.title}. Specialized in PowerSchool and PowerTeacher Pro maintenance, database management, and system integrations.`;
      }
      return 'Experience includes working with PowerSchool at American International School.';
    },
    category: 'experience'
  },
  {
    patterns: [
      /(what|which) skills/i,
      /technologies/i,
      /tech stack/i,
      /programming languages/i,
      /what (can you|do you) (do|know)/i,
      /your abilities/i,
      /expertise/i
    ],
    response: () => {
      const skillSummary = Object.entries(knowledgeBase.skills)
        .map(([category, skills]) => `${category}: ${skills.slice(0, 4).join(', ')}${skills.length > 4 ? '...' : ''}`)
        .join('\n');
      return `Here are the key skills:\n\n${skillSummary}`;
    },
    category: 'skills'
  },
  {
    patterns: [
      /\.net|dotnet|c#|csharp|coding|developer skills|programming/i
    ],
    response: () =>
      `Proficient in C# and .NET development with 11+ years of experience. Also skilled in JavaScript, Python, HTML/CSS, and Flutter. Strong background in MVC5, Bootstrap, and jQuery.`,
    category: 'skills'
  },
  {
    patterns: [
      /database|sql|data management/i
    ],
    response: () =>
      `Extensive experience with Microsoft SQL Server, database design, and data integration. Also worked with PowerSchool, POS systems, and various database management tasks.`,
    category: 'skills'
  },
  {
    patterns: [
      /cloud|aws|azure|infrastructure/i
    ],
    response: () =>
      `AWS Cloud Practitioner certified with experience in Azure and Google Console Admin. Skilled in RESTful APIs, webhooks, and system integration. Knowledgeable in cloud architecture and deployment.`,
    category: 'skills'
  },
  {
    patterns: [
      /certifications?|certified|certificates|qualifications|credentials/i
    ],
    response: () => {
      const certs = knowledgeBase.certifications
        .slice(0, 5)
        .map(c => `- ${c.title} (${c.issuer}, ${c.date})`)
        .join('\n');
      return `Key certifications include:\n${certs}\n\nAnd ${knowledgeBase.certifications.length - 5} more certifications.`;
    },
    category: 'certifications'
  },
  {
    patterns: [
      /aws/i
    ],
    response: () =>
      `AWS Cloud Practitioner certified (2023). Knowledgeable in cloud computing fundamentals and AWS services.`,
    category: 'certifications'
  },
  {
    patterns: [
      /education|degree|university|studied|academic/i,
      /where did (you|he|she) study/i,
      /school education/i
    ],
    response: () =>
      `${knowledgeBase.education.degree} from ${knowledgeBase.education.institution}, graduated in ${knowledgeBase.education.year}.`,
    category: 'education'
  },
  {
    patterns: [
      /contact|email|phone|reach|get in touch|communication/i,
      /how (can|do) i (contact|reach|get in touch)/i,
      /contact details/i
    ],
    response: () =>
      `You can reach out via:\n- Email: ${knowledgeBase.personal.email}\n- Phone/WhatsApp: ${knowledgeBase.personal.phone}\n- LinkedIn: ${knowledgeBase.personal.linkedin}`,
    category: 'contact'
  },
  {
    patterns: [
      /email/i
    ],
    response: () =>
      `Email: ${knowledgeBase.personal.email}`,
    category: 'contact'
  },
  {
    patterns: [
      /phone|whatsapp|call|mobile|telephone/i
    ],
    response: () =>
      `Phone/WhatsApp: ${knowledgeBase.personal.phone}`,
    category: 'contact'
  },
  {
    patterns: [
      /location|where (do you|does he|she) live|based|address|city|country|hometown/i,
      /sayed.*location/i,
      /where.*located/i
    ],
    response: () =>
      `Based in ${knowledgeBase.personal.location}, with experience working remotely for US companies.`,
    category: 'contact'
  },
  {
    patterns: [
      /linkedin/i
    ],
    response: () =>
      `LinkedIn: ${knowledgeBase.personal.linkedin}`,
    category: 'contact'
  },
  {
    patterns: [
      /languages?|speak|fluent|linguistic/i
    ],
    response: () => {
      const langs = knowledgeBase.languages
        .map(l => `${l.language} (${l.level})`)
        .join(', ');
      return `Languages: ${langs}`;
    },
    category: 'about'
  },
  {
    patterns: [
      /years? of experience|how long|how many years|total experience/i,
      /years in industry/i
    ],
    response: () =>
      `11+ years of professional experience in application support, development, and technical solutions.`,
    category: 'experience'
  },
  {
    patterns: [
      /remote|work from home|distributed|telecommute/i
    ],
    response: () =>
      `Yes, experienced in remote work. Currently working remotely for CypherLearning (USA) and previously worked remotely for DocuSign (USA). Open to remote opportunities worldwide.`,
    category: 'experience'
  },
  {
    patterns: [
      /available|looking for|job|opportunity|hire|recruitment|vacancy/i,
      /are you (available|looking|hiring)/i
    ],
    response: () =>
      `Open to new opportunities in application support, SaaS platforms, developer relations, and full-stack development. Feel free to reach out at ${knowledgeBase.personal.email}`,
    category: 'contact'
  },
  {
    patterns: [
      /api|integration|webhook|rest|connectivity/i
    ],
    response: () =>
      `Extensive experience with APIs and integrations, including DocuSign APIs, RESTful APIs, webhooks, Salesforce integration, and SSO implementations. Worked with API troubleshooting and development support.`,
    category: 'skills'
  },
  {
    patterns: [
      /support|customer service|saas|troubleshooting|issue resolution/i
    ],
    response: () =>
      `Strong background in technical support and customer service with 11+ years of experience. Specialized in SaaS support, bug investigation, troubleshooting, and working directly with customers to solve complex technical challenges.`,
    category: 'skills'
  },
  {
    patterns: [
      /resume|cv|curriculum vitae|portfolio/i
    ],
    response: () =>
      `You can find my resume and detailed portfolio on the main page. It covers my complete professional history, skills, and accomplishments. Feel free to download the PDF or reach out for more information.`,
    category: 'about'
  },
  {
    patterns: [
      /system middle east/i,
      /middle east experience/i
    ],
    response: () => {
      const sme = knowledgeBase.experience.find(e => e.company === 'System Middle East');
      if (sme) {
        return `Worked at System Middle East from ${sme.period} in multiple roles, including ${knowledgeBase.experience.filter(e => e.company === 'System Middle East').map(e => e.title).join(' and ')}. Handled POS systems, queue management, and technical support across UAE and Saudi Arabia.`;
      }
      return 'Worked at System Middle East with experience in POS systems and technical support.';
    },
    category: 'experience'
  },
  {
    patterns: [
      /pos|restaurant|retail|hotel/i
    ],
    response: () =>
      `Extensive experience with POS systems for restaurants, retail shops, and hotels. Worked with setup, training, and technical support for 100+ businesses across UAE and Saudi Arabia.`,
    category: 'skills'
  }
];

const greetings = [
  /^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i,
  /^(what'?s up|howdy|yo)/i
];

const thanks = [
  /^(thanks|thank you|thx|ty)/i,
  /appreciate it/i
];

const calculateSimilarity = (str1: string, str2: string): number => {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;

  if (longer.length === 0) return 1.0;

  const editDistance = getEditDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
};

const getEditDistance = (s1: string, s2: string): number => {
  const costs: number[] = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
};

const findBestMatchKeyword = (message: string, keywords: string[]): { word: string; score: number } | null => {
  let bestMatch = null;
  let bestScore = 0.4;

  for (const keyword of keywords) {
    if (message.toLowerCase().includes(keyword.toLowerCase())) {
      return { word: keyword, score: 1.0 };
    }

    const similarity = calculateSimilarity(message, keyword);
    if (similarity > bestScore) {
      bestScore = similarity;
      bestMatch = { word: keyword, score: similarity };
    }
  }

  return bestMatch;
};

export const getBotResponse = (userMessage: string): string => {
  const message = userMessage.trim();

  if (!message) {
    return 'Please ask me something about Sayed Hussein!';
  }

  for (const greeting of greetings) {
    if (greeting.test(message)) {
      return `Hello! I'm here to answer questions about ${knowledgeBase.personal.name}. You can ask about experience, skills, certifications, contact information, or anything else related to the professional profile. What would you like to know?`;
    }
  }

  for (const thank of thanks) {
    if (thank.test(message)) {
      return 'You\'re welcome! Feel free to ask if you have any other questions about Sayed Hussein.';
    }
  }

  for (const pattern of patterns) {
    for (const regex of pattern.patterns) {
      if (regex.test(message)) {
        return pattern.response();
      }
    }
  }

  const keywords = [
    'experience', 'skills', 'certifications', 'contact', 'education',
    'location', 'address', 'phone', 'email', 'work', 'job', 'role',
    'languages', 'background', 'career', 'resume', 'portfolio',
    'abilities', 'expertise', 'profile', 'background'
  ];

  const bestMatch = findBestMatchKeyword(message, keywords);

  if (bestMatch && bestMatch.score > 0.5) {
    const matchType = bestMatch.word.toLowerCase();

    if (['location', 'address', 'city', 'country'].some(k => matchType.includes(k))) {
      return `Based in ${knowledgeBase.personal.location}, with experience working remotely for US companies.`;
    }
    if (['experience', 'work', 'career', 'background'].some(k => matchType.includes(k))) {
      const exp = knowledgeBase.experience.map((e, i) =>
        `${i + 1}. ${e.title} at ${e.company} (${e.period})`
      ).join('\n');
      return `Here's the work experience:\n${exp}`;
    }
    if (['skills', 'abilities', 'expertise'].some(k => matchType.includes(k))) {
      const skillSummary = Object.entries(knowledgeBase.skills)
        .map(([category, skills]) => `${category}: ${skills.slice(0, 4).join(', ')}`)
        .join('\n');
      return `Here are the key skills:\n\n${skillSummary}`;
    }
    if (['contact', 'phone', 'email'].some(k => matchType.includes(k))) {
      return `You can reach out via:\n- Email: ${knowledgeBase.personal.email}\n- Phone/WhatsApp: ${knowledgeBase.personal.phone}\n- LinkedIn: ${knowledgeBase.personal.linkedin}`;
    }
    if (['certifications'].some(k => matchType.includes(k))) {
      const certs = knowledgeBase.certifications
        .slice(0, 5)
        .map(c => `- ${c.title} (${c.issuer}, ${c.date})`)
        .join('\n');
      return `Key certifications include:\n${certs}`;
    }
    if (['education'].some(k => matchType.includes(k))) {
      return `${knowledgeBase.education.degree} from ${knowledgeBase.education.institution}, graduated in ${knowledgeBase.education.year}.`;
    }
  }

  return `I can answer questions about ${knowledgeBase.personal.name}'s:\n- Professional experience and work history\n- Skills and technologies\n- Certifications and education\n- Contact information (email, phone, LinkedIn)\n- Location and availability\n- Languages and background\n\nTry asking something like "What is your address?" or "Tell me about your skills"`;
};

export const getSuggestedQuestions = (): string[] => {
  return [
    'What is your current role?',
    'Tell me about your experience',
    'What skills do you have?',
    'What certifications do you have?',
    'How can I contact you?',
    'Where do you work?',
    'Do you work remotely?',
    'Tell me about DocuSign experience'
  ];
};

export const generateMessageId = (): string => {
  return `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
