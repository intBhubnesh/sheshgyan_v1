import Image from 'next/image'
import Sectionheading from '../components/_App/Sectionheading'
import images from './data/collab_images';
import Form from '../components/_App/Form';
import QnA from '../components/_App/QnA'
import subjects from "./data/subjects"
import team_members from './data/team'
import QnAs from './data/questions'
import testimonials from './data/testimonials'
import Testimonial from '../components/_App/Testimonial'
import Footer from '@/components/_App/Foot';
import TailwindWrapper from '@/components/_App/TailwindWrapper';
import Navbar from '@/components/_App/Nav';
import Link from 'next/link';
export default function Home() {



    const journy = [{
        icon: "/search-normal.svg",
        heading: "Exploration & Discovery",
        desc: "Students dive into the world of AI, Robotics, IoT, and more, sparking curiosity and a passion for technology through interactive sessions and real-world examples."
    }, {
        icon: "/book.svg",
        heading: "Immersive Learning Experience",
        desc: "With hands-on projects and expert-led mentorship, students develop problem-solving skills, collaborating with peers to apply concepts in practical ways."
    }, {
        icon: "/cup.svg",
        heading: "Competitions & Workshops",
        desc: "Students put their skills to the test in hackathons, competitions, and industry-led workshops, gaining exposure, confidence, and real-world experience."
    }, {
        icon: "/award.svg",
        heading: "Achievement & Recognition",
        desc: "Students dive into the world of AI, Robotics, IoT, and more, sparking curiosity and a passion for technology through interactive sessions and real-world examples."
    },]





    return (
        <TailwindWrapper>

        <div className='w-full pt-40 overflow-hidden lg:pt-56'>

        <Navbar />
        
            {/* Hero */}
            <div className="w-full relative h-auto lg:h-96 flex flex-col lg:flex-row items-center lg:items-start justify-between mb-32 lg:px-8 xl:px-20">
    {/* Left Content: Heading, Paragraph, Buttons */}
    <div className="flex flex-col max-w-[560px] w-full ">
        <h1 className="heading text-[44px] sm:text-6xl font-semibold leading-16 sm:leading-[84px] sm:tracking-[1.44px] text-[#2F303B] uppercase mb-3.5 text-left ">
            Shaping Young <span className="text-[#FF6200]">Minds</span> for <br /> 
            a <span className="text-[#FF6200]">Tech-Driven</span> Future
        </h1>
        <p className="para text-[#1F1F1F]/60 lg:max-w-[460px] xl:max-w-[560px] text-justify font-manrope text-base font-medium tracking-[0.216px] mb-9">
            Technology is more than just learning—it's about building, innovating, and leading. We equip students with the skills and confidence to navigate the digital world, turning curiosity into real-world impact.
        </p>
        <div className="inline-flex gap-6 justify-center lg:justify-start">
            <button className="bg-[#FFDDA3] rounded-[55px] flex justify-center items-center text-[#FF6200] font-[TuskerGrotesk] text-base font-medium uppercase h-14 w-40">
                <h2 className="sub-heading">
                    <a href="/summer-camp#View_Courses">View Courses</a>
                </h2>
            </button>
            <button className="bg-[#FF6200] text-[#FFFFFF] w-40 h-14 font-[TuskerGrotesk] text-base font-medium uppercase rounded-[55px] flex justify-center items-center z-20">
                <h2 className="sub-heading">
                    <a href="#Request_Demo">Request Demo</a>
                </h2>
            </button>
        </div>
    </div>

    {/* Right Content: Image */}
    <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-10 lg:-mt-32">
        <img
            className=" w-[300px] sm:w-[400px] md:w-[520px] lg:w-[560px]"
            src="/HeroCHILD.svg"
            alt="Child image"
            width={670} // Adjust size dynamically
            height={860}
            priority
        />
    </div>
</div>


            {/* Benefits */}
            <div className=' xl:p-24 sm:py-18 bg-[#FFDDA3] m-2 sm:m-5 flex flex-col gap-6 sm:gap-12 rounded-[52px]'>

                <Sectionheading tag='Benefits' heading='Our Impact' desc='We’re transforming education by equipping students with future-ready skills, empowering educators with the right tools, and helping schools stay ahead in the digital era.' />
                <div className='flex flex-col items-center justify-center gap-4 md:gap-10 md:flex-row xl:gap-32'>
                    <img className='w-56 sm:w-60 md:w-72 lg:w-[400px]  '
                        src="/iot_bot.svg" // Reference directly from public/
                        alt="iot bot image"
                        priority // Optimizes for faster loading
                    />
                    <div className='inline-flex gap-4 md:gap-6 lg:gap-8 flex-col items-center justify-center sm:max-w-[540px]'>
                        <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#FFEFD4] rounded-2xl text-3xl sm:text-6xl text-[#FF6200] flex items-center justify-center'>
                            <h1 className="heading">1.</h1>
                        </div>
                        <div className='inline-flex flex-col items-center justify-center gap-2 sm:items-center lg:items-start sm:gap-8 '>
                            <h1 className='heading text-4xl sm:text-7xl  uppercase text-[#FF6200] '>Future-Ready Learning</h1>
                            <p className='para text-sm sm:text-lg capitalize  text-justify text-[#1F1F1F] p-2 sm:p-0'>Empower students with AI, IoT, Robotics, and Programming through hands-on, industry-aligned courses. Our practical approach ensures they grasp real-world applications of modern technology.</p>
                        </div>
                    </div>


                </div>
                <div className='flex flex-col-reverse items-center justify-center gap-4 md:gap-10 md:flex-row xl:gap-32'>
                    <div className='inline-flex gap-4 sm:gap-8 flex-col items-center justify-center sm:max-w-[540px]'>
                        <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#FFEFD4] rounded-2xl text-3xl sm:text-6xl text-[#FF6200] flex items-center justify-center'>
                            <h1 className="heading" >2.</h1>
                        </div>
                        <div className='inline-flex gap-4 md:gap-6 lg:gap-8 flex-col items-center justify-center sm:max-w-[540px]'>
                            <h1 className='heading text-4xl sm:text-7xl uppercase text-[#FF6200] '>Expert-Led Training</h1>
                            <p className='para text-sm sm:text-lg capitalize  text-justify text-[#1F1F1F] p-2 sm:p-0'>Certified trainers deliver interactive sessions, workshops, and teacher training programs. We help educators stay ahead with cutting-edge knowledge, ensuring a seamless tech-learning experience.</p>
                        </div>
                    </div>
                    <img className='w-60 sm:w-64 md:w-80 lg:w-[540px]'
                        src="/ar_vr_bot.svg" // Reference directly from public/
                        alt="ar-vr bot image"
                        width={480} // Set an appropriate width
                        height={400} // Set an appropriate height
                        priority // Optimizes for faster loading
                    />


                </div>
                <div className='flex flex-col items-center justify-center gap-4 md:gap-10 md:flex-row pb-16 xl:gap-32'>
                    <img className='w-56 sm:w-60 md:w-72 lg:w-[380px]'
                        src="/ai_ml_bot.svg" // Reference directly from public/
                        alt="ai-ml bot image"
                        width={420} // Set an appropriate width
                        height={400} // Set an appropriate height
                        priority // Optimizes for faster loading
                    />
                    <div className='inline-flex gap-4 md:gap-6 lg:gap-8 flex-col items-center justify-center sm:max-w-[540px]'>
                        <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#FFEFD4] rounded-2xl text-3xl sm:text-6xl text-[#FF6200] flex items-center justify-center'>
                            <h1 className="heading" >3.</h1>
                        </div>
                        <div className='inline-flex flex-col items-center justify-center gap-2 sm:items-center lg:items-start sm:gap-8'>
                            <h1 className='heading text-4xl sm:text-7xl uppercase text-[#FF6200] '>Shaping Smarter Minds</h1>
                            <p className='para text-sm sm:text-lg capitalize  text-justify text-[#1F1F1F] p-2 sm:p-0'>Foster innovation and critical thinking with future-focused education. Our programs prepare students to excel in a tech-driven world, equipping them with the skills to thrive.</p>
                        </div>
                    </div>


                </div>

            </div>


            {/* subject */}
            <div className='flex flex-col w-full gap-4 p-2 sm:gap-10 sm:p-24'>
            <div className='inline-flex flex-col w-full gap-6 px-6 py-4 sm:p-0'>
                    <div className='flex items-center justify-end'>
                        <h5 className='para  text-xs uppercase bg-[#FFDDA3] py-1.5 px-4 text-[#FF6200] inline-flex rounded-lg'>Subject</h5>
                    </div>
                    <div className='flex flex-col items-end justify-between w-full gap-2 md:flex-row sm:items-start'>
                        <h1 className='heading uppercase text-4xl sm:text-7xl text-[#FF6200]'>Fields of Study</h1>
                        <p className='para md:text-base text-justify text-xs text-[#1F1F1F]/80 max-w-[540px]'>Discover exciting subjects like AI, Robotics, IoT, and Programming, designed to equip students with real-world tech skills for the future.</p>
                    </div>
                    </div>
                <div className='flex flex-wrap items-center justify-center gap-6 sm:gap-12 p-6 md:mt-12 bg-[#FFDDA3] py-12 rounded-4xl'>
                    {
                        subjects.map((subject, index) => (
                            <div
                                key={index}
                                className='bg-[#FFDDA3] border-2 border-[#1f1f1f]/10 border-dashed inline-flex flex-col p-2 rounded-2xl gap-4 hover:border-none hover:scale-105 hover:shadow-[10px_10px_0px_0px_#303030] transition-transform duration-300 will-change-transform hover:bg-[#FF6200] hover:text-white'
                            >
                                <div className='w-28 sm:w-60'>
                                <img
                                    src={subject.img}
                                    alt="subject image"
                                    width={240}
                                    height={400}
                                    priority
                                />
                                </div>
                                <h1 className='inline-flex items-center justify-center text-2xl uppercase heading sm:text-4xl'>{subject.name}</h1>
                            </div>

                        ))
                    }
                </div>
            </div>

            {/* About Us */}
            <div className='flex flex-col w-full gap-2 p-2 mt-4 sm:p-24 bg-[#F3F2F7] rounded-4xl'>
                <Sectionheading tag='About US' heading='Know About US' desc='SheshGyan is on a mission to transform education by integrating hands-on tech learning into schools. Based in Bengaluru, we partner with educators to bring expert-led training in AI, Robotics, IoT, and more—ensuring students gain real-world skills for the future.' />

                <div className='flex flex-col items-center justify-between sm:flex-row '>

                    <div className='w-40 sm:w-[300px]'>
                    <img
                        src="/AboutUsROBOT.svg" // Reference directly from public/
                        alt="about us image"
                        width={300} // Set an appropriate width
                        height={400} // Set an appropriate height
                        priority // Optimizes for faster loading
                    />
                    </div>
                    <div className='flex flex-col w-2/3 gap-8'>
                        <div style={{"borderRadius": "2rem"}} className=' inline-flex items-center justify-center p-10 w-full sm:w-[80%]  bg-white relative rounded-4xl shadow-[8px_8px_0px_0px_#FF6200,0px_2px_23px_0px_#FFE0CD] ml-12'>
                            <div className='absolute top-0 -left-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 100 101" fill="none">
                                    <path d="M25.7788 79.0885C24.0148 79.0885 19.944 76.3068 13.5664 70.7434C7.18879 65.18 4 61.3806 4 59.3452C4 57.1741 9.90266 50.5251 21.708 39.3983C33.5133 28.2714 40.0944 22.708 41.4513 22.708C41.8584 22.708 42.7404 23.3865 44.0974 24.7434C45.59 26.1003 46.3363 27.1859 46.3363 28C46.3363 28.6785 43.1475 35.0561 36.7699 47.1328C44.233 52.9676 47.9646 56.9705 47.9646 59.1416C47.9646 61.3127 44.708 65.18 38.1947 70.7434C31.6814 76.3068 27.5428 79.0885 25.7788 79.0885ZM73.8142 79.0885C72.0501 79.0885 67.9794 76.3068 61.6018 70.7434C55.2242 65.18 52.0354 61.3806 52.0354 59.3452C52.0354 57.1741 57.9381 50.5251 69.7434 39.3983C81.5487 28.2714 88.1298 22.708 89.4867 22.708C89.8938 22.708 90.7758 23.3865 92.1328 24.7434C93.6254 26.1003 94.3717 27.1859 94.3717 28C94.3717 28.6785 91.1829 35.0561 84.8053 47.1328C92.2684 52.9676 96 56.9705 96 59.1416C96 61.3127 92.7434 65.18 86.2301 70.7434C79.7168 76.3068 75.5782 79.0885 73.8142 79.0885Z" fill="black" />
                                </svg>
                            </div >
                            <h1 className='heading text-[#7F7F7F] text-xl sm:text-3xl uppercase  max-w-[420px]'>Empowering the <span className='text-[#FF6200]'>next generation</span> with practical
                                <span className='text-[#FF6200]'> tech skills</span> to thrive in a digital-first world.</h1>
                            <div className='absolute right-8 bottom-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 51" fill="none">
                                    <path d="M37.1106 11.5168C37.9926 11.5168 40.028 12.9076 43.2168 15.6893C46.4056 18.471 48 20.3707 48 21.3884C48 22.474 45.0487 25.7985 39.146 31.3619C33.2434 36.9253 29.9528 39.707 29.2743 39.707C29.0708 39.707 28.6298 39.3678 27.9513 38.6893C27.205 38.0109 26.8319 37.4681 26.8319 37.061C26.8319 36.7218 28.4263 33.533 31.615 27.4946C27.8835 24.5772 26.0177 22.5758 26.0177 21.4902C26.0177 20.4047 27.646 18.471 30.9027 15.6893C34.1593 12.9076 36.2286 11.5168 37.1106 11.5168ZM13.0929 11.5168C13.9749 11.5168 16.0103 12.9076 19.1991 15.6893C22.3879 18.471 23.9823 20.3707 23.9823 21.3884C23.9823 22.474 21.031 25.7985 15.1283 31.3619C9.22566 36.9253 5.9351 39.707 5.25664 39.707C5.0531 39.707 4.61209 39.3678 3.93362 38.6893C3.18731 38.0109 2.81416 37.4681 2.81416 37.061C2.81416 36.7218 4.40855 33.533 7.59734 27.4946C3.86578 24.5772 2 22.5758 2 21.4902C2 20.4047 3.62832 18.471 6.88495 15.6893C10.1416 12.9076 12.2109 11.5168 13.0929 11.5168Z" fill="#D9D9D9" />
                                </svg>
                            </div>

                        </div>
                        <div style={{"borderRadius": "2rem"}} className='inline-flex items-center w-full sm:w-[80%] justify-center p-8 sm:p-10 pl-16 bg-white relative rounded-4xl  shadow-[8px_8px_0px_0px_#FF6200,0px_2px_23px_0px_#FFE0CD] sm:mr-12'>
                            <div className='absolute top-0 -left-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 100 101" fill="none">
                                    <path d="M25.7788 79.0885C24.0148 79.0885 19.944 76.3068 13.5664 70.7434C7.18879 65.18 4 61.3806 4 59.3452C4 57.1741 9.90266 50.5251 21.708 39.3983C33.5133 28.2714 40.0944 22.708 41.4513 22.708C41.8584 22.708 42.7404 23.3865 44.0974 24.7434C45.59 26.1003 46.3363 27.1859 46.3363 28C46.3363 28.6785 43.1475 35.0561 36.7699 47.1328C44.233 52.9676 47.9646 56.9705 47.9646 59.1416C47.9646 61.3127 44.708 65.18 38.1947 70.7434C31.6814 76.3068 27.5428 79.0885 25.7788 79.0885ZM73.8142 79.0885C72.0501 79.0885 67.9794 76.3068 61.6018 70.7434C55.2242 65.18 52.0354 61.3806 52.0354 59.3452C52.0354 57.1741 57.9381 50.5251 69.7434 39.3983C81.5487 28.2714 88.1298 22.708 89.4867 22.708C89.8938 22.708 90.7758 23.3865 92.1328 24.7434C93.6254 26.1003 94.3717 27.1859 94.3717 28C94.3717 28.6785 91.1829 35.0561 84.8053 47.1328C92.2684 52.9676 96 56.9705 96 59.1416C96 61.3127 92.7434 65.18 86.2301 70.7434C79.7168 76.3068 75.5782 79.0885 73.8142 79.0885Z" fill="black" />
                                </svg>
                            </div>
                            <h1  className='heading text-[#7F7F7F] text-xl  sm:text-3xl uppercase max-w-[500px]'><span className='text-[#FF6200]'>Bridging</span> the gap between <span className='text-[#FF6200]'>education</span> and <span className='text-[#FF6200]'>industry</span> by  hands-on <span className='text-[#FF6200]'>technology learning</span> into <span className='text-[#FF6200]'>classrooms</span>.</h1>

                            <div className='absolute right-8 bottom-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 51" fill="none">
                                    <path d="M37.1106 11.5168C37.9926 11.5168 40.028 12.9076 43.2168 15.6893C46.4056 18.471 48 20.3707 48 21.3884C48 22.474 45.0487 25.7985 39.146 31.3619C33.2434 36.9253 29.9528 39.707 29.2743 39.707C29.0708 39.707 28.6298 39.3678 27.9513 38.6893C27.205 38.0109 26.8319 37.4681 26.8319 37.061C26.8319 36.7218 28.4263 33.533 31.615 27.4946C27.8835 24.5772 26.0177 22.5758 26.0177 21.4902C26.0177 20.4047 27.646 18.471 30.9027 15.6893C34.1593 12.9076 36.2286 11.5168 37.1106 11.5168ZM13.0929 11.5168C13.9749 11.5168 16.0103 12.9076 19.1991 15.6893C22.3879 18.471 23.9823 20.3707 23.9823 21.3884C23.9823 22.474 21.031 25.7985 15.1283 31.3619C9.22566 36.9253 5.9351 39.707 5.25664 39.707C5.0531 39.707 4.61209 39.3678 3.93362 38.6893C3.18731 38.0109 2.81416 37.4681 2.81416 37.061C2.81416 36.7218 4.40855 33.533 7.59734 27.4946C3.86578 24.5772 2 22.5758 2 21.4902C2 20.4047 3.62832 18.471 6.88495 15.6893C10.1416 12.9076 12.2109 11.5168 13.0929 11.5168Z" fill="#D9D9D9" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Journey */}
            <div className='flex flex-col w-full gap-4 my-24 sm:gap-10 xl:p-8'>
                <Sectionheading tag='Journey' heading='Student Journey' desc='Discover exciting subjects like AI, Robotics, IoT, and Programming, designed to equip students with real-world tech skills for the future.' isRight={false} />

                <div className='relative flex items-center'>
                    <div className='inline-flex bg-white flex-col items-start justify-center m-4 gap-8 px-4 sm:p-12 py-10 rounded-[24px] shadow-[-16px_16px_0px_0px_#514D4D,3px_0px_23.1px_0px_#5C5C5C33]'>
                        {
                            journy.map((phase, index) => (
                                <div key={index} className='flex items-start justify-between gap-3 sm:gap-4'>
                                    <div className='inline-flex items-center justify-center p-2 bg-[#FF6200]/10 rounded-2xl w-20 sm:w-14 '>
                                        <img 
                                            src={phase.icon} // Reference directly from public/
                                            alt="journey icon"
                                            width={40} // Set an appropriate width
                                            height={40} // Set an appropriate height
                                            priority // Optimizes for faster loading
                                        />
                                    </div>
                                    <div className='inline-flex gap-1 flex-col max-w-[520px]'>
                                        <h1 className='sub-heading text-lg sm:text-2xl lg:text-4xl text-[#505050] uppercase'>{phase.heading}</h1>
                                        <p className='para text-xs sm:text-sm text-[#2E2E2E]/80 text-justify'>{phase.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <img
                            className='absolute right-0 hidden -top-20 -z-10 xl:block'
                            src="/journy_robo.svg" // Reference directly from public/
                            alt="journy robo image"
                            width={460} // Set an appropriate width
                            height={400} // Set an appropriate height
                            priority // Optimizes for faster loading
                        />
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className='m-2 sm:m-10 bg-[#FFDDA3] flex flex-col gap-2 sm:gap-12 rounded-4xl sm:px-12 sm:py-16'>
                <Sectionheading tag='Team' heading='Our Impact' desc='Driven by the mission to bridge the gap between traditional education and future skills, we are committed to empowering students and schools alike.' />

                {
                    team_members.map((team_member, index) => (
                        <div key={index} className={`${index % 2 !== 0 ? "flex-col-reverse sm:flex-row-reverse" : 'flex-col-reverse '} flex-col sm:flex-row flex items-center justify-center w-full gap-[40px] mb-6 sm:mb-0`}>
                            <div className='relative '>
                                <h1 className='heading text-[rgba(255,255,255,0.40)] text-6xl lg:text-[108px] font-semibold sm:leading-[120px] tracking-[2.16px] uppercase'>
                                    shesh-gyan
                                </h1>
                                <p className='para text-[rgba(46,46,46,0.82)] text-center text-base sm:text-[18px] font-medium  tracking-[0.216px] capitalize '>
                                {team_member.designation}
                                </p>
                                <h1 className='heading text-[#505050] text-center text-3xl lg:text-[52px] font-semibold tracking-[1.04px] uppercase absolute text-nowrap left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2'>
                                {team_member.name}
                                </h1>
                            </div>
                            <div className='w-60 sm:max-w-80'>
                            <img
                                src={team_member.img} // Reference directly from public/
                                alt={team_member.name}
                                width={320} // Set an appropriate width
                                height={400} // Set an appropriate height
                                priority // Optimizes for faster loading
                            />
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* collaboration */}
            <div className='flex flex-col w-full gap-8 p-4 my-10 sm:gap-16 sm:p-20 sm:my-20 '>
                <Sectionheading tag='Collaboration' heading='Powered By Sheshgayan' desc='A network of forward-thinking schools leveraging SheshGyan’s expertise to empower students with future-ready skills.' isRight={false} />

                {/* Smooth Infinite Loop Scrolling */}
                <div className="w-full py-4 overflow-hidden border-4 rounded-2xl"
                    style={{
                        border: "4px dashed rgba(255, 98, 0, 0.50)"
                    }}>
                    <div className="relative flex whitespace-nowrap">
                        <div className="flex gap-8 animate-scroll">
                            {[...images, ...images].map((src, index) => (
                                <img key={index} src={src} alt={`Collab ${index + 1}`} width={100} height={100} className="object-contain w-24 h-24" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* testimonials */}
            <Testimonial testimonials={testimonials} />

            {/* QnA */}
            <QnA QnAs={QnAs} />

            {/* Request Form */}
            <Form />

            <Footer />

        </div>
        </TailwindWrapper>



    );
}
