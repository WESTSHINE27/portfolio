import { useState, useEffect } from "react";
import "./TypingIntro.scss";

export default function TypingIntro({ className = "" , text =""}) {
  const [displayedText, setDisplayedText] = useState("");
  // typing speed count by ms (50ms)
  const typingSpeed = 50; 

  useEffect(() => {
    // current char index that typing on 
    let charIndex = 0;

    // run the interval to show the next char every typingSpeed ms
    const interval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayedText(text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className={`typing-text ${className}`}>
      <span>
        {displayedText}
        <span className="cursor">|</span>
      </span>
    </h1>
  );
}
