"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import cources from './data/cources'
import Testimonial from '../components/_App/Testimonial'
import testimonials from './data/testimonials'
import Form from '../components/_App/Form'
import Sectionheading from '../components/_App/Sectionheading'
import Footer from '@/components/_App/Foot'
const SummerCamp = () => {



    const achivements = [{
        img: '/achivement_1.svg',
        heading: 'National Coding Championship',
        desc: '5 Students Secured Top Ranks'
    }, {
        img: '/achivement_2.svg',
        heading: 'National Coding Championship',
        desc: '5 Students Secured Top Ranks'
    }, {
        img: '/achivement_3.svg',
        heading: 'National Coding Championship',
        desc: '5 Students Secured Top Ranks'
    },
    ]


    const [activeIndex, setActiveIndex] = useState(0)
    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % cources.length);
      };

      const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + cources.length) % cources.length);
      };
    return (
        <div className='w-full mt-20'>
            {/* hero */}
            <div className='flex flex-col items-center justify-center w-full gap-6 md:p-5 '>
                <div className='inline-flex md:flex-row flex-col md:p-8 p-4  item-center   justify-between border-2 border-[#1F1F1F]/60 rounded-3xl w-[90%]   md:gap-6 gap-4'
                    style={{ boxShadow: "12px 12px 0px 0px #1F1F1F"}}
                >
                    <div className='inline-flex items-center justify-center w-full md:w-2/3 h-fit'>
                    <img
                        src="/hero_banner.png" // Reference directly from public/
                        alt="Summer Camp Banner"

                        width={640} // Set an appropriate width
                        height={400} // Set an appropriate height
                        priority // Optimizes for faster loading
                    />
                    </div>
                    <div className='inline-flex flex-col w-full gap-2 md:gap-4 md:w-1/3'>
                        <h1 className='heading  text-[#FF6200]  md:text-5xl text-3xl'>SUMMER CAMP 2025</h1>
                        <div className='flex justify-between item-center'>
                            <div className='gap-1.5 flex flex-row items-center justify-center'>
                                <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M22.3333 4.74665V2.66666C22.3333 2.11999 21.88 1.66666 21.3333 1.66666C20.7866 1.66666 20.3333 2.11999 20.3333 2.66666V4.66666H11.6666V2.66666C11.6666 2.11999 11.2133 1.66666 10.6666 1.66666C10.12 1.66666 9.66665 2.11999 9.66665 2.66666V4.74665C6.06665 5.07999 4.31998 7.22665 4.05331 10.4133C4.02665 10.8 4.34665 11.12 4.71998 11.12H27.28C27.6666 11.12 27.9866 10.7867 27.9466 10.4133C27.68 7.22665 25.9333 5.07999 22.3333 4.74665Z" fill="#171717" />
                                    <path opacity="0.4" d="M28 14.4533V16.7733C28 17.5867 27.28 18.2133 26.48 18.08C26.1067 18.0267 25.72 17.9867 25.3333 17.9867C21.2933 17.9867 18 21.28 18 25.32C18 25.9333 18.24 26.7867 18.4933 27.56C18.7867 28.4267 18.1467 29.32 17.2267 29.32H10.6667C6 29.32 4 26.6533 4 22.6533V14.44C4 13.7067 4.6 13.1067 5.33333 13.1067H26.6667C27.4 13.12 28 13.72 28 14.4533Z" fill="#171717" />
                                    <path d="M25.3333 20C22.3867 20 20 22.3867 20 25.3333C20 26.3333 20.28 27.28 20.7733 28.08C21.6933 29.6267 23.3867 30.6667 25.3333 30.6667C27.28 30.6667 28.9733 29.6267 29.8933 28.08C30.3867 27.28 30.6667 26.3333 30.6667 25.3333C30.6667 22.3867 28.28 20 25.3333 20ZM28.0933 24.76L25.2533 27.3867C25.0667 27.56 24.8133 27.6533 24.5733 27.6533C24.32 27.6533 24.0667 27.56 23.8667 27.36L22.5467 26.04C22.16 25.6533 22.16 25.0133 22.5467 24.6267C22.9333 24.24 23.5733 24.24 23.96 24.6267L24.6 25.2667L26.7333 23.2933C27.1333 22.92 27.7733 22.9467 28.1467 23.3467C28.52 23.7467 28.4933 24.3733 28.0933 24.76Z" fill="#171717" />
                                    <path d="M11.3333 20C10.9867 20 10.64 19.8533 10.3867 19.6133C10.1467 19.36 10 19.0133 10 18.6667C10 18.32 10.1467 17.9734 10.3867 17.72C10.6933 17.4134 11.16 17.2667 11.6 17.36C11.68 17.3733 11.76 17.4 11.84 17.44C11.92 17.4667 12 17.5067 12.08 17.56C12.1467 17.6134 12.2133 17.6667 12.28 17.72C12.52 17.9734 12.6667 18.32 12.6667 18.6667C12.6667 19.0133 12.52 19.36 12.28 19.6133C12.2133 19.6667 12.1467 19.72 12.08 19.7733C12 19.8267 11.92 19.8667 11.84 19.8934C11.76 19.9334 11.68 19.96 11.6 19.9734C11.5067 19.9867 11.4133 20 11.3333 20Z" fill="#171717" />
                                    <path d="M16 20C15.6534 20 15.3067 19.8533 15.0534 19.6133C14.8134 19.36 14.6667 19.0133 14.6667 18.6667C14.6667 18.32 14.8134 17.9733 15.0534 17.72C15.56 17.2267 16.4534 17.2267 16.9467 17.72C17.1867 17.9733 17.3334 18.32 17.3334 18.6667C17.3334 19.0133 17.1867 19.36 16.9467 19.6133C16.6934 19.8533 16.3467 20 16 20Z" fill="#171717" />
                                    <path d="M11.3333 24.6667C10.9867 24.6667 10.64 24.52 10.3867 24.28C10.1467 24.0266 10 23.68 10 23.3333C10 22.9867 10.1467 22.64 10.3867 22.3867C10.52 22.2667 10.6533 22.1733 10.8267 22.1066C11.32 21.8933 11.9067 22.0133 12.28 22.3867C12.52 22.64 12.6667 22.9867 12.6667 23.3333C12.6667 23.68 12.52 24.0266 12.28 24.28C12.0267 24.52 11.68 24.6667 11.3333 24.6667Z" fill="#171717" />
                                </svg>
                                <h3 className='text-sm tracking-tight md:text-xs '>12 March 2025</h3>
                            </div>
                            <div className='gap-1.5 flex items-center justify-center'>
                                <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 2.66666C12.5066 2.66666 9.66663 5.50666 9.66663 8.99999C9.66663 12.4267 12.3466 15.2 15.84 15.32C15.9466 15.3067 16.0533 15.3067 16.1333 15.32C16.16 15.32 16.1733 15.32 16.2 15.32C16.2133 15.32 16.2133 15.32 16.2266 15.32C19.64 15.2 22.32 12.4267 22.3333 8.99999C22.3333 5.50666 19.4933 2.66666 16 2.66666Z" fill="#171717" />
                                    <path opacity="0.4" d="M22.7733 18.88C19.0533 16.4 12.9866 16.4 9.23995 18.88C7.54661 20 6.61328 21.5333 6.61328 23.1733C6.61328 24.8133 7.54661 26.3333 9.22661 27.4533C11.0933 28.7067 13.5466 29.3333 15.9999 29.3333C18.4533 29.3333 20.9066 28.7067 22.7733 27.4533C24.4533 26.32 25.3866 24.8 25.3866 23.1467C25.3733 21.52 24.4533 19.9867 22.7733 18.88Z" fill="#171717" />
                                    <path d="M15.16 25.68C14.9467 25.68 14.7333 25.5867 14.5733 25.44L12.8933 23.76C12.5733 23.44 12.5733 22.9067 12.8933 22.5867C13.2133 22.2667 13.7467 22.2667 14.0667 22.5867L15.16 23.68L17.9333 20.9067C18.2533 20.5867 18.7867 20.5867 19.1067 20.9067C19.4267 21.2267 19.4267 21.76 19.1067 22.08L15.7467 25.44C15.5867 25.6 15.3733 25.68 15.16 25.68Z" fill="#171717" />
                                </svg>
                                <h3 className='text-sm tracking-tight md:text-xs '>1-9 Grade</h3>
                            </div>
                            <div className='gap-1.5 flex items-center justify-center'>
                                <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path opacity="0.4" d="M23.9333 10.28L23.7467 10.1733L21.8933 9.10666L18.0667 6.89333C16.8933 6.21333 15.1067 6.21333 13.9333 6.89333L10.1067 9.10666L8.25334 10.1867L8.01334 10.32C5.62668 11.92 5.46667 12.2133 5.46667 14.7867V20.9333C5.46667 23.5067 5.62668 23.8 8.06668 25.44L13.9333 28.8267C14.52 29.1733 15.2533 29.3333 16 29.3333C16.7333 29.3333 17.48 29.1733 18.0667 28.8267L23.9867 25.4C26.3733 23.8 26.5333 23.5067 26.5333 20.9333V14.7867C26.5333 12.2133 26.3733 11.92 23.9333 10.28Z" fill="#171717" />
                                    <path d="M8.2533 10.1867L10.1066 9.10666L13.76 6.99999L13.9333 6.89332C15.1066 6.21332 16.8933 6.21332 18.0666 6.89332L18.24 6.99999L21.8933 9.10666L23.7466 10.1733V7.31999C23.7466 4.31999 22.0933 2.66666 19.0933 2.66666H12.8933C9.8933 2.66666 8.2533 4.31999 8.2533 7.31999V10.1867Z" fill="#171717" />
                                    <path d="M19.7867 17.7867L18.96 18.8C18.8267 18.9467 18.7333 19.24 18.7467 19.44L18.8267 20.7467C18.88 21.5467 18.3067 21.96 17.56 21.6667L16.3467 21.1867C16.16 21.12 15.84 21.12 15.6533 21.1867L14.44 21.6667C13.6933 21.96 13.12 21.5467 13.1733 20.7467L13.2533 19.44C13.2667 19.24 13.1733 18.9467 13.04 18.8L12.2133 17.7867C11.6933 17.1733 11.92 16.4933 12.6933 16.2933L13.96 15.9733C14.16 15.92 14.4 15.7333 14.5067 15.56L15.2133 14.4667C15.6533 13.7867 16.3467 13.7867 16.7867 14.4667L17.4933 15.56C17.6 15.7333 17.84 15.92 18.04 15.9733L19.3067 16.2933C20.08 16.4933 20.3067 17.1733 19.7867 17.7867Z" fill="#171717" />
                                </svg>
                                <h3 className='text-sm tracking-tight md:text-xs'>Offline</h3>
                            </div>
                        </div>
                        <p className='para md:text-base text-xs text-[#1F1F1F] text-justify'>Develop an innovative AI assistant using Blockly that can understand voice commands, provide smart responses, and even integrate IoT features like home automation or reminders. Test your creativity, coding skills, and problem-solving abilities in this exciting challenge.</p>
                        <div>
                            <h2 className='sub-heading  text-[#6D6D6D] md:text-2xl text-lg uppercase'>Why Participate </h2>
                            <ul className="pl-5 text-xs list-disc md:text-sm">
                                <li>Hands-on experience with AI & IoT</li>
                                <li>Compete for exciting prizes & recognition</li>
                                <li>Learn from expert mentors</li>
                                <li>Earn a participation certificate</li>
                            </ul>
                        </div>
                        <button className='py-3 rounded-full w-full bg-[#FF6200]'>
                            <h1 className='text-base tracking-wider text-white sub-heading'>
                                REGISTER NOW
                            </h1>
                        </button>
                    </div>
                </div>
                <div className='rounded-full bg-[#FFDDA3] gap-1.5 items-center justify-center  py-1 px-2 inline-flex flex-row'>
                    {[...Array(4)].map((_, index) => (
                        <div key={index}           style={{
                            width: index === 0 ? "16px" : "10px", // size-[16px] or size-[10px]
                            height: index === 0 ? "16px" : "10px",
                            backgroundColor: index === 0 ? "#FF6200" : "#F9FBFC", // bg-[#FF6200] or bg-[#F9FBFC]
                            borderRadius: "9999px", // rounded-full
                          }}></div>
                    ))}
                </div>
            </div>

            {/* Program */}
            <div className='flex flex-col items-center justify-center w-full p-2 my-12 md:gap-6 md:p-12 '>
                <Sectionheading tag='Programs' heading='Future Learning' desc='At SheshGyan, we offer a range of hands-on learning programs designed for students from Class 1 to 9. Our courses focus on coding, AI, robotics, and STEM, ensuring young learners develop essential problem-solving, creativity, and critical thinking skills.' />

                {/* card */}
                <div className='w-full'>
                <div className="flex items-center justify-between w-full">
      {/* Left Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 cursor-pointer h-[40px] w-[40px]  md:w-[72px] md:h-[72px]  hover:scale-110  "
        viewBox="0 0 58 58"
        fill="none"
        onClick={handlePrev}
      >
        <path
          opacity="0.4"
          d="M25.8488 20.6475L37.9688 29.7435V43.2075C37.9688 45.5115 35.1847 46.6635 33.5527 45.0315L21.1208 32.5995C19.1288 30.6075 19.1288 27.3675 21.1208 25.3755L25.8488 20.6475Z"
          fill="#171717"
          fillOpacity="0.3"
        />
        <path
          d="M37.9688 14.7918V29.7438L25.8488 20.6478L33.5527 12.9438C35.1847 11.3358 37.9688 12.4878 37.9688 14.7918Z"
          fill="#171717"
          fillOpacity="0.3"
        />
      </svg>

      {/* Course Numbers */}
      <div className="flex items-center justify-between w-[80%] gap-1 my-5 md:px-5 md:my-10 md:gap-2">
        {cources.map((_,index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center md:size-16 h-[60px] w-[60px] cursor-pointer transition-all duration-300  ${
              activeIndex === index
                ? "text-[#FF6200] md:rounded-[8px] rounded-lg bg-[#FF6200]/10 scale-110 shadow-md"
                : "text-[#828282] hover:scale-105"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <h1 className={`text-xl heading md:text-4xl ${
              activeIndex === index
                ? "text-[#FF6200]  scale-110 "
                : "text-[#828282] hover:scale-105"
            }`}>{index + 1}</h1>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 cursor-pointer h-[40px] w-[40px]  md:w-[72px] md:h-[72px] hover:scale-110"
        viewBox="0 0 58 58"
        fill="none"
        onClick={handleNext}
      >
        <path
          opacity="0.4"
          d="M31.7509 20.6475L19.6309 29.7435V43.2075C19.6309 45.5115 22.4149 46.6635 24.0469 45.0315L36.4789 32.5995C38.4709 30.6075 38.4709 27.3675 36.4789 25.3755L31.7509 20.6475Z"
          fill="#171717"
        />
        <path
          d="M19.6309 14.7918V29.7438L31.7509 20.6478L24.0469 12.9438C22.4149 11.3358 19.6309 12.4878 19.6309 14.7918Z"
          fill="#171717"
        />
      </svg>
    </div>
                    <div className='flex items-center justify-center'>
                    <img
                        src="/class_1_img.svg" // Reference directly from public/
                        alt="Summer Camp Banner"
                        className='w-[1000px]'
                        width={600} // Set an appropriate width
                        height={400} // Set an appropriate height
                        priority // Optimizes for faster loading
                    />
                    </div>
                </div>
            </div>

            {/* achivement */}
            <div className='bg-[#FF7C2B] w-full pb-12'>
                <Sectionheading tag='achivements' heading='Tech Leaders' desc='Empowering young minds with cutting-edge skills in electronics, IoT, and smart technologies, preparing them to innovate and lead in the digital era.' isRight={false} bg='orange' className='p-12' />
                <div className='flex flex-col items-center justify-around w-full gap-4 p-4 md:flex-row '>
                    {
                        achivements.map((achivement, index) => (
                            <div
                                key={index}
                                className='inline-flex flex-col gap-6 p-2 bg-white border-2 border-[#505050] rounded-2xl '
                                style={{
                                    boxShadow: "8px 8px 0px 0px #505050"
                                }}
                            >
                                <img
                                    src={achivement.img} // Reference directly from public/
                                    alt="achivement"
                                    width={340} // Set an appropriate width
                                    height={400} // Set an appropriate height
                                    priority // Optimizes for faster loading
                                />
                                <div className='inline-flex flex-col items-center justify-center gap-2 mb-6'>
                                    <h1 className='heading text-4xl text-[#505050] uppercase'>{achivement.heading}</h1>
                                    <p className='para text-sm font-semibold text-[#1F1F1F]/60'>{achivement.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            {/* center */}
            <div className='flex flex-col items-center justify-center w-full gap-20 my-12 md:p-12'>

                <Sectionheading tag='Center' heading='Learning Hubs' desc='Explore hands-on learning at our offline centers across India. Designed for interactive and practical education, our hubs bring technology and innovation closer to students.' />
                <div className='relative '>
                    <div className='inline-flex items-center justify-center size-[360px] md:size-[800px]'>
                    <img
                        src="/center.svg" // Reference directly from public/
                        alt="Summer Camp Banner"
                        width={1000} // Set an appropriate width
                        height={400} // Set an appropriate height
                        priority // Optimizes for faster loading
                    />
                    </div>


                    <div className='absolute top-4 right-6  md:p-4 p-2 md:gap-4 gap-1 inline-flex flex-col md:mx-10 mx-2   border-[1.5px] border-[#1F1F1F]/60  md:rounded-2xl rounded-xl'>
                        <h2 className='sub-heading md:text-3xl text-base tracking-wider uppercase text-[#6D6D6D]'>offline center</h2>
                        <div className='flex flex-col items-start gap-1 md:gap-2'>
                            <div className='inline-flex items-start justify-start gap-3'>
                                <div className='md:h-8 w-8 h-4 w-4 md:rounded-lg rounded-sm bg-[#FF6200]'></div>
                                <h4 className='font-semibold md:text-lg text-xs text-[#1F1F1F]/80'>Available</h4>
                            </div>
                            <div className='inline-flex items-center gap-3'>
                                <div className='md:h-8 w-8 h-4 w-4 md:rounded-lg rounded-sm bg-[#D9D9D9]'></div>
                                <h4 className='font-semibold md:text-lg text-xs text-[#1F1F1F]/80' >Coming Soon</h4>
                            </div>
                            <div className='inline-flex items-center gap-3'>
                                <div className='border-[1.5px] md:h-8 w-8 h-4 w-4 md:rounded-lg rounded-sm border-black/60'></div>
                                <h4 className='font-semibold md:text-lg text-xs text-[#1F1F1F]/80' >Not - Available</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonials */}
            <Testimonial testimonials={testimonials}/>

            {/* Request Form */}
            <Form />


            <Footer />

        </div>)
}

export default SummerCamp
