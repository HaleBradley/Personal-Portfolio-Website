import React, { useState } from 'react'
import { FaDiscord, FaTwitter,  } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { LuCopyCheck } from 'react-icons/lu'

const Contact = () => {

    /* FUTURE USE FOR COPIED INDICATOR
    const [copyBox, setBox] = useState(false)

    const handleBoxDiscord = async () => {
        setBox(!copyBox)
        navigator.clipboard.writeText('haledev')
    }

    const handleBoxTwitter = () => {
        setBox(!copyBox)
        navigator.clipboard.writeText('@HaleTheDev')
    }

    const handleBoxEmail = () => {
        setBox(!copyBox)
        navigator.clipboard.writeText('hbradley786@gmail.com')
    }*/

  return (
    <div className='w-full py-16 text-white px-4'> 
        <div className='max-x-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='mx-auto my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to contact Hale?</h1>
                <p>For business inquiries, contact Hale through Email</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <div className='grid grid-cols-3'>
                        <div className='justify-center justify-self-center mx-auto px-12'>
                            <FaDiscord size={50} className='mx-auto' />
                            <button onClick={() => {navigator.clipboard.writeText('haledev')}} className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3'>Copy</button>
                        </div>
                        <div className='justify-center justify-self-center mx-auto px-12'>
                            <FaTwitter size={50} className='mx-auto' />
                            <button onClick={() => {navigator.clipboard.writeText('@HaleTheDev')}} className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 ms-1 px-6 py-3'>Copy</button>
                        </div>
                        <div className='justify-center justify-self-center mx-auto px-12'>
                            <MdEmail size={50} className='mx-auto' />
                            <button onClick={() => {navigator.clipboard.writeText('hbradley786@gmail.com')}} className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 px-6 py-3'>Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact