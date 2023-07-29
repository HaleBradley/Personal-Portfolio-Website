import React from 'react'
import { useRef, useEffect, useState } from 'react';
import Dev from '../assets/dev.jpg'

function AboutMe() {
  const myRef = useRef();
  const [aboutMeIsVis, setAboutMeIsVis] = useState;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutMeIsVis(entry.isIntersecting)
    })
    observer.observe(myRef.current);
  }, [])

  return (
    <div ref={myRef} className='w-full bg-white aboutmewave flex justify-center items-center'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Dev} alt='Dev' className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-accent font-bold'>About Me</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Who is Hale Bradley?</h1>
                <p className=''>Hale is a Software Engineer who is attending NDSU for a degree in Computer Science. He has a passion for software development, eSports, and physical fitness. Hale has interest in game development for a future career, but for now is focusing on expanding his knowledge of coding in any field.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe