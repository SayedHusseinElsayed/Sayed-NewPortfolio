import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
       {
      title: 'Google Generative AI Leader',
      issuer: 'Google Cloud',
      date: '2025',
      credentialId: 'GAL',
      description: 'Cloud computing fundamentals and AWS services knowledge',
      badgeUrl: 'https://www.credly.com/badges/cb8478ba-aa53-4711-814e-9aea0323c81b',
      skills: ['AI Ethics', 'Artificial Intelligence (AI)', 'Artificial Intelligence Applications', 'Business Acumen', 'Business Analysis', 'Business Awareness', 'Cloud Computing', 'Generative AI', 'Google Cloud Platform (GCP)'. 'Strategic Business Units']
         
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CP-2023',
      description: 'Cloud computing fundamentals and AWS services knowledge',
      badgeUrl: 'https://www.credly.com/badges/7edfb33c-cfd2-44b8-a859-1eb25d78a845',
      skills: ['AWS', 'Cloud Computing', 'Cloud Architecture']
    },
    {
      title: 'Full Stack Developer',
      issuer: 'Udacity',
      date: '2021',
      credentialId: 'KYHCJCQQ',
      description: 'Comprehensive full-stack web development program',
      badgeUrl: 'https://confirm.udacity.com/KYHCJCQQ',
      skills: ['Full Stack Development', 'Web Development', 'APIs']
    },
    {
      title: 'MCSD: Microsoft Certified Solutions Developer',
      issuer: 'Microsoft',
      date: '2019',
      credentialId: 'MCSD-2019',
      description: 'Advanced .NET development and application architecture',
      badgeUrl: '#',
      skills: ['.NET', 'C#', 'Microsoft Technologies']
    },
    {
      title: 'Web Developer Certification',
      issuer: 'Information Technology Institute (ITI)',
      date: '2012',
      credentialId: 'ITI-WD-2012',
      description: 'Web development using C# and related technologies',
      badgeUrl: '#',
      skills: ['C#', 'ASP.NET', 'SQL Server', 'ADO.NET']
    },
    {
      title: 'Web Developer',
      issuer: 'SMART',
      date: '2012',
      credentialId: 'SMART-WD-2012',
      description: 'Web development fundamentals and best practices',
      badgeUrl: '#',
      skills: ['Web Development', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'TOT (Training of Trainers)',
      issuer: 'Orascom',
      date: '2010',
      credentialId: 'TOT-2010',
      description: 'Training and presentation skills certification',
      badgeUrl: '#',
      skills: ['Training', 'Presentation', 'Communication']
    },
    {
      title: 'ICDL (International Computer Driving License)',
      issuer: 'UNESCO',
      date: '2010',
      credentialId: 'ICDL-2010',
      description: 'Computer literacy and Microsoft Office proficiency',
      badgeUrl: '#',
      skills: ['Microsoft Office', 'Computer Literacy', 'Digital Skills']
    },
    {
      title: 'C# Programming',
      issuer: 'Al Manara Academy',
      date: '2009',
      credentialId: 'AMA-CS-2009',
      description: 'C# programming language fundamentals',
      badgeUrl: '#',
      skills: ['C#', 'Programming', 'Object-Oriented Programming']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg">
                  <Award size={24} />
                </div>
                {cert.badgeUrl !== '#' && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(cert.badgeUrl, '_blank')}
                    className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {cert.title}
              </h3>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                <span className="font-medium">{cert.issuer}</span>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Credential ID */}
              <div className="mb-4">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Credential ID: {cert.credentialId}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-lg mr-4">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-600 dark:text-gray-300">El Minya University, El Minya</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">Graduated: 2011</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive computer science education covering programming, algorithms, data structures, 
              software engineering, and database systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
