"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="gradient-text">About</span> Me
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Dynamic and dedicated Software Developer with over{" "}
              <span className="text-purple-400 font-semibold">8 years</span> of
              experience and a passion for creating innovative solutions. Proven
              success in web application development with strong skills in{" "}
              <span className="text-blue-400">Java</span>,{" "}
              <span className="text-blue-400">C#</span>,{" "}
              <span className="text-blue-400">Python</span>, and modern cloud
              technologies. Experienced in building business logic layers,
              implementing scalable solutions, and transitioning into machine
              learning engineering. Seeking a challenging{" "}
              <span className="text-purple-400 font-semibold">
                Senior Software Engineer
              </span>{" "}
              role where cloud, AI, and distributed systems intersect.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
