"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Palette className="w-5 h-5" />,
    technologies: [
      "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", 
      "HTML5", "CSS3", "Sass", "Material-UI", "Framer Motion"
    ]
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    technologies: [
      "Node.js", "Express.js", "Python", "Django", "FastAPI", 
      "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"
    ]
  },
  {
    category: "Development",
    icon: <Code2 className="w-5 h-5" />,
    technologies: [
      "Git", "Docker", "AWS", "Vercel", "Linux", 
      "CI/CD", "Jest", "Webpack", "Vite", "ESLint"
    ]
  },
  {
    category: "Other",
    icon: <Zap className="w-5 h-5" />,
    technologies: [
      "Three.js", "GSAP", "Prisma", "Socket.io", "Firebase", 
      "Supabase", "Stripe", "WebRTC", "PWA", "WebGL"
    ]
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;m a passionate full-stack developer with a love for creating beautiful, 
            functional, and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 3 years of experience in web development, I specialize in 
                building scalable applications using modern technologies. My passion 
                lies in solving complex problems and creating intuitive user experiences 
                that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date 
                with the latest industry trends. When I&apos;m not coding, you can find me 
                exploring new technologies, contributing to open-source projects, or 
                sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">3+</h4>
                <p className="text-muted-foreground text-sm">Years of Experience</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">50+</h4>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">20+</h4>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">100%</h4>
                <p className="text-muted-foreground text-sm">Dedication</p>
              </div>
            </div>
          </motion.div>

          {/* Profile Image or additional content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="font-semibold text-lg mb-4">What I Do</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">API Design & Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Database Design & Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">UI/UX Implementation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Performance Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">DevOps & Deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Technologies & Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {skillGroup.icon}
                      </div>
                      <h4 className="font-semibold">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
