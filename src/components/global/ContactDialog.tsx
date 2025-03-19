import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactDialog = ({ t }: { t: any }) => {
  const contactLabel = t?.contact || "Contact";
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Force re-render when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      // This forces a re-render which can help with dialog initialization
      setDialogOpen(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setDialogOpen(false);
      } else {
        const data = await res.json();
        alert(`Failed to send message: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost"
          className="w-full md:w-auto text-black-600 hover:text-black-800 hover:bg-black-100"
          onClick={() => setDialogOpen(true)}
        >
          {contactLabel}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md bg-white z-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get in Touch
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded min-h-32"
            />
          </div>

          <div className="flex justify-between gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setDialogOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-black text-white hover:bg-gray-800"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;