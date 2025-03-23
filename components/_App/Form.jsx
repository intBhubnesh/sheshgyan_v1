import React from 'react'
import Image from 'next/image'

const Form = () => {
  return (
    <>
                    {/* Request Form */}
                    <div>
                <div className='bg-[#FF7C2A] m-4 p-8 flex rounded-3xl flex-col md:flex-row'>
                    <div className='size-[280px] md:size-[600px] '>
                        <Image
                            src="/form_img.svg" // Reference directly from public/
                            alt="kid_img"

                            width={600} // Set an appropriate width
                            height={400} // Set an appropriate height
                            priority // Optimizes for faster loading
                        />
                        <div className='flex flex-col gap-4 p-8'>
                            <h1 className='text-3xl text-white uppercase md:text-5xl '>Let’s Connect & Build the Future!</h1>
                            <p className='text-xs tracking-wider capitalize text-white/90 md:text-sm'>Have questions or want to bring future-ready learning to your school? Fill out the form, and our team will reach out to you shortly!</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 px-8 py-10 bg-white rounded-3xl shadow-[10px_10px_0px_0px_#303030] '>
                        <h1 className='uppercase text-[#FF6200] md:text-7xl text-4xl drop-shadow-[2px_2px_0px_#303030]'>request a demo</h1>
                        <form action="" className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <h3 for="name" className='md:text-base text-sm font-medium font-[inter]'>Full Name</h3>
                                <div className='p-2.5   w-full bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 border-[#EBEBEB] inline-flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M17 21.5H7C3 21.5 2 20.5 2 16.5V8.5C2 4.5 3 3.5 7 3.5H17C21 3.5 22 4.5 22 8.5V16.5C22 20.5 21 21.5 17 21.5Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M14 8.5H19" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M15 12.5H19" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M17 16.5H19" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M8.49945 11.7899C9.49909 11.7899 10.3095 10.9796 10.3095 9.97992C10.3095 8.98029 9.49909 8.16992 8.49945 8.16992C7.49982 8.16992 6.68945 8.98029 6.68945 9.97992C6.68945 10.9796 7.49982 11.7899 8.49945 11.7899Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M12 16.8298C11.86 15.3798 10.71 14.2398 9.26 14.1098C8.76 14.0598 8.25 14.0598 7.74 14.1098C6.29 14.2498 5.14 15.3798 5 16.8298" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <input type="text" name="name" id="name" placeholder='Bhubnesh Maharana' className='text-sm' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 for="schoolName" className='md:text-base text-sm font-medium font-[inter]'>School Name</h3>
                                <div className='p-2.5 w-full  bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 border-[#EBEBEB] inline-flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M14 8V13" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M18 8V13" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M6 13V17" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                        <path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <input type="text" name="schoolName" id="schoolName" placeholder='Kendriya Vidyalaya' className='text-sm' />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row md:w-full">
                                {/* User Dropdown */}
                                <div className="flex flex-col w-full gap-2 md:w-1/2">
                                    <label htmlFor="user" className="md:text-base text-sm  font-medium font-[inter]">
                                        User
                                    </label>
                                    <div className="p-2.5 bg-[#F9FBFC]  border-[1.2px] text-sm rounded-lg gap-3 border-[#EBEBEB] inline-flex items-center w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M18.1394 21.6207C17.2594 21.8807 16.2194 22.0007 14.9994 22.0007H8.99937C7.77937 22.0007 6.73937 21.8807 5.85938 21.6207C6.07937 19.0207 8.74937 16.9707 11.9994 16.9707C15.2494 16.9707 17.9194 19.0207 18.1394 21.6207Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <select name="user" id="user" className="w-full text-sm bg-[#F9FBFC] border-none  outline-none text-[#171717] appearance-none">
                                            <option value="Student">Student</option>
                                            <option value="School">School</option>
                                        </select>
                                    </div>
                                </div>

                                {/* School Name Dropdown */}
                                <div className="flex flex-col w-full gap-2 md:w-1/2">
                                    <label htmlFor="schoolName" className="md:text-base text-sm  font-medium font-[inter]">
                                        School Name
                                    </label>
                                    <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 text-sm border-[#EBEBEB] inline-flex items-center w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M4 18V7C4 3 5 2 9 2H16C20 2 21 3 21 7V17C21 17.14 21 17.28 20.99 17.42" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.85 15H21V18.5C21 20.43 19.43 22 17.5 22H7.5C5.57 22 4 20.43 4 18.5V17.85C4 16.28 5.28 15 6.85 15Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.5 7H16.5" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.5 10.5H13.5" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <select name="schoolName" id="schoolName" className="w-full text-sm bg-[#F9FBFC] border-none outline-none text-[#171717] appearance-none">
                                            {[...Array(9)].map((_, index) => (
                                                <option key={index + 1} value={index + 1} >
                                                    Class {index + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row md:w-full">
                                {/* User PhoneNumber */}
                                <div className="flex flex-col w-full gap-2 md:w-1/2">
                                    <label htmlFor="phoneNumber" className="md:text-base text-sm  font-medium font-[inter]">
                                        Phone Number
                                    </label>
                                    <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 border-[#EBEBEB] inline-flex items-center w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" />
                                        </svg>

                                        <input type="tel" name="phoneNumber" id="phoneNumber" placeholder='+91' className='text-sm' />
                                    </div>
                                </div>

                                {/* Email Dropdown */}
                                <div className="flex flex-col w-full gap-2 md:w-1/2">
                                    <label htmlFor="schoolName" className="md:text-base text-sm  font-medium font-[inter]">
                                        Email
                                    </label>
                                    <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 border-[#EBEBEB] inline-flex items-center w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M2.5 8.5C2.5 5 4.5 3.5 7.5 3.5H17.5C20.5 3.5 22.5 5 22.5 8.5V15.5C22.5 19 20.5 20.5 17.5 20.5H7.5" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                            <path d="M17.5 9L14.37 11.5C13.34 12.32 11.65 12.32 10.62 11.5L7.5 9" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                            <path d="M2.5 16.5H8.5" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                            <path d="M2.5 12.5H5.5" stroke="#171717" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <input type="email" name="mail" id="mail" placeholder='@gmail.com' className='text-sm' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row md:w-full ">
                                {/* City Dropdown */}
                                <div className="flex flex-col w-full gap-2 md:w-1/2">
                                    <label htmlFor="city" className="md:text-base text-sm  font-medium font-[inter]">
                                        City
                                    </label>
                                    <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] text-sm rounded-lg gap-3 border-[#EBEBEB] inline-flex items-center w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M22 8.99953V14.9995C22 17.4995 21.5 19.2495 20.38 20.3795L14 13.9995L21.73 6.26953C21.91 7.05953 22 7.95953 22 8.99953Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                            <path d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                            <path d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                            <path d="M6.23929 7.9807C6.91929 5.0507 11.3193 5.0507 11.9993 7.9807C12.3893 9.7007 11.3093 11.1607 10.3593 12.0607C9.66928 12.7207 8.5793 12.7207 7.8793 12.0607C6.9293 11.1607 5.83929 9.7007 6.23929 7.9807Z" stroke="#171717" strokeWidth="1.5" />
                                            <path d="M9.09412 8.69922H9.1031" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <input type="text" name="city" id="city" placeholder='city' className='text-sm' />
                                    </div>
                                </div>

                                {/* State Dropdown */}
                                <div className="flex flex-col w-full gap-2 md:w-1/2">
                                    <label htmlFor="schoolName" className="md:text-base text-sm font-medium font-[inter]">
                                        School Name
                                    </label>
                                    <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 text-sm border-[#EBEBEB] inline-flex items-center w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M12.5009 13.4295C14.224 13.4295 15.6209 12.0326 15.6209 10.3095C15.6209 8.58633 14.224 7.18945 12.5009 7.18945C10.7777 7.18945 9.38086 8.58633 9.38086 10.3095C9.38086 12.0326 10.7777 13.4295 12.5009 13.4295Z" stroke="#171717" strokeWidth="1.5" />
                                            <path d="M4.11971 8.49C6.08971 -0.169998 18.9197 -0.159997 20.8797 8.5C22.0297 13.58 18.8697 17.88 16.0997 20.54C14.0897 22.48 10.9097 22.48 8.88971 20.54C6.12971 17.88 2.96971 13.57 4.11971 8.49Z" stroke="#171717" strokeWidth="1.5" />
                                        </svg>

                                        <input type="text" name="state" id="state" placeholder='state' className='text-sm' />

                                    </div>
                                </div>
                            </div>

                        </form>
                        <button className='px-6 mt-2 p-4 inline-flex items-center justify-center text-xl uppercase tracking-wide text-white rounded-full bg-[#FF6200]'> <h1 className="heading" >Request Demo</h1> </button>

                    </div>
                </div>

            </div>

    </>
  )
}

export default Form
