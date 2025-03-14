import { useEffect, useRef, useState } from "react";
import "./StackingCards.css";

const StackingCards = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (scrolling) return;
      setScrolling(true);
      requestAnimationFrame(() => {
        animateStackCards();
        setScrolling(false);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, scrolling]);

  const animateStackCards = () => {
    if (!containerRef.current) return;
    const cards = containerRef.current.children;
    const topOffset = containerRef.current.getBoundingClientRect().top;
    
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardHeight = card.offsetHeight;
      const marginY = 10;
      const scrolling = i * (cardHeight + marginY) - topOffset;
      if (scrolling > 0) {
        card.style.transform = `translateY(${marginY * i}px) scale(${(cardHeight - scrolling * 0.05) / cardHeight})`;
      }
    }
  };

  return (
    <ul ref={containerRef} className="stack-cards">
      {[...Array(5)].map((_, index) => (
        <li key={index} className="stack-card">
          Card {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default StackingCards;
