import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Users, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'C#', level: 90 },
        { name: '.NET', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Flutter', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Databases & Systems',
      skills: [
        { name: 'Microsoft SQL Server', level: 95 },
        { name: 'PowerSchool', level: 90 },
        { name: 'Q System for Hospitals', level: 85 },
        { name: 'POS Systems', level: 90 },
        { name: 'Database Design', level: 85 },
        { name: 'Data Integration', level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 80 },
        { name: 'AWS Cloud Practitioner', level: 75 },
        { name: 'Google Console Admin', level: 70 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Webhooks', level: 80 },
        { name: 'System Integration', level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: 'Frameworks & Tools',
      skills: [
        { name: 'MVC5', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'jQuery', level: 85 },
        { name: 'DocuSign APIs', level: 90 },
        { name: 'PowerForms', level: 85 },
        { name: 'Salesforce Integration', level: 75 }
      ]
    },
    {
      icon: Users,
      title: 'Support & Communication',
      skills: [
        { name: 'Technical Support', level: 95 },
        { name: 'Customer Service', level: 90 },
        { name: 'Training & Documentation', level: 90 },
        { name: 'Bug Investigation', level: 95 },
        { name: 'Troubleshooting', level: 95 },
        { name: 'Team Collaboration', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Industry Experience',
      skills: [
        { name: 'Banking Systems', level: 80 },
        { name: 'Education (PowerSchool)', level: 90 },
        { name: 'Healthcare (Q System)', level: 85 },
        { name: 'Restaurant/Retail POS', level: 90 },
        { name: 'SaaS Platforms', level: 85 },
        { name: 'Trading Applications', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in application support and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500 text-white rounded-lg mr-4">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="text-blue-500 mr-2" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Always Learning
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently exploring: Advanced Cloud Technologies, Machine Learning, and Modern Development Frameworks
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'Advanced Azure', 'Microservices', 'DevOps', 'AI Integration', 'Modern APIs'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;