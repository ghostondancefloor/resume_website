"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { translations } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactDialog from './ContactDialog';
import { Menu, X } from 'lucide-react';

const Header = ({ language, handleLanguageChange }: any) => {
  const router = useRouter();
  const t = (translations as any)[language];
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Submitting contact form:", formData);

      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Error from API:", data);
        alert(`Failed to send message: ${data.error}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50 p-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <a href="/">
            <img
              src="ikram_logo.png"
              alt="Logo"
              className="h-8 sm:h-12 w-auto"
            />
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            className="p-2" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-black-600 hover:text-black-800 hover:bg-black-100"
            onClick={() => router.push('/chat')}
          >
            Chat
          </Button>
          <ContactDialog t={t} />
        </div>

        {/* Language Selector - Desktop */}
        <div className="hidden md:block">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t mt-4 py-4"
        >
          <div className="flex flex-col items-center gap-4">
            <Button
              variant="ghost"
              className="w-full text-black-600 hover:text-black-800 hover:bg-black-100"
              onClick={() => {
                router.push('/chat');
                setMobileMenuOpen(false);
              }}
            >
              Chat
            </Button>
            <div onClick={() => setMobileMenuOpen(false)}>
              <ContactDialog t={t} />
            </div>
            <div className="w-full px-4 pt-2">
              <Select value={language} onValueChange={(val) => {
                handleLanguageChange(val);
                setMobileMenuOpen(false);
              }}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;