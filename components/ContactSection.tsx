"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-foreground/60 text-lg">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 border border-accent"
        >
          <div className="space-y-6">
            <motion.a
              href="mailto:dawiteewnetu@gmail.com"
              className="flex items-center gap-4 p-4 glass rounded-lg border border-accent hover:border-accent-hover transition-[border-color] duration-200 group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="p-3 bg-accent border border-accent rounded-lg">
                <EnvelopeIcon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="text-foreground/60 text-sm">Email</p>
                <p className="text-foreground font-semibold">
                  dawiteewnetu@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+12408728221"
              className="flex items-center gap-4 p-4 glass rounded-lg border border-accent hover:border-accent-hover transition-[border-color] duration-200 group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="p-3 bg-accent border border-accent rounded-lg">
                <PhoneIcon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="text-foreground/60 text-sm">Phone</p>
                <p className="text-foreground font-semibold">
                  (240) 872-8221
                </p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/dawiteewnetu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-4 bg-accent border border-accent rounded-lg hover:border-accent-hover transition-[border-color] duration-200 text-foreground font-semibold"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
              Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
