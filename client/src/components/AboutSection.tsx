import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AboutSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const interests = [
    "Android Development",
    "Web Development",
    "Flutter Development"
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute right-0 top-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-2 block">About Me</span>
            <h2 className="text-3xl md:text-4xl mb-6">Get to Know Me Better</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div
              variants={itemVariants}
              className="prose prose-lg max-w-none"
            >
              <h3 className="font-medium text-2xl mb-6">My Story</h3>
              <p>
                I am Chinmoya Padhi, a passionate Electronics and Communication Engineering student with a strong focus on creating efficient and innovative solutions. My journey in technology began when I first discovered electronics in high school, and since then, I've been continuously expanding my knowledge and skills.
              </p>
              <p>
                I believe in the power of technology to solve real-world problems and improve people's lives. My approach combines technical expertise with creative thinking to develop practical solutions in the field of electronics and communication.
              </p>
              <p>
                Currently, I'm looking for internship opportunities where I can contribute to meaningful projects, collaborate with talented professionals, and further develop my skills in a real-world environment.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col gap-6"
          >
            {/* Personal Info Section */}
            <motion.div variants={itemVariants}>
              <h3 className="font-medium text-2xl mb-6">Personal Info</h3>
              
              <div className="grid gap-4">
                <div className="flex items-center border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 2V6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 2V6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 10H22" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Full Name</span>
                    <span className="font-medium">Chinmoya Padhi</span>
                  </div>
                </div>
                
                <div className="flex items-center border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Email</span>
                    <span className="font-medium">chinmoyapadhi01@outlook.com</span>
                  </div>
                </div>
                
                <div className="flex items-center border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Location</span>
                    <span className="font-medium">Bhubaneswar, India</span>
                  </div>
                </div>
                
                <div className="flex items-center pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 13H8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 9H9H8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Degree</span>
                    <span className="font-medium">B.Tech in Electronics and Communication Engineering</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* My Interests Section */}
            <motion.div variants={itemVariants} className="mt-4">
              <h3 className="font-medium text-2xl mb-6">My Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-md inline-block"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
