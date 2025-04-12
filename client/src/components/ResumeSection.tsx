import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const educationData = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Mizoram University",
      period: "2021 - 2025",
      description: "Pursuing a comprehensive program in Electronics and Communication Engineering with focus on signal processing, communication systems, and electronic circuit design. Maintaining a strong academic record throughout the program."
    },
    {
      degree: "Higher Secondary Education",
      institution: "CBSE Board",
      period: "2019 - 2021",
      description: "Completed higher secondary education with specialization in Science and Mathematics. Graduated with distinction and developed a strong foundation in physics, mathematics, and basic electronics."
    }
  ];

  const experienceData = [
    {
      position: "Hackathon Participant",
      company: "Yuvamanthan Hackathon 2025",
      period: "March 2025",
      description: "Developed 'Digishield - Securing Digital India', a cybersecurity and governance project aimed at improving the cybersecurity for government websites. Implemented innovative security protocols and monitoring systems to protect against cyber threats.",
      skills: ["Cybersecurity", "Web Security", "Digital Governance"]
    }
  ];

  const programmingSkills = [
    { name: "JavaScript", proficiency: 90 },
    { name: "Python", proficiency: 85 },
    { name: "Java", proficiency: 75 },
    { name: "C/C++", proficiency: 70 }
  ];

  const frameworkSkills = [
    { name: "React", proficiency: 88 },
    { name: "Node.js", proficiency: 82 },
    { name: "Django", proficiency: 75 },
    { name: "TensorFlow", proficiency: 65 }
  ];

  return (
    <section id="resume" ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 rounded-full mb-3">RESUME</span>
          <h2 className="text-3xl md:text-4xl font-bold font-raleway text-text">
            My <span className="text-accent">Qualifications</span>
          </h2>
        </motion.div>
        
        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold font-raleway text-text mb-8 flex items-center"
          >
            <div className="bg-secondary/10 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            Education
          </motion.h3>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-md border border-border"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h4 className="text-xl font-medium text-text mb-2 md:mb-0">{edu.degree}</h4>
                  <span className="inline-block bg-secondary bg-opacity-10 text-secondary px-3 py-1 rounded-full text-sm">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg font-medium text-secondary mb-3">{edu.institution}</p>
                <p className="text-text/80 font-montserrat">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold font-raleway text-text mb-8 flex items-center"
          >
            <div className="bg-secondary/10 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Programming Languages */}
            <motion.div 
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <h4 className="text-lg font-medium text-text mb-6 font-raleway">Programming Languages</h4>
              
              <div className="space-y-6">
                {programmingSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-text/90 font-montserrat">{skill.name}</span>
                      <span className="text-secondary">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-secondary rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Frameworks & Libraries */}
            <motion.div 
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <h4 className="text-lg font-medium text-text mb-6 font-raleway">Frameworks & Libraries</h4>
              
              <div className="space-y-6">
                {frameworkSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-text/90 font-montserrat">{skill.name}</span>
                      <span className="text-accent">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-accent rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold font-raleway text-text mb-8 flex items-center"
          >
            <div className="bg-secondary/10 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            Experience
          </motion.h3>
          
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-md border border-border"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h4 className="text-xl font-medium text-text mb-2 md:mb-0 font-raleway">{exp.position}</h4>
                  <span className="inline-block bg-secondary bg-opacity-10 text-secondary px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg font-medium text-secondary mb-3">{exp.company}</p>
                <p className="text-text/80 mb-4 font-montserrat">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
