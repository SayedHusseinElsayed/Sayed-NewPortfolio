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
      /who (is|are) (you|sayed|he)/i,
      /tell me about (yourself|sayed|you)/i,
      /introduce yourself/i,
      /what do you do/i
    ],
    response: () =>
      `${knowledgeBase.personal.name} is a ${knowledgeBase.personal.title} based in ${knowledgeBase.personal.location}. ${knowledgeBase.summary}`,
    category: 'about'
  },
  {
    patterns: [
      /where (do you|does he) work/i,
      /current (job|position|role|company)/i,
      /working (at|for)/i,
      /(what|where) is (your|his) current/i
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
      /previous (jobs|companies|roles)/i,
      /worked (at|for)/i
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
      /school/i
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
      /what (can you|do you) (do|know)/i
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
      /\.net|dotnet|c#|csharp/i,
      /programming/i
    ],
    response: () =>
      `Proficient in C# and .NET development with 11+ years of experience. Also skilled in JavaScript, Python, HTML/CSS, and Flutter. Strong background in MVC5, Bootstrap, and jQuery.`,
    category: 'skills'
  },
  {
    patterns: [
      /database|sql/i,
      /data/i
    ],
    response: () =>
      `Extensive experience with Microsoft SQL Server, database design, and data integration. Also worked with PowerSchool, POS systems, and various database management tasks.`,
    category: 'skills'
  },
  {
    patterns: [
      /cloud|aws|azure/i
    ],
    response: () =>
      `AWS Cloud Practitioner certified with experience in Azure and Google Console Admin. Skilled in RESTful APIs, webhooks, and system integration. Knowledgeable in cloud architecture and deployment.`,
    category: 'skills'
  },
  {
    patterns: [
      /certifications?/i,
      /certified/i,
      /certificates/i
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
      /education|degree|university|studied/i,
      /where did (you|he) study/i
    ],
    response: () =>
      `${knowledgeBase.education.degree} from ${knowledgeBase.education.institution}, graduated in ${knowledgeBase.education.year}.`,
    category: 'education'
  },
  {
    patterns: [
      /contact|email|phone|reach|get in touch/i,
      /how (can|do) i contact/i
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
      /phone|whatsapp|call/i
    ],
    response: () =>
      `Phone/WhatsApp: ${knowledgeBase.personal.phone}`,
    category: 'contact'
  },
  {
    patterns: [
      /location|where (do you|does he) live|based/i
    ],
    response: () =>
      `Based in ${knowledgeBase.personal.location}, with experience working remotely for US companies.`,
    category: 'contact'
  },
  {
    patterns: [
      /languages?|speak/i
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
      /years? of experience/i,
      /how long/i,
      /how many years/i
    ],
    response: () =>
      `11+ years of professional experience in application support, development, and technical solutions.`,
    category: 'experience'
  },
  {
    patterns: [
      /remote|work from home/i
    ],
    response: () =>
      `Yes, experienced in remote work. Currently working remotely for CypherLearning (USA) and previously worked remotely for DocuSign (USA). Open to remote opportunities worldwide.`,
    category: 'experience'
  },
  {
    patterns: [
      /available|looking for|job|opportunity|hire/i
    ],
    response: () =>
      `Open to new opportunities in application support, SaaS platforms, developer relations, and full-stack development. Feel free to reach out at ${knowledgeBase.personal.email}`,
    category: 'contact'
  },
  {
    patterns: [
      /api|integration/i
    ],
    response: () =>
      `Extensive experience with APIs and integrations, including DocuSign APIs, RESTful APIs, webhooks, Salesforce integration, and SSO implementations. Worked with API troubleshooting and development support.`,
    category: 'skills'
  },
  {
    patterns: [
      /support|customer service/i
    ],
    response: () =>
      `Strong background in technical support and customer service with 11+ years of experience. Specialized in SaaS support, bug investigation, troubleshooting, and working directly with customers to solve complex technical challenges.`,
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

  return `I can answer questions about ${knowledgeBase.personal.name}'s:\n- Professional experience and work history\n- Skills and technologies\n- Certifications and education\n- Contact information\n- Languages and availability\n\nCould you please rephrase your question or ask about one of these topics?`;
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
