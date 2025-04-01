import React from 'react'

import images from './data/collab_images';
import Sectionheading from '../components/_App/Sectionheading'
import Form from '../components/_App/Form';
import QnA from '../components/_App/QnA';
import QnAs from './data/questions'
import Footer from '../components/_App/Foot';
import Navbar from '../components/_App/Nav';

const Compition = () => {
    const active = "size-4 bg-[#FF6200]"
    const compitions = [{
        img: "/hackathon_img.svg",
        header: "Innovation & Hackathons",
        desc: "Step into the world of innovation by collaborating with like-minded peers to tackle real-world challenges. These hackathons provide an exciting platform to brainstorm, code, design, and present solutions within a time constraint, pushing creativity and problem-solving to the next level.",
        skills: ["coding", "Development", "Teamwork", "Problem Solving", "Development", "Prototype"]
    }, {
        img: "/capture_img.svg",
        header: "Capture the Flag",
        desc: "Dive into the world of cybersecurity and ethical hacking, where participants learn to identify system vulnerabilities, defend against cyber threats, and solve security challenges in simulated real-world scenarios. Gain hands-on experience in ethical hacking techniques and cybersecurity practices.",
        skills: ["Ethical hacking", "penetration testing", "cryptography", "Kali Linux", "network security"]
    }, {
        img: "/competative_img.svg",
        header: "Competitive Coding",
        desc: "Sharpen your programming skills by competing in high-intensity coding challenges designed to test logic, efficiency, and algorithmic thinking. Compete with peers, solve complex problems under time pressure, and improve your coding speed and accuracy.",
        skills: [" Data structures", "algorithms", "optimization", "Problem Solving", "Programming"]
    }, {
        img: "/technathon_img.svg",
        header: "Robotics & Techathons",
        desc: "Design, build, and program robots to complete tasks, navigate challenges, and solve real-world problems. These competitions encourage hands-on learning, integrating mechanical, electrical, and software engineering to bring automation to life.",
        skills: ["C#", "Mechanical design", "automation", "circuit building", "Embedded System"]
    },
    ]
    const themes = [{
        img: "/smart_device_img.svg",
        for: "only for existing student",
        heading: "Smart Device Programming ",
        desc: "Unlock the power of IoT with our Smart Device Programming Challenge! Using SheshGyan’s plug-and-play hardware, students can create their own unique IoT projects with ease. Our Blockly-based programming environment makes it simple to design, code, and bring smart ideas to life."
    }, {
        img: "/blockly_coding_img.svg",
        for: "open for all",
        heading: "Blockly Coding Quest",
        desc: "Step into the world of electronics and programming with our Blockly Coding Quest! Students use our SheshGyan simulation platform to design, build, and program innovative electronic projects. With Blockly’s intuitive drag-and-drop coding, young innovators can bring their ideas to life and compete in exciting challenges."
    }, {
        img: "/ai_challenge_img.svg",
        for: "open for all",
        heading: "AI Challenge",
        desc: "Explore the power of Artificial Intelligence and Machine Learning with SheshGyan’s AI Challenge! Participants will work on sentiment analysis, text classification, image recognition, and emotion detection using our AI-powered SheshML tool. This competition enhances critical thinking and teaches students how to use machine learning to solve real-world problems."
    },]
    const benifits = [{
        img: "/complete_stage_img.svg",
        heading: "Compete on a big stage"
    }, {
        img: "/tech_experience_img.svg",
        heading: "Hands-on tech experience"
    }, {
        img: "/connect_expert_img.svg",
        heading: "Connect with experts"
    }, {
        img: "/problem_solving_img.svg",
        heading: "Sharpen problem-solving"
    }, {
        img: "/reward_recognition_img.svg",
        heading: "Win rewards & recognition"
    },]
    const gallary = ['/gallary_img_1.svg', '/gallary_img_2.svg', '/gallary_img_3.svg']
    const rules = [{
        heading : "Approved Hardware Only",
        desc : "Participants must use SheshGyan-approved hardware for their projects. Use of any other hardware will lead to disqualification."
    },{
        heading : "For New Participants",
        desc : "For New Participants – First-time coding participants can compete in simulation-based AI & ML projects only. Hardware-based implementation is not available for new registrants. For queries, reach out to compition@sheshgyan.com."
    },,{
        heading : "Grade-Wise Challenges",
        desc : "Each participant will receive a problem statement tailored to their grade level."
    },{
        heading : "Practice Round",
        desc : "A practice session will be provided to help participants familiarize themselves with the competition format."
    },{
        heading : "Competition Format",
        desc : 'The Technathon consists of two rounds: <br />- <b>Round 1</b>  – Qualifying round to assess for finalist. <br />- <b>Round 2</b> – The final round to determine winners .'
    },{
        heading : "Fair Evaluation",
        desc : "SheshGyan reserves full authority over the evaluation process and final decisions."
    },{
        heading : "Competition Duration",
        desc : "Each round will have a time limit of 30 minutes."
    },{
        heading : "Eligibility",
        desc : "Open to students aged 6-14. Only individual participation is allowed; no group entries."
    },{
        heading : "Competition Policy",
        desc : "SheshGyan reserves the right to modify or cancel the event if needed."
    },]
    return (
        <div className='relative mt-24 '>
            <Navbar />
            {/* hero */}
            <div className='flex flex-col items-center justify-center w-full gap-6 ms:p-5 '>
                <div className='inline-flex flex-col md:flex-row md:p-8 p-2 item-center justify-between border-2 border-[#1F1F1F]/60 rounded-3xl w-[90%] gap-8'
                    style={{ boxShadow: "12px 12px 0px 0px #1F1F1F" }}
                >
                    <img
                        src="/hero_banner.png" // Reference directly from public/
                        alt="Summer Camp Banner"

                        width={600} // Set an appropriate width
                        height={400} // Set an appropriate height
                        priority // Optimizes for faster loading
                    />
                    <div className='flex flex-col gap-4 '>
                        <h1 className='heading  text-[#FF6200] text-3xl md:text-5xl'>AI-Powered Smart Assistant Challenge</h1>
                        <div className='flex justify-between item-center'>
                            <div className='gap-1.5 flex flex-row bg-pink items-center justify-center'>
                                <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M22.3333 4.74665V2.66666C22.3333 2.11999 21.88 1.66666 21.3333 1.66666C20.7866 1.66666 20.3333 2.11999 20.3333 2.66666V4.66666H11.6666V2.66666C11.6666 2.11999 11.2133 1.66666 10.6666 1.66666C10.12 1.66666 9.66665 2.11999 9.66665 2.66666V4.74665C6.06665 5.07999 4.31998 7.22665 4.05331 10.4133C4.02665 10.8 4.34665 11.12 4.71998 11.12H27.28C27.6666 11.12 27.9866 10.7867 27.9466 10.4133C27.68 7.22665 25.9333 5.07999 22.3333 4.74665Z" fill="#171717" />
                                    <path opacity="0.4" d="M28 14.4533V16.7733C28 17.5867 27.28 18.2133 26.48 18.08C26.1067 18.0267 25.72 17.9867 25.3333 17.9867C21.2933 17.9867 18 21.28 18 25.32C18 25.9333 18.24 26.7867 18.4933 27.56C18.7867 28.4267 18.1467 29.32 17.2267 29.32H10.6667C6 29.32 4 26.6533 4 22.6533V14.44C4 13.7067 4.6 13.1067 5.33333 13.1067H26.6667C27.4 13.12 28 13.72 28 14.4533Z" fill="#171717" />
                                    <path d="M25.3333 20C22.3867 20 20 22.3867 20 25.3333C20 26.3333 20.28 27.28 20.7733 28.08C21.6933 29.6267 23.3867 30.6667 25.3333 30.6667C27.28 30.6667 28.9733 29.6267 29.8933 28.08C30.3867 27.28 30.6667 26.3333 30.6667 25.3333C30.6667 22.3867 28.28 20 25.3333 20ZM28.0933 24.76L25.2533 27.3867C25.0667 27.56 24.8133 27.6533 24.5733 27.6533C24.32 27.6533 24.0667 27.56 23.8667 27.36L22.5467 26.04C22.16 25.6533 22.16 25.0133 22.5467 24.6267C22.9333 24.24 23.5733 24.24 23.96 24.6267L24.6 25.2667L26.7333 23.2933C27.1333 22.92 27.7733 22.9467 28.1467 23.3467C28.52 23.7467 28.4933 24.3733 28.0933 24.76Z" fill="#171717" />
                                    <path d="M11.3333 20C10.9867 20 10.64 19.8533 10.3867 19.6133C10.1467 19.36 10 19.0133 10 18.6667C10 18.32 10.1467 17.9734 10.3867 17.72C10.6933 17.4134 11.16 17.2667 11.6 17.36C11.68 17.3733 11.76 17.4 11.84 17.44C11.92 17.4667 12 17.5067 12.08 17.56C12.1467 17.6134 12.2133 17.6667 12.28 17.72C12.52 17.9734 12.6667 18.32 12.6667 18.6667C12.6667 19.0133 12.52 19.36 12.28 19.6133C12.2133 19.6667 12.1467 19.72 12.08 19.7733C12 19.8267 11.92 19.8667 11.84 19.8934C11.76 19.9334 11.68 19.96 11.6 19.9734C11.5067 19.9867 11.4133 20 11.3333 20Z" fill="#171717" />
                                    <path d="M16 20C15.6534 20 15.3067 19.8533 15.0534 19.6133C14.8134 19.36 14.6667 19.0133 14.6667 18.6667C14.6667 18.32 14.8134 17.9733 15.0534 17.72C15.56 17.2267 16.4534 17.2267 16.9467 17.72C17.1867 17.9733 17.3334 18.32 17.3334 18.6667C17.3334 19.0133 17.1867 19.36 16.9467 19.6133C16.6934 19.8533 16.3467 20 16 20Z" fill="#171717" />
                                    <path d="M11.3333 24.6667C10.9867 24.6667 10.64 24.52 10.3867 24.28C10.1467 24.0266 10 23.68 10 23.3333C10 22.9867 10.1467 22.64 10.3867 22.3867C10.52 22.2667 10.6533 22.1733 10.8267 22.1066C11.32 21.8933 11.9067 22.0133 12.28 22.3867C12.52 22.64 12.6667 22.9867 12.6667 23.3333C12.6667 23.68 12.52 24.0266 12.28 24.28C12.0267 24.52 11.68 24.6667 11.3333 24.6667Z" fill="#171717" />
                                </svg>
                                <h3 className='text-xs '>12 March 2025</h3>
                            </div>
                            <div className='gap-1.5 flex items-center justify-center'>
                                <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 2.66666C12.5066 2.66666 9.66663 5.50666 9.66663 8.99999C9.66663 12.4267 12.3466 15.2 15.84 15.32C15.9466 15.3067 16.0533 15.3067 16.1333 15.32C16.16 15.32 16.1733 15.32 16.2 15.32C16.2133 15.32 16.2133 15.32 16.2266 15.32C19.64 15.2 22.32 12.4267 22.3333 8.99999C22.3333 5.50666 19.4933 2.66666 16 2.66666Z" fill="#171717" />
                                    <path opacity="0.4" d="M22.7733 18.88C19.0533 16.4 12.9866 16.4 9.23995 18.88C7.54661 20 6.61328 21.5333 6.61328 23.1733C6.61328 24.8133 7.54661 26.3333 9.22661 27.4533C11.0933 28.7067 13.5466 29.3333 15.9999 29.3333C18.4533 29.3333 20.9066 28.7067 22.7733 27.4533C24.4533 26.32 25.3866 24.8 25.3866 23.1467C25.3733 21.52 24.4533 19.9867 22.7733 18.88Z" fill="#171717" />
                                    <path d="M15.16 25.68C14.9467 25.68 14.7333 25.5867 14.5733 25.44L12.8933 23.76C12.5733 23.44 12.5733 22.9067 12.8933 22.5867C13.2133 22.2667 13.7467 22.2667 14.0667 22.5867L15.16 23.68L17.9333 20.9067C18.2533 20.5867 18.7867 20.5867 19.1067 20.9067C19.4267 21.2267 19.4267 21.76 19.1067 22.08L15.7467 25.44C15.5867 25.6 15.3733 25.68 15.16 25.68Z" fill="#171717" />
                                </svg>
                                <h3 className='text-xs '>1-9 Grade</h3>
                            </div>
                            <div className='gap-1.5 flex items-center justify-center'>
                                <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path opacity="0.4" d="M23.9333 10.28L23.7467 10.1733L21.8933 9.10666L18.0667 6.89333C16.8933 6.21333 15.1067 6.21333 13.9333 6.89333L10.1067 9.10666L8.25334 10.1867L8.01334 10.32C5.62668 11.92 5.46667 12.2133 5.46667 14.7867V20.9333C5.46667 23.5067 5.62668 23.8 8.06668 25.44L13.9333 28.8267C14.52 29.1733 15.2533 29.3333 16 29.3333C16.7333 29.3333 17.48 29.1733 18.0667 28.8267L23.9867 25.4C26.3733 23.8 26.5333 23.5067 26.5333 20.9333V14.7867C26.5333 12.2133 26.3733 11.92 23.9333 10.28Z" fill="#171717" />
                                    <path d="M8.2533 10.1867L10.1066 9.10666L13.76 6.99999L13.9333 6.89332C15.1066 6.21332 16.8933 6.21332 18.0666 6.89332L18.24 6.99999L21.8933 9.10666L23.7466 10.1733V7.31999C23.7466 4.31999 22.0933 2.66666 19.0933 2.66666H12.8933C9.8933 2.66666 8.2533 4.31999 8.2533 7.31999V10.1867Z" fill="#171717" />
                                    <path d="M19.7867 17.7867L18.96 18.8C18.8267 18.9467 18.7333 19.24 18.7467 19.44L18.8267 20.7467C18.88 21.5467 18.3067 21.96 17.56 21.6667L16.3467 21.1867C16.16 21.12 15.84 21.12 15.6533 21.1867L14.44 21.6667C13.6933 21.96 13.12 21.5467 13.1733 20.7467L13.2533 19.44C13.2667 19.24 13.1733 18.9467 13.04 18.8L12.2133 17.7867C11.6933 17.1733 11.92 16.4933 12.6933 16.2933L13.96 15.9733C14.16 15.92 14.4 15.7333 14.5067 15.56L15.2133 14.4667C15.6533 13.7867 16.3467 13.7867 16.7867 14.4667L17.4933 15.56C17.6 15.7333 17.84 15.92 18.04 15.9733L19.3067 16.2933C20.08 16.4933 20.3067 17.1733 19.7867 17.7867Z" fill="#171717" />
                                </svg>
                                <h3 className='text-xs'>Offline</h3>
                            </div>
                        </div>
                        <p className='para md:text-base text-sm text-[#1F1F1F]'>Develop an innovative AI assistant using Blockly that can understand voice commands, provide smart responses, and even integrate IoT features like home automation or reminders. Test your creativity, coding skills, and problem-solving abilities in this exciting challenge.</p>
                        <div>
                            <h2 className='sub-heading   text-[#6D6D6D] md:text-2xl text-xl uppercase'>Why Participate </h2>
                            <ul className="pl-5 text-sm list-disc md:text-sm">
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


            {/* Compition */}
            <div className='flex flex-col items-center justify-center w-full gap-6 p-2 my-12 md:p-6 '>
                <div className='inline-flex flex-col items-center justify-center w-full gap-4 p-2 md:p-12'>
                    <div >
                        <h5 className='para text-xs uppercase bg-[#FF6200]/10 py-1.5 px-4  tracking-wider inline-flex rounded-lg text-[#FF6200]'>Competitions</h5>
                    </div>
                    <div className='flex flex-col items-center justify-between w-full'>

                        <h1 className='heading uppercase md:text-7xl text-4xl text-[#FF6200]'>Varity of Challenges</h1>
                        <p className='para md:text-base text-sm  text-justify text-[#1F1F1F] max-w-[540px]'>Compete in coding, AI, robotics, and innovation challenges that test skills, creativity, and problem-solving</p>
                    </div>

                </div>
                <div className='w-full bg-[#FFDDA3] z-0 relative rounded-[32px] md:rounded-[40px] md:p-10 p-5'>
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1101" height="1625" viewBox="0 0 1101 1625" fill="none">
                            <path d="M435.501 1C446.001 70.1667 696.808 135 896.808 177C1146.81 229.5 1190.81 463 874.308 521.5C557.808 580 601.808 293.5 201.808 407.5C-198.192 521.5 32.2084 811.951 653.998 847.5C1152.5 876 874.309 1258 237.308 1170.5C12.4199 1139.61 -158.499 1665.5 461.001 1619" stroke="#FF6200" stroke-opacity="0.6" strokeWidth="5" stroke-dasharray="24 16" />
                        </svg>
                    </div>
                    <div className='z-10 flex flex-col md:gap-24 gap-18'>
                        {
                            compitions.map((compition, index) => (
                                <div className={`flex ${index % 2 === 0 ? '' : 'flex-row-reverse md:flex-row-reverse'}flex-col-reverse gap-4 md:flex-row items-center justify-between`}>
                                    <div className='inline-flex flex-col justify-between gap-4 p-3 bg-white md:p-5 md:flex-row item-center rounded-3xl'
                                        style={{ boxShadow: "12px 12px 0px 0px #1F1F1F" }}
                                    >
                                        <div className='inline-flex items-center justify-center border-2 border-black/30 rounded-2xl'>
                                            <img
                                                src={compition.img} // Reference directly from public/
                                                alt="Compition Banner"

                                                width={300} // Set an appropriate width
                                                height={300} // Set an appropriate height
                                                priority // Optimizes for faster loading
                                            />
                                        </div>
                                        <div className='flex flex-col gap-3 justify-center max-w-[400px] p-4'>
                                            <div className='inline-flex flex-col items-start justify-center gap-1'>
                                                <h1 className='heading  text-[#FF6200] uppercase  text-3xl '>{compition.header}</h1>


                                                <p className='para md:text-sm text-xs text-justify text-[#1F1F1F]'>{compition.desc}</p>
                                            </div>
                                            <div>
                                                <h1 className='heading  text-[#FF6200] text-2xl uppercase'>skills</h1>
                                                <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                                                    {
                                                        compition.skills.map((skill, index) => (
                                                            <div className='inline-flex items-center justify-center px-2 gap-1 p-1 bg-[#FF6200]/10 text-[#FF6200] rounded-lg' key={index}>
                                                                <div className='inline-flex items-center justify-between mt-[1px]'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                        <path opacity="0.4" d="M8.32188 14.8996C11.8565 14.8996 14.7219 12.0342 14.7219 8.49961C14.7219 4.96499 11.8565 2.09961 8.32188 2.09961C4.78725 2.09961 1.92188 4.96499 1.92188 8.49961C1.92188 12.0342 4.78725 14.8996 8.32188 14.8996Z" fill="#FF6200" />
                                                                        <path d="M10.8813 8.01996H8.80125V5.93996C8.80125 5.67756 8.58365 5.45996 8.32125 5.45996C8.05885 5.45996 7.84125 5.67756 7.84125 5.93996V8.01996H5.76125C5.49885 8.01996 5.28125 8.23756 5.28125 8.49996C5.28125 8.76236 5.49885 8.97996 5.76125 8.97996H7.84125V11.06C7.84125 11.3224 8.05885 11.54 8.32125 11.54C8.58365 11.54 8.80125 11.3224 8.80125 11.06V8.97996H10.8813C11.1437 8.97996 11.3613 8.76236 11.3613 8.49996C11.3613 8.23756 11.1437 8.01996 10.8813 8.01996Z" fill="#FF6200" />
                                                                    </svg>
                                                                </div>
                                                                <h5 className='text-xs para'>{skill}</h5>
                                                            </div>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center w-1/3 '>
                                        <div className='md:h-24 md:w-24 h-18 w-18  bg-[#FFEFD4] rounded-2xl md:text-6xl text-4xl text-[#FF6200] flex items-center justify-center'>
                                            <h1 className="heading" >{index + 1}.</h1>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            {/* roadmap */}
            <div className='flex flex-col items-center justify-center gap-6 my-24 md:p-12'>
                <Sectionheading tag='Roadmap' heading='Learning  & Winning' desc='A guided path that takes students from mastering new skills to showcasing their talent in competitions, workshops, and real-world challenges.' isRight={false} />
                <div className='inline-flex flex-col items-center justify-center w-full p-2 md:flex-row '>
                    <img
                        src="/roadmap_img.svg" // Reference directly from public/
                        alt="Compition Banner"
                        width={1000} // Set an appropriate width
                        height={300} // Set an appropriate height
                        priority // Optimizes for faster loading
                    />
                </div>
            </div>


            {/* Statistics */}
            <div className='flex flex-col items-center justify-center w-full md:gap-12  bg-[#FF7C2B] md:p-12 p-2 py-8 '>
                <Sectionheading tag='Statistics' heading='Learning  & Winning' desc='A guided path that takes students from mastering new skills to showcasing their talent in competitions, workshops, and real-world challenges.' bg="orange" />
                <div className='flex flex-col items-center justify-between w-full gap-12 px-24 md:p-12 md:flex-row md:gap-0'>
                    <div className="inline-flex flex-col ">
                        {/* Image with hover effects */}
                        <div className="relative p-6 group">
                            <img
                                className="rounded-[32px] transition-all duration-300 ease-out group-hover:shadow-[12px_16px_0px_0px_#000] group-hover:-translate-x-2 group-hover:-translate-y-2"
                                src="/statistic_student_img.svg"
                                alt="student picture"
                                width={400}
                                height={300}
                                priority
                            />
                        </div>

                        {/* Text Section */}
                        <div className="relative inline-flex items-center justify-center">
                            <h1 className="heading md:text-[148px] text-[132px] uppercase text-white/20">Students</h1>
                            <h1 className="heading absolute text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-[80px] text-[72px] left-1/2 top-1/2 text-nowrap">
                                10,000+ Students
                            </h1>
                        </div>
                    </div>


                    <div className="inline-flex flex-col md:flex-col-reverse ">
                        {/* Image with hover effects */}
                        <div className="relative group">
                            <img
                                className="rounded-[32px] transition-all duration-300 ease-out  group-hover:shadow-[12px_16px_0px_0px_#000] group-hover:-translate-x-2 group-hover:-translate-y-2"
                                src="/statistic_shool_img.svg"
                                alt="school picture"
                                width={400}
                                height={300}
                                priority
                            />
                        </div>

                        {/* Text Section */}
                        <div className="relative inline-flex items-center justify-center">
                            <h1 className="heading text-[148px] uppercase text-white/20">schools</h1>
                            <h1 className="heading absolute text-white uppercase -translate-x-1/2 -translate-y-1/2 text-[80px] left-1/2 top-1/2 text-nowrap">
                                100+ schools
                            </h1>
                        </div>
                    </div>

                </div>
            </div>

            {/* collaboration */}
            <div className='flex flex-col w-full gap-2 p-2 my-24 md:my-32 md:gap-16 md:p-20'>
                <Sectionheading tag='Collaboration' heading='Sheshgayan Along with' desc='A network of forward-thinking schools leveraging SheshGyan’s expertise to empower students with future-ready skills.' isRight={false} />
                {/* Smooth Infinite Loop Scrolling */}
                <div className="w-full py-4 overflow-hidden border-4 rounded-2xl"
                    style={{
                        border: "4px dashed rgba(255, 98, 0, 0.50)"
                    }}>
                    <div className="relative flex whitespace-nowrap">
                        <div className="flex gap-8 animate-scroll">
                            {[...images, ...images].map((src, index) => (
                                <img key={index} src={src} alt={`Collab ${index + 1}`} width={100} height={100} className="object-contain w-24 size-16 md:h-24" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* theme */}
            <div className='flex flex-col items-center justify-between p-2 md:p-12'>
                <Sectionheading tag='Themes' heading='Hands-On Learning' desc='At SheshGyan, we provide interactive and engaging programs that help students build real-world skills in AI, IoT, and programming. Our structured learning challenges encourage creativity, problem-solving, and hands-on application of technology.' />

                <div className={`flex flex-col items-center justify-between w-full gap-12 md:p-20 p-8`}>
                    {
                        themes.map((theme, index) => (
                            <div key={index} className={`flex md:flex-row flex-col gap-4 items-center justify-between w-full group ${index % 2 != 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div>
                                    <img
                                        className={`rounded-[38px] delay-0 transition-all duration-300 ease-out w-full  ${index % 2 == 0 ? 'group-hover:shadow-[12px_10px_0px_0px_#FF6200] group-hover:-translate-x-2 group-hover:-translate-y-2' : 'group-hover:shadow-[-12px_10px_0px_0px_#FF6200] group-hover:-translate-x-2 hover:-translate-y-2'}`}
                                        src={theme.img}
                                        alt={theme.heading}
                                        width={400}
                                        height={300}
                                        priority
                                    />
                                </div>
                                <div className='inline-flex flex-col items-start justify-start max-w-[500px]'>
                                    <div className='flex items-stretch justify-start gap-2 text-nowrap'>
                                        <div className='md:h-24 w-24 size-16  bg-[#FFEFD4] md:rounded-2xl rounded-xl text-3xl md:text-6xl text-[#FF6200] flex items-center justify-center'>
                                            <h1 className="heading" >{index + 1}.</h1>
                                        </div>
                                        <div className='inline-flex flex-col items-start justify-between gap-1'>
                                            <div className='md:px-4 px-2 md:py-1.5 py-0.5 inline-flex items-center justify-center border-[#FF6200] md:rounded-lg rounded-sm border-[1.5px]'>
                                                <h5 className='para md:text-sm text-xs uppercase text-[#FF6200]'>{theme.for}</h5>
                                            </div>
                                            <h1 className='heading md:text-5xl text-4xl text-[#FF6200] uppercase'>{theme.heading}</h1>
                                        </div>
                                    </div>
                                    <div className='md:p-6 p-2 md:text-base text-sm text-[#1F1F1F] text-justify'>
                                        <p>{theme.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Benifits */}
            <div className = 'bg-[#FFDDA3] z-0 relative  md:rounded-[40px] rounded-[24px] md:p-10  pb-14 md:m-6 m-2 flex flex-col md:gap-12 gap-6 my-12 '>
                <Sectionheading tag='Benefits' heading='Why Participate' desc='Competitions fuel creativity, build confidence, and open doors to new opportunities. Step up, challenge yourself, and shine!' />
                <div className='inline-flex flex-wrap items-center justify-center gap-6 md:gap-12'>
                    {
                        benifits.map((benifit, index) => (
                            <div
                                key={index} className='relative inline-flex items-center justify-center'>
                                <img
                                    style={{
                                        boxShadow: "6.912px 6.912px 0px 0px #FF6200"
                                    }}
                                    className={`md:rounded-[28px] rounded-[24px] delay-0 transition-all duration-300 ease-out md:size-72 size-40  group-hover:shadow-[12px_12px_0px_0px_#FF6200] group-hover:-translate-x-2 group-hover:-translate-y-2 }`}
                                    src={benifit.img}
                                    alt={benifit.img}
                                    width={240}
                                    height={240}
                                    priority />
                                <h1
                                    className='heading absolute z-20 md:text-3xl text-xl uppercase -translate-x-1/2 bottom-4 left-1/2 text-nowrap text-[#FF6200]'>{benifit.heading}</h1>
                                <div
                                    style={{
                                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) -0.87%, rgba(0, 0, 0, 0.2) 20.81%, rgba(0, 0, 0, 0.3) 59.08%, #000 100.55%)"
                                    }}
                                    className='absolute inset-0 bottom-0 left-0 rounded-3xl'
                                >
                                    {/* gradiant box */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* gallary */}
            <div className='flex flex-col items-center justify-center w-full md:gap-12 gap-8 bg-[#FF7C2B] md:p-12 py-4'>
            <Sectionheading tag='Gallery' heading='Hall of Frame' desc='A showcase of innovation, dedication, and achievement! Explore the incredible projects and success stories from our past competitions, highlighting the brightest young minds who have pushed boundaries and made an impact.' bg="orange" />
                {/* Smooth Infinite Loop Scrolling */}
                <div className="w-full py-4 overflow-hidden border-4 rounded-2xl"
                    style={{border: "4px dashed rgba(255, 255, 255, 0.70)"}}>
                    <div className="relative flex whitespace-nowrap">
                        <div className="flex gap-6 md:gap-8 animate-scroll">
                            {[...gallary, ...gallary].map((src, index) => (
                                <img key={index} src={src} alt={`Collab ${index + 1}`} width={360} height={200} className="object-contain w-52 md:w-80" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* rules */}
            <div className='flex flex-col items-center justify-center gap-6 p-2 my-20 md:gap-12 md:p-20'>
            <Sectionheading tag='Rule' heading='guideline' desc='A showcase of innovation, dedication, and achievement! Explore the incredible projects and success stories from our past competitions, highlighting the brightest young minds who have pushed boundaries and made an impact.' isRight={false}  />
            <div className='flex md:flex-row md:justify-between  justify-center sm:w-4/5 w-full   flex-col flex-wrap md:flex-nowrap md:p-12 p-4 md:py-20 py-10 rounded-[40px] h-1/2 '
            style={{
                boxShadow: "2px 1px 24px 0px rgba(41, 41, 41, 0.32)"
            }}
            >
<div className='inline-flex flex-col items-start justify-between gap-2 '>
    {
        rules
            .slice(0, 5)
            .map((rule, index) => (
                <div key={index} className='inline-flex items-start justify-start gap-2'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='md:size-[60px] size-[40px]' viewBox="0 0 72 72" fill="none">
                            <path d="M27 66H45C60 66 66 60 66 45V27C66 12 60 6 45 6H27C12 6 6 12 6 27V45C6 60 12 66 27 66Z" stroke="#FF6200" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path opacity="0.34" d="M23.25 35.9998L31.74 44.4898L48.75 27.5098" stroke="#FF6200" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className='inline-flex flex-col items-start justify-center mt-2 max-w-[400px] gap-1'>
                        <h1 className='heading md:text-4xl text-2xl text-[#FF6200] uppercase'>{rule.heading}</h1>
                        <p className='para text-[#1F1F1F]/80 text-justify text-sm'>{rule.desc}</p>
                    </div>
                </div>
            ))
    }
</div>
<div className='inline-flex flex-col items-start justify-between gap-2'>
    {
        rules
            .slice(5, 10)
            .map((rule, index) => (
                <div key={index + 4} className='inline-flex items-start justify-start gap-2'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='md:size-[60px] size-[40px]' viewBox="0 0 72 72" fill="none">
                            <path d="M27 66H45C60 66 66 60 66 45V27C66 12 60 6 45 6H27C12 6 6 12 6 27V45C6 60 12 66 27 66Z" stroke="#FF6200" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path opacity="0.34" d="M23.25 35.9998L31.74 44.4898L48.75 27.5098" stroke="#FF6200" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className='inline-flex flex-col items-start justify-center mt-2 max-w-[400px] gap-1'>
                        <h1 className='heading md:text-4xl text-2xl text-[#FF6200] uppercase'>{rule.heading}</h1>
                        <p className='para text-[#1F1F1F]/80 text-justify text-sm' dangerouslySetInnerHTML={{ __html: rule.desc }}></p>
                    </div>
                </div>
            ))
    }
</div>


            </div>
            </div>

            {/* QnA */}
            <QnA QnAs={QnAs} />

            {/* Request Form */}
            <Form/>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Compition
