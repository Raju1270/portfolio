"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "Remote",
    type: "Full-time",
    description: [
      "Led development of microservices architecture serving 100K+ daily active users",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with cross-functional teams to deliver features on schedule"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
    current: true
  },
  {
    id: 2,
    company: "Digital Innovations Ltd.",
    position: "Full Stack Developer",
    duration: "2021 - 2022",
    location: "New York, NY",
    type: "Full-time",
    description: [
      "Developed and maintained multiple client projects using modern web technologies",
      "Optimized application performance resulting in 40% faster load times",
      "Integrated third-party APIs and payment gateways",
      "Participated in agile development processes and sprint planning"
    ],
    technologies: ["React", "Next.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
    current: false
  },
  {
    id: 3,
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2020 - 2021",
    location: "San Francisco, CA",
    type: "Full-time",
    description: [
      "Built responsive web applications from design mockups",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Wrote comprehensive unit tests achieving 90+ code coverage",
      "Participated in user testing and feedback implementation"
    ],
    technologies: ["React", "JavaScript", "CSS3", "Jest", "Figma", "Git"],
    current: false
  },
  {
    id: 4,
    company: "Freelance",
    position: "Web Developer",
    duration: "2019 - 2020",
    location: "Remote",
    type: "Freelance",
    description: [
      "Delivered 15+ projects for small businesses and startups",
      "Specialized in e-commerce and business websites",
      "Managed client relationships and project timelines",
      "Provided ongoing maintenance and support"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "HTML5", "CSS3"],
    current: false
  }
];

const education = [
  {
    id: 1,
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    duration: "2016 - 2020",
    location: "Delhi, India",
    achievements: [
      "Graduated with First Class Honors (GPA: 3.8/4.0)",
      "President of Computer Science Society",
      "Winner of Annual Hackathon 2019",
      "Published research paper on Machine Learning applications"
    ]
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "Microsoft Azure Fundamentals",
  "Meta React Developer Certification",
  "MongoDB Certified Developer"
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and continuous learning in the tech industry.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Work Experience
          </motion.h3>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-xl font-semibold">{exp.position}</h4>
                          {exp.current && (
                            <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="mb-4">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {education.map((edu) => (
              <Card key={edu.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-medium">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
