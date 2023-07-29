import React, { useEffect } from 'react'

const IntersectionObersever = ({ children }) => {

    useEffect(() => {
        const selectorsForOberse = [".fade-in-left", ".fade-in-btm", ".fade-in-right", ".fade-in"]
        const animationSection = selectorsForOberse.map((selector) => {
            return document.querySelector(selector);
        })
    
        const callback = (entries, observer) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible")
            } else {
                entry.target.classList.remove("visible")
            }
          });
        }
        const defaultOptions = {
          threshold: 0.2
        }
        const btmOptions = {
          threshold: 0.5
        }
        const myObserver = new IntersectionObserver(callback, defaultOptions);
        const btmObserver = new IntersectionObserver(callback, btmOptions)
      
        animationSection.forEach((element) => {
            if (element) {
              if (element.classList.contains("fade-in-btm")) {
                btmObserver.observe(element);
              } else {
                myObserver.observe(element);
              }
            }
          });
        
    
        return () => {
            animationSection.forEach((element) => {
              if (element.classList.contains("fade-in-btm")) {
                btmObserver.unobserve(element);
              } else {
                myObserver.unobserve(element);
              }
            });
        };
      }, []);

  return (
    <>{children}</>
  )
}

export default IntersectionObersever;