import { useEffect, useRef, useState, RefObject } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  threshold?: number | number[];
  rootMargin?: string;
}

export const useInView = <T extends HTMLElement = HTMLElement>(
  options: IntersectionOptions = {}
): [RefObject<T>, boolean] => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { 
      threshold: 0.15,
      rootMargin: '-50px 0px',
      ...options 
    });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isInView];
};
