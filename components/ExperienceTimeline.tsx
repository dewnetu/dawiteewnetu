"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    company: "GDIT",
    role: "Cloud Developer Sr. Principal",
    period: "Jun 2025 — Nov 2025",
    description: [
      "Built and maintained cloud-native Python applications deployed via Kubernetes",
      "Worked in Google Distributed Cloud Hosted (GDCH) for high-security environments",
      "Implemented readiness/liveness probes for high availability",
      "Created runbooks and technical documentation",
      "Improved websocket debugging and reliability",
      "Agile/Scrum contributor",
    ],
  },
  {
    company: "Outlier AI",
    role: "Software Engineer",
    period: "Feb 2024 — Jun 2025",
    description: [
      "Trained AI models for leading research companies",
      "Improved mathematical model accuracy",
      "Worked across Python, Java, JavaScript, SQL",
    ],
  },
  {
    company: "Capital One",
    role: "Senior Software Engineer",
    period: "Feb 2022 — Jan 2024",
    description: [
      "Designed RESTful services using Node.js",
      "Refactored Java, Python, JavaScript systems",
      "AWS (EC2, Lambda, S3, IAM, EKS)",
      "Kubernetes + Docker deployments",
      "Splunk debugging",
      "ATDD testing",
      "Git + Jenkins CI/CD",
    ],
  },
  {
    company: "Amazon",
    role: "Software Dev Engineer III",
    period: "Jul 2021 — Feb 2022",
    description: [
      "Internet-scale distributed systems",
      "Fulfillment platform services",
      "Node.js distributed architectures",
      "Performance and scalability focus",
    ],
  },
  {
    company: "Earlier Roles",
    role: "Software Engineer",
    period: "2016 — 2021",
    description: [
      "Alethix, Deloitte (CBP), Masslight, Sierra Nevada Corp, T3W Business Solutions",
      "Java Spring Boot, React, Elasticsearch, Cassandra, Flask APIs, .NET, SQL Server",
    ],
  },
];

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-foreground/60 text-lg">
            My professional journey in software engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block" />

                <div className="glass rounded-xl p-6 md:p-8 border border-accent hover:border-accent-hover transition-[border-color] duration-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent border border-accent rounded-lg">
                      <BriefcaseIcon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-xl font-semibold text-foreground/90 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-foreground/60 text-sm">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-12">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-foreground/80 flex items-start gap-2"
                      >
                        <span className="text-accent mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
