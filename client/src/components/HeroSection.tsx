import { motion } from "framer-motion";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1 bg-muted rounded-full text-secondary font-medium"
          >
            Electronics & Communication Engineer
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-raleway text-text mb-6 leading-tight">
            Hi, I'm <span className="text-accent">Chinmoya Padhi</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-text/80 mb-10 max-w-2xl mx-auto font-montserrat"
          >
            I'm passionate about electronics, communication systems, and creating innovative solutions to real-world problems. 
            Currently seeking internship opportunities to apply and expand my skills.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-opacity-90 text-primary font-medium py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-lg shadow-accent/20"
              onClick={() => scrollToSection("contact")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#0ea5e9" }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary hover:bg-opacity-90 text-primary font-medium py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-lg shadow-secondary/20"
              onClick={() => scrollToSection("resume")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              View Resume
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="text-text/50"
              onClick={() => scrollToSection("about")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
