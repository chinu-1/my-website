import { motion } from "framer-motion";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-20 md:pt-36 flex items-center relative overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[5%] w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg md:text-xl mb-5 text-primary font-medium">
                Electronics & Communication Engineer
              </h2>
              
              <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
                Hi, I'm Chinmoya Padhi
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                I'm passionate about electronics, communication systems, and creating innovative solutions to real-world problems. 
                Currently seeking internship opportunities to apply and expand my skills.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  href="#contact"
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Contact Me
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  href="https://drive.google.com/your-resume-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.svg 
                width="400" 
                height="400" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full h-auto"
              >
                {/* Decorative elements - simplified illustration */}
                <circle cx="200" cy="200" r="160" fill="#1E293B" />
                <path 
                  d="M320 200C320 265.685 265.685 320 200 320C134.315 320 80 265.685 80 200C80 134.315 134.315 80 200 80C265.685 80 320 134.315 320 200Z" 
                  stroke="#38BDF8" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />
                <motion.path 
                  d="M290 200C290 249.706 249.706 290 200 290C150.294 290 110 249.706 110 200C110 150.294 150.294 110 200 110C249.706 110 290 150.294 290 200Z" 
                  stroke="#2DD4BF" 
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.g
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
                >
                  <rect x="165" y="160" width="70" height="90" rx="4" fill="#1F2937" stroke="#4B5563" strokeWidth="2"/>
                  <rect x="175" y="175" width="50" height="6" rx="1" fill="#34D399"/>
                  <rect x="175" y="190" width="35" height="6" rx="1" fill="#94A3B8"/>
                  <rect x="175" y="205" width="40" height="6" rx="1" fill="#94A3B8"/>
                  <rect x="175" y="220" width="25" height="6" rx="1" fill="#94A3B8"/>
                </motion.g>
                <motion.circle 
                  cx="250" 
                  cy="150" 
                  r="12" 
                  fill="#10B981"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                />
                <motion.circle 
                  cx="140" 
                  cy="230" 
                  r="8" 
                  fill="#38BDF8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="text-primary/60 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 12V28M20 28L13 21M20 28L27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
