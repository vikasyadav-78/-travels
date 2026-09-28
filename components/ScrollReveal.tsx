"use client";

import React, { useEffect, useRef, useState } from "react";

export type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "scale-up"
  | "slide-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  className?: string;
  once?: boolean;
  threshold?: number;
  easing?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
  threshold = 0.12,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getInitialTransform = () => {
    switch (animation) {
      case "fade-up":
      case "slide-up":
        return "translate3d(0, 36px, 0)";
      case "fade-down":
        return "translate3d(0, -36px, 0)";
      case "fade-left":
        return "translate3d(36px, 0, 0)";
      case "fade-right":
        return "translate3d(-36px, 0, 0)";
      case "zoom-in":
      case "scale-up":
        return "scale(0.9) translate3d(0, 20px, 0)";
      case "zoom-out":
        return "scale(1.1)";
      case "flip-up":
        return "perspective(1000px) rotateX(25deg) translate3d(0, 30px, 0)";
      default:
        return "translate3d(0, 36px, 0)";
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : getInitialTransform(),
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: easing,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
