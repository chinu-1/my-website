import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const interests = [
    "Web Development",
    "Machine Learning",
    "UI/UX Design",
    "Mobile Apps",
    "Cloud Computing"
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-12 text-center"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row gap-12"
        >
          <motion.div variants={itemVariants} className="md:w-1/2">
            <h3 className="text-2xl font-semibold font-poppins text-primary mb-6">My Story</h3>
            <p className="text-lg text-text mb-6 font-opensans">
              I am Chinmoya Padhi, a passionate software developer and engineering student with a strong focus on creating efficient and user-friendly applications. My journey in technology began when I first discovered programming in high school, and since then, I've been continuously expanding my knowledge and skills.
            </p>
            <p className="text-lg text-text mb-6 font-opensans">
              I believe in the power of technology to solve real-world problems and improve people's lives. My approach combines technical expertise with creative thinking to develop innovative solutions.
            </p>
            <p className="text-lg text-text font-opensans">
              Currently, I'm looking for internship opportunities where I can contribute to meaningful projects, collaborate with talented professionals, and further develop my skills in a real-world environment.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2">
            <h3 className="text-2xl font-semibold font-poppins text-primary mb-6">Personal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">Chinmoya Padhi</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">chinmoya@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Degree</p>
                  <p className="font-medium">B.Tech in Computer Science</p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold font-poppins text-primary mb-6">My Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="bg-secondary bg-opacity-10 text-secondary px-4 py-2 rounded-full"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
