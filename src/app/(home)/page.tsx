"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

const MotionLink = motion.create(Link);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
    },
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center relative overflow-hidden min-h-[calc(100vh-4rem)]">
      <motion.div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,800px)] h-[min(70vh,600px)] bg-blue-500/15 rounded-full blur-[120px] md:blur-[150px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [1, 1.05, 1],
        }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          scale: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 sm:px-8 py-12 md:py-16">
        <motion.div
          className="flex flex-col items-center text-center space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-yoruka tracking-wider"
            variants={itemVariants}
          >
            <span className="text-blue-400">E-Z</span>{" "}
            <span className="text-white">WIKI</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-yoruka"
            variants={itemVariants}
          >
            High-quality and <span className="text-blue-400">easy</span> to use
            documentation.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md"
            variants={itemVariants}
          >
            The <span className="tracking-tight italic pr-0.5">somewhat</span>{" "}
            official documentation for E-Z Services. Learn how to use our APIs,
            customize your bio page, and get the most out of the platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto"
            variants={itemVariants}
          >
            <MotionLink
              href="/docs"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-500/80 backdrop-blur-md border border-blue-400/20 text-white font-medium rounded-lg text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "tween" as const,
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              Browse Documentation
            </MotionLink>
            <MotionLink
              href="https://e-z.gg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium rounded-lg text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "tween" as const,
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              Visit E-Z.gg
            </MotionLink>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full pt-8 md:pt-12"
            variants={itemVariants}
          >
            <MotionLink
              href="/docs/api"
              className="block p-5 sm:p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "tween" as const,
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <div className="text-base sm:text-lg font-semibold text-white mb-2">
                API Reference
              </div>
              <p className="text-xs sm:text-sm text-neutral-400">
                File uploads, URL shortening, and paste sharing.
              </p>
            </MotionLink>
            <MotionLink
              href="/docs/bio"
              className="block p-5 sm:p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "tween" as const,
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <div className="text-base sm:text-lg font-semibold text-white mb-2">
                E-Z Bio
              </div>
              <p className="text-xs sm:text-sm text-neutral-400">
                Customizable bio pages with rich features.
              </p>
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
