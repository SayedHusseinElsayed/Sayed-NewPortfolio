import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'SaaS Support Engineer',
      company: 'CypherLearning',
      location: 'USA (Remote)',
      period: '02/2023 - Current',
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
      title: 'Developer Support Engineer 2',
      company: 'DocuSign',
      location: 'USA (Remote)',
      period: '05/2021 - 01/2023',
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
      title: 'Senior Application Developer & Support',
      company: 'American International School',
      location: 'Giza, Egypt',
      period: '09/2018 - 05/2021',
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
      title: 'Senior Application Support',
      company: 'System Middle East',
      location: 'Riyadh, Saudi Arabia',
      period: '03/2016 - 05/2018',
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
      title: 'Technical Support & Customer Care Engineer',
      company: 'System Middle East',
      location: 'Cairo, Egypt',
      period: '08/2013 - 05/2016',
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
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Over 11 years of experience in application support, development, and technical solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <div className="flex items-center space-x-1">
                          <Building size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                    {exp.description.length > 4 && (
                      <li className="text-sm text-gray-500 dark:text-gray-400 italic">
                        And {exp.description.length - 4} more responsibilities...
                      </li>
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;