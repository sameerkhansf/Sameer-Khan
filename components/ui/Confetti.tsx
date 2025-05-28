"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

const Confetti = () => {
  useEffect(() => {
    // Trigger confetti on page load
    const timer = setTimeout(() => {
      // Main burst from center
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Side bursts for extra effect
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 200);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null; // Canvas confetti renders to document body
};

export default Confetti;
