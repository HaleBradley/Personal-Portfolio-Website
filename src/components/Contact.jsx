import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-x-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to contact Hale about freelancer or just to Chat?</h1>
                <p>Contact Hale with Discord or Twitter</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <p>TODO: MAKE THESE COPY ABLE ON CLICK</p>
                    <p className='text-[#00df9a] font-bold'>(DISCORD LOGO) haledev</p>
                    <p className='text-[#00df9a] font-bold'>(TWITTER LOGO) @HaleTheDev</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact