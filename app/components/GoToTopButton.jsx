"use client";

import { useState, useEffect } from "react";

import { ArrowBigUp } from "lucide-react";
export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Check initial scroll position
    handleScroll();

    // Listen to window scroll events
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    // After scrolling, focus the main element so keyboard users know where they are
    setTimeout(
      () => {
        const mainElement = document.getElementById("main");
        mainElement?.focus();
      },
      prefersReducedMotion ? 0 : 500,
      // Wait for smooth scroll to complete if smooth scroll is used
    );
  };

  return (
    <>
      {isVisible && (
        <button
          aria-label="Scroll back to top of page"
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 py-3 px-5 rounded-full transition z-50 bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-950 border-b-2 border-white "
        >
          <ArrowBigUp
            size={24}
            color="white"
          />
        </button>
      )}
    </>
  );
}
