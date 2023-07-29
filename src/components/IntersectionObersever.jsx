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
        const options = {}
        const myObserver = new IntersectionObserver(callback, options);
      
        animationSection.forEach((element) => {
            if (element) {
              myObserver.observe(element);
            }
          });
        
    
        return () => {
            animationSection.forEach((element) => {
                if (element) {
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