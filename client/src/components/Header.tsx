import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("bg-transparent");

  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHeaderClass("bg-white shadow-sm");
      } else {
        setHeaderClass("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="#home"
            className="text-3xl font-medium text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            cp<span className="text-black">.</span>
          </motion.a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                  activeSection === item.id 
                    ? "text-primary after:w-full" 
                    : "text-foreground hover:text-primary after:w-0 hover:after:w-full"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-64 mt-4" : "max-h-0 mt-0"
          }`}
        >
          <div className="flex flex-col items-start space-y-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-base font-medium transition-all duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                  activeSection === item.id 
                    ? "text-primary after:w-full" 
                    : "text-foreground hover:text-primary after:w-0 hover:after:w-full"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
