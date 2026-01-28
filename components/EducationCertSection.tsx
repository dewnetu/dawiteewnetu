"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AcademicCapIcon, TrophyIcon } from "@heroicons/react/24/outline";

export default function EducationCertSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span> & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
                <TrophyIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="pl-2">
                <h4 className="text-lg font-semibold text-purple-400 mb-1">
                  AWS Solution Architect Associate
                </h4>
                <p className="text-gray-400 text-sm">Amazon Web Services</p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="pl-2">
                <h4 className="text-lg font-semibold text-purple-400 mb-1">
                  B.S. Computer Science & Mathematics
                </h4>
                <p className="text-gray-400 text-sm mb-1">
                  George Mason University
                </p>
                <p className="text-gray-500 text-xs">May 2016</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
