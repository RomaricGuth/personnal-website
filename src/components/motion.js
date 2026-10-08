"use client";

import { motion } from "motion/react";

function deepMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const sourceVal = source[key];
      const targetVal = target[key];
      if (
        typeof sourceVal === "object" &&
        sourceVal !== null &&
        !Array.isArray(sourceVal)
      ) {
        target[key] = deepMerge(
          targetVal && typeof targetVal === "object" ? targetVal : {},
          sourceVal
        );
      } else {
        target[key] = sourceVal;
      }
    }
  }
  return target;
}

const baseAnimation = {
  transition: { duration: 0.5 },
};

const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
  },
  slideIn: {
    initial: { opacity: 0, x: "-100%" },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, type: "spring", bounce: 0.3 },
    viewport: { once: true, margin: "0px 0px 0px 100%" },
  },
  stagger: {
    initial: "hidden",
    whileInView: "visible",
    variants: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
      },
    },
    viewport: { once: true, amount: 0.15 },
  },
  staggerChild: {
    variants: {
      hidden: { opacity: 0, y: 14 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    },
  },
};

export default function Motion({ children, animation, ...props }) {
  const compiledProps = {
    ...baseAnimation,
    ...animations[animation],
    ...props,
  };

  // Use deepMerge for nested properties like transition, if needed
  if (props.transition && compiledProps.transition) {
    compiledProps.transition = deepMerge(
      { ...compiledProps.transition },
      props.transition
    );
  }

  return <motion.div {...compiledProps}>{children}</motion.div>;
}
