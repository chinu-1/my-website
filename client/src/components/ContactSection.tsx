import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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
        staggerChildren: 0.15
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

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 rounded-full mb-3">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold font-raleway text-text">
            Get In <span className="text-accent">Touch</span>
          </h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls} 
          className="flex flex-col md:flex-row gap-12"
        >
          <motion.div variants={itemVariants} className="md:w-1/2">
            <h3 className="text-2xl font-semibold font-raleway text-text mb-6">Contact Information</h3>
            <p className="text-lg text-text/80 mb-8 font-montserrat">
              I'm currently available for internship opportunities in Electronics and Communication Engineering. Feel free to reach out if you think my skills and experience would be a good fit for your team.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-card rounded-lg shadow-md">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-text">Email</h4>
                  <p className="text-text/80">chinmoya@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg shadow-md">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-text">Phone</h4>
                  <p className="text-text/80">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg shadow-md">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-text">Location</h4>
                  <p className="text-text/80">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-text mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: "rgb(var(--secondary))" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#" 
                  className="bg-card text-text p-3 rounded-full shadow-md border border-border transition duration-300"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: "rgb(var(--secondary))" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#" 
                  className="bg-card text-text p-3 rounded-full shadow-md border border-border transition duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: "rgb(var(--secondary))" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#" 
                  className="bg-card text-text p-3 rounded-full shadow-md border border-border transition duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: "rgb(var(--secondary))" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#" 
                  className="bg-card text-text p-3 rounded-full shadow-md border border-border transition duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.285 7.269a.733.733 0 0 0-.24-.619c-.16-.156-.39-.217-.675-.217-.338 0-.601.095-.793.284-.192.189-.289.429-.289.72 0 .271.088.493.263.666.174.172.426.26.756.26.332 0 .589-.079.767-.26.179-.18.269-.406.269-.674a.6.6 0 0 0-.058-.16zm-2.11 3.897h1.57v7.704H2.175v-7.704zm5.931 0h1.509v.658h.036c.21-.381.503-.673.88-.877.374-.204.82-.306 1.337-.306.644 0 1.18.129 1.6.386.421.258.741.643.958 1.155.218.513.326 1.138.326 1.876v4.813h-1.57v-4.492c0-.483-.097-.87-.291-1.163a1.039 1.039 0 0 0-.911-.448c-.539 0-.903.204-1.09.614-.186.41-.28 1.009-.28 1.799v3.69H8.86v-7.704zm9.056-3.897v11.602h-1.57V7.269h1.57z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="bg-card rounded-lg shadow-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold font-raleway text-text mb-6">Send Me a Message</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-text mb-2 font-montserrat">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    {...form.register("name")}
                    placeholder="John Doe"
                    className={`w-full px-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-1 ${
                      form.formState.errors.name 
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                        : "border-border focus:border-secondary focus:ring-secondary"
                    }`}
                  />
                  {form.formState.errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-text mb-2 font-montserrat">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    {...form.register("email")}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-1 ${
                      form.formState.errors.email 
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                        : "border-border focus:border-secondary focus:ring-secondary"
                    }`}
                  />
                  {form.formState.errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-text mb-2 font-montserrat">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    {...form.register("subject")}
                    placeholder="Internship Opportunity"
                    className={`w-full px-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-1 ${
                      form.formState.errors.subject 
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                        : "border-border focus:border-secondary focus:ring-secondary"
                    }`}
                  />
                  {form.formState.errors.subject && (
                    <p className="mt-1 text-red-500 text-sm">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-text mb-2 font-montserrat">Your Message</label>
                  <textarea
                    id="message"
                    {...form.register("message")}
                    rows={4}
                    placeholder="Your message here..."
                    className={`w-full px-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-1 ${
                      form.formState.errors.message 
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                        : "border-border focus:border-secondary focus:ring-secondary"
                    }`}
                  />
                  {form.formState.errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#10b981" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-opacity-90 text-primary font-medium py-3 px-8 rounded-lg transition duration-300 w-full shadow-lg shadow-accent/20 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
