"use client";

   import React from 'react'
    import { useState } from "react";
import Sectionheading from './Sectionheading';
import TailwindWrapper from './TailwindWrapper';

    const QnA = ({QnAs = []}) => {
        const [openIndex, setOpenIndex] = useState(null);

        const toggleAnswer = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    return (
        <>
        <TailwindWrapper>
        <div className='flex flex-col w-full gap-4 p-4 sm:gap-16 sm:p-24'>
                    <Sectionheading tag="QnA" heading="MOST Asked Questions" desc="Curious about how SheshGyan works? Whether you're a school, student, or parent, find everything you need to know about our programs, subjects, and how we empower the next generation with future-ready skills." />
                <div className='flex flex-col items-end w-full gap-4 p-4'>
                    {QnAs.map((QnA, index) => (
                        <div
                            key={index}
                            className={`border-[1.4px] p-4 w-full border-[#D0D3D7] bg-white rounded-[18px] transition-all duration-500 transform ${openIndex === index ? 'border-[#FF6200]/50 shadow-[8px_8px_0px_0px_#FF6200] translate-x-2' : 'translate-x-0'}`}
                        >
                            <div
                                className="flex items-center justify-between px-4 py-0 cursor-pointer sm:p-7"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h2 className="sub-heading text-[#505050] sm:text-xl md:text-2xl lg:text-3xl text-lg font-medium sm:leading-[62px] tracking-[-0.72px] font-[Tusker Grotesk]">
                                    {QnA.Question}
                                </h2>
                                <div className="transition-transform duration-500 transform">
                                    {openIndex === index ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M24 4.5C13.23 4.5 4.5 13.23 4.5 24C4.5 34.77 13.23 43.5 24 43.5C34.77 43.5 43.5 34.77 43.5 24C43.5 13.23 34.77 4.5 24 4.5ZM30 25.5C30.3978 25.5 30.7794 25.342 31.0607 25.0607C31.342 24.7794 31.5 24.3978 31.5 24C31.5 23.6022 31.342 23.2206 31.0607 22.9393C30.7794 22.658 30.3978 22.5 30 22.5H18C17.6022 22.5 17.2206 22.658 16.9393 22.9393C16.658 23.2206 16.5 23.6022 16.5 24C16.5 24.3978 16.658 24.7794 16.9393 25.0607C17.2206 25.342 17.6022 25.5 18 25.5H30Z" fill="#FF6200"/>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M24 4.5C13.23 4.5 4.5 13.23 4.5 24C4.5 34.77 13.23 43.5 24 43.5C34.77 43.5 43.5 34.77 43.5 24C43.5 13.23 34.77 4.5 24 4.5ZM25.5 18C25.5 17.6022 25.342 17.2206 25.0607 16.9393C24.7794 16.658 24.3978 16.5 24 16.5C23.6022 16.5 23.2206 16.658 22.9393 16.9393C22.658 17.2206 22.5 17.6022 22.5 18V22.5H18C17.6022 22.5 17.2206 22.658 16.9393 22.9393C16.658 23.2206 16.5 23.6022 16.5 24C16.5 24.3978 16.658 24.7794 16.9393 25.0607C17.2206 25.342 17.6022 25.5 18 25.5H22.5V30C22.5 30.3978 22.658 30.7794 22.9393 31.0607C23.2206 31.342 23.6022 31.5 24 31.5C24.3978 31.5 24.7794 31.342 25.0607 31.0607C25.342 30.7794 25.5 30.3978 25.5 30V25.5H30C30.3978 25.5 30.7794 25.342 31.0607 25.0607C31.342 24.7794 31.5 24.3978 31.5 24C31.5 23.6022 31.342 23.2206 31.0607 22.9393C30.7794 22.658 30.3978 22.5 30 22.5H25.5V18Z" fill="black"/>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {openIndex === index && (
                                <p className="text-[#616161]/80 para text-base md:text-lg font-medium sm:leading-[24px] tracking-[-0.96px] font-[Manrope] self-stretch p-4 sm:p-7 transition-opacity duration-500 ease-in-out opacity-100">
                                    {QnA.Answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            </TailwindWrapper>
        </>
    )
    }

    export default QnA
