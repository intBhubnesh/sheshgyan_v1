import React from 'react'
import Sectionheading from './Sectionheading'
import Image from 'next/image'
import Navbar from './Nav'
const Testimonial = ({testimonials=[]}) => {
  return (
    <div>
        <Navbar />

                    <div className='bg-[#FF7C2B] w-full flex flex-col py-12'>
                <Sectionheading tag='User Stories' heading='Tech Leaders' desc='Hear from schools, students, and parents about how SheshGyan is transforming education with hands-on learning and future-ready skills.' isRight={false} bg='orange' className='p-12' />
                <div className='flex flex-col items-center justify-around w-full gap-4 lg:flex-row'>
                    {
                        testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="inline-flex flex-col gap-4 p-2 bg-white border-2 border-[#505050] md:rounded-3xl rounded-2xl transition-all duration-300 hover:translate-x-2 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#303030]" >
                                <div className="relative w-[280px] h-[320px] md:w-[340px] md:h-[400px]">
                                    <Image
                                        src={testimonial.img} // Reference directly from public/
                                        alt="achievement"
                                        width={340}
                                        height={400}
                                        priority
                                        className="object-cover" // Ensures the image fills its container properly
                                    />
                                    <svg
                                        className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="80"
                                        height="80"
                                        viewBox="0 0 121 121"
                                        fill="none"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M60.3535 110.5C87.9678 110.5 110.354 88.1142 110.354 60.5C110.354 32.8858 87.9678 10.5 60.3535 10.5C32.7393 10.5 10.3535 32.8858 10.3535 60.5C10.3535 88.1142 32.7393 110.5 60.3535 110.5Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M75.3469 51.6457L60.8469 43.2957C57.2469 41.1957 52.8969 41.1957 49.2969 43.2957C45.6969 45.3957 43.5469 49.0957 43.5469 53.2957V70.0457C43.5469 74.1957 45.6969 77.9457 49.2969 80.0457C51.0969 81.0957 53.0969 81.5957 55.0469 81.5957C57.0469 81.5957 58.9969 81.0957 60.7969 80.0457L75.2969 71.6957C78.8969 69.5957 81.0469 65.8957 81.0469 61.6957C81.1469 57.4957 78.9969 53.7457 75.3469 51.6457Z"
                                            fill="#FF6200"
                                        />
                                    </svg>
                                </div>

                                <div className="inline-flex items-end justify-between px-2 py-2">
                                    <h1 className="heading md:text-5xl text-3xl text-[#FF6200] ">{testimonial.heading}</h1>
                                    <p className="md:text-lg para text-sm text-[#1F1F1F]/60">{testimonial.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

    </div>
  )
}
export default Testimonial
