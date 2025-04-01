import React from 'react'

const Sectionheading = ({tag="",heading = "", desc="", isRight=true, bg="white",  className=''}) => {
  return (
    <>
                    <div className={`inline-flex flex-col py-4 px-6  md:p-8 w-full gap-6 ${className} `}>
                    <div className={`flex justify-start  ${isRight ? 'xl:justify-start' : 'xl:justify-end ' } items-center`}>
                        <h5 className={` para text-xs uppercase bg-[#FF6200]/10 py-1.5 px-4 ${bg==='orange' ? "text-[#FF6200] bg-[#FFDDA3]" : 'text-[#FF6200]' }  inline-flex rounded-lg text-[#FF6200] `}>{tag}</h5>
                    </div>
                    <div className={`flex  xl:flex-row  flex-col ${isRight ? '' : 'xl:flex-row-reverse flex-col ' } items-start  justify-between w-full`}>
                        <h1 className={`heading  uppercase text-4xl sm:text-5xl xl:text-6xl  ${bg==='orange' ? "text-white" : 'text-[#FF6200]' } `}>{heading}</h1>
                        <p className={`para md:text-base text-justify text-xs ${bg==='orange' ? "text-white/80" : 'text-[#1F1F1F]/80' }  sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]`}>{desc}</p>
                    </div>
                </div>
    </>
  )
}

export default Sectionheading
