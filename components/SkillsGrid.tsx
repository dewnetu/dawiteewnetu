"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Kubernetes", "Docker", "Helm", "Jenkins", "CI/CD", "GDCH", "EKS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Python", "Flask", "Node.js", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Databases",
    skills: ["SQL", "PostgreSQL", "Cassandra", "Elasticsearch", "NoSQL"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "Machine Learning Model Training"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jira", "Splunk", "Linux (CentOS)"],
  },
];

export default function SkillsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-foreground/60 text-lg">
            Technologies I work with to build scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6 border border-accent hover:border-accent-hover transition-[border-color] duration-200"
            >
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm text-foreground/80 border border-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
