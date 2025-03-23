import React from 'react'
import Image from 'next/image'
const CTA = () => {
  return (
    <>
                    {/* Call To Action */}
                    <div className='bg-[#FF6200] flex md:flex-row flex-col md:m-12 m-4 my-16 p-4 shadow-[12px_12px_0px_0px_#000] rounded-[44px] justify-center '>
                <div className='-mt-20 overflow-x-visible md:mt-0'>
                    <Image
                        src="/call_to_action.svg"
                        alt="call to action robot img"
                        width={800}
                        height={400}
                        priority
                    />
                </div>
                <div className='flex flex-col items-start justify-center w-full gap-3 px-8 md:gap-6 md:mr-6 md:max-w-1/2 '>
                    <h1 className='text-4xl text-white uppercase md:text-8xl'>Ready to Empower Young Minds?</h1>
                    <p className='text-sm text-justify capitalize md:text-lg text-white/90 '>Join us in shaping the future of education! Whether you're a school, parent, or educator, let's work together to bring cutting-edge learning to the next generation.</p>
                    <button className='px-6 py-3 rounded-full text-[#505050] bg-white inline-flex items-center justify-center'>
                        <h2 className='sub-heading uppercase'>Know More</h2>
                    </button>
                </div>
            </div>

    </>
  )
}

export default CTA
