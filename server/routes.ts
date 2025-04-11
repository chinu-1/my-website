import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the incoming request data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact message
      const savedMessage = await storage.saveContactMessage(validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Message received successfully",
        id: savedMessage.id 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to process your message. Please check your inputs." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
