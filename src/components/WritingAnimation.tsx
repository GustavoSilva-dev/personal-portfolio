import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import type { WritingProps } from "../types/WritingProps";

export function WritingAnimation ({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1000,
  className = "",
}: WritingProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));

        if (displayedText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <p className={className}>
      <span>{displayedText}</span>
      
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[1px] h-[1em] bg-red-400 ml-1 align-middle"
      />
    </p>
  );
}