"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Raju1270", icon: "🔗" },
  { name: "LinkedIn", url: "https://linkedin.com/in/rajumaurya", icon: "💼" },
  { name: "Twitter", url: "https://twitter.com/rajumaurya", icon: "🐦" },
  { name: "Dribbble", url: "https://dribbble.com/rajumaurya", icon: "🎨" },
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
          required
        />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
          required
        />
      </div>
      
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors resize-none"
          required
        />
      </div>
      
      <motion.button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-shadow"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}

function FloatingElements() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    elementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: "random(-20, 20)",
          rotation: "random(-15, 15)",
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.5,
        });
      }
    });
  }, []);

  const shapes = ["⭐", "✨", "🌟", "💫", "⚡", "🔮"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <div
          key={index}
          ref={el => elementsRef.current[index] = el}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {shape}
        </div>
      ))}
    </div>
  );
}

export function ContactSection() {
  return (
    <div className="relative h-full flex items-center justify-center p-8">
      <FloatingElements />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Let&apos;s Create
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}Together
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Ready to bring your vision to life? Let&apos;s collaborate on something extraordinary.
              I&apos;m always excited to work on innovative projects that challenge the boundaries of web development.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-white/70">contact@rajumaurya.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-white/70">+91 9876543210</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-white/70">Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>

      {/* Availability Status */}
      <motion.div
        className="absolute bottom-8 left-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-white/80 text-sm">Available for projects</span>
        </div>
      </motion.div>
    </div>
  );
}
