"use client"
import React, { useState } from 'react'
import blog_posts from '../data/blog-posts'
import Image from 'next/image';
import Sectionheading from '../components/Sectionheading';
import { useRouter } from "next/navigation";
import CTA from '../components/CTA'
const BlogPost = () => {
    const active = "size-4 bg-[#FF6200]"
    const allTags = blog_posts.flatMap(post => post.tags); // Collect all tags from posts
    const uniqueTags = [...new Set(allTags)]; // Remove duplicates

    function getLatestPost(posts) {
        if (!posts || posts.length === 0) {
            return null; // Return null if the array is empty or undefined
        }

        // Sort posts by date in descending order (latest first)
        const sortedPosts = posts.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA; // Latest date comes first
        });

        // Return the first post (most recent)
        return sortedPosts[0];
    }
    const latestPost = getLatestPost(blog_posts);
    const router = useRouter()

    const [isActive, setIsActive] = useState([]);
    const [page, setPage] = useState(1)
    const postsPerPage = 3 * 4; // 3 rows × 4 columns = 12 posts per page
    const totalPages = Math.ceil(blog_posts.length / postsPerPage);
    const startIndex = page * postsPerPage;
    const displayedPosts = blog_posts.slice(startIndex, startIndex + postsPerPage);

    // toggle State
    const toggleTag = (index) => {
        setIsActive((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div className='mt-24'>
            {/* Hero */}
            <div className='flex flex-col items-center justify-center w-full gap-10 p-4 md:p-12'>
                <div
                    className='border-[1.5px] w-full group border-[#1F1F1F]/70 bg-white md:rounded-4xl rounded-2xl flex items-center justify-between md:p-4 p-1 relative overflow-hidden md:flex-row flex-col'
                    style={{ boxShadow: "12px 12px 0px 0px #1F1F1F", transition: "box-shadow 0.3s ease" }}
                >
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                            className="rounded-2xl transition-all duration-300 ease-in-out transform origin-center
                       group-hover:scale-105 group-hover:-translate-y-2
                       group-hover:shadow-[16px_16px_0px_0px_#FF6200]"
                            src={latestPost.img}
                            alt="subject image"
                            width={520}
                            height={400}
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className='flex flex-col md:w-[60%] w-full gap-6 p-6'>
                        {/* Date and Tags */}
                        <div className='flex flex-col justify-between w-full gap-2 md:items-center md:flex-row'>
                            <div className='md:text-sm text-xs text-nowrap text-[#171717]/90 inline-flex items-center justify-center md:gap-4 gap-2'>
                                <h6>{latestPost.date}</h6>
                                <div className='rounded-full size-1 bg-[#616161]/50'></div>
                                <h6>{latestPost.readTime}</h6>
                            </div>
                            <div className='inline-flex items-center justify-center gap-4'>
                                {latestPost.tags.map((tag, index) => (
                                    <div key={index} className='p-1.5 px-3 rounded-[5px] items-center justify-center inline-flex
                                                bg-[#FFECE0] text-[#FF6200] uppercase text-xs min-w-[60px]'>
                                        <h5>{tag}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Heading and Description */}
                        <div className='inline-flex flex-col items-start justify-between gap-2'>
                            <h1 className='md:text-5xl text-3xl  uppercase text-[#FF6200]'>{latestPost.heading}</h1>
                            <p className='text-justify text-[#1F1F1F]/80 md:text-sm text-xs'>{latestPost.content[0].desc}</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-full bg-[#FFDDA3] gap-1.5 items-center justify-center  py-1 px-2 inline-flex flex-row'>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className={`${index == 0 ? active : 'size-2.5 bg-[#F9FBFC]'} rounded-full }`}></div>
                    ))}
                </div>
            </div>

            {/* Blogs */}
            <div className='p-2 md:p-12'>
                    <Sectionheading tag='Blogs' heading='Blog-posts' desc='Explore expert articles, industry trends, and success stories in education and technology, helping students, parents, and schools stay ahead in the digital era.' />
                    </div>
            <div className="grid w-full grid-cols-2 gap-2 p-2 md:gap-6 md:px-12 lg:grid-cols-4">
                {displayedPosts.map((posts, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(`/blog-post/${index}`)} // Navigate to blog details
                        className="relative inline-flex flex-col items-center justify-start gap-2
               bg-white hover:border border-[#FF6200] rounded-2xl
               transition-all hover:shadow-[4px_4px_0px_#FF6200] hover:-translate-y-2 md:p-4 p-1 group"
                    >
                        {/* Image Container */}
                        <div className="relative w-full overflow-hidden rounded-2xl">
                            <Image
                                className="rounded-2xl transition-all duration-300 ease-in-out transform origin-center
                    group-hover:scale-105 group-hover:-translate-y-2
                    group-hover:shadow-[16px_16px_0px_0px_#FF6200]"
                                src={posts.img}
                                alt="subject image"
                                width={520}
                                height={400}
                                priority
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col gap-2 p-2">
                            <div className="flex flex-col items-start justify-between gap-2">
                                <div className="text-xs text-[#171717]/90 flex items-center gap-3 text-nowrap">
                                    <h6>{posts.date}</h6>
                                    <div className="rounded-full size-1 bg-[#616161]/50"></div>
                                    <h6>{posts.readTime}</h6>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {posts.tags.map((tag, index) => (
                                        <div key={index} className="p-1 px-2 rounded-[6px] bg-[#FFECE0] text-[#FF6200] uppercase text-[10px] min-w-[60px] text-center">
                                            <h5>{tag}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Heading and Description */}
                            <div className="flex flex-col items-start gap-2">
                                <h1 className="md:text-2xl text-xl uppercase text-[#FF6200]">{posts.heading}</h1>
                                <p className="text-justify md:line-clamp-6 line-clamp-4 text-[#1F1F1F]/80 text-xs">{posts.content[0].desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-center w-full gap-16 m-auto mt-8 md:max-w-2/3'>
                <svg
                    onClick={() => setPage(page > 0 ? page - 1 : 0)}
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path opacity="0.4" d="M21.5406 17.0391L31.6406 24.6191V35.8391C31.6406 37.7591 29.3206 38.7191 27.9606 37.3591L17.6006 26.9991C15.9406 25.3391 15.9406 22.6391 17.6006 20.9791L21.5406 17.0391Z" fill="#171717" fill-opacity="0.3" />
                    <path d="M31.6406 12.1599V24.6199L21.5406 17.0399L27.9606 10.6199C29.3206 9.27985 31.6406 10.2399 31.6406 12.1599Z" fill="#171717" fill-opacity="0.3" />
                </svg>

                {[...Array(totalPages)].map((_, index) => (
                    <div
                        key={index}
                        className={`inline-flex items-center justify-center  size-16 cursor-pointer
                            ${page === index ? 'text-[#FF6200] rounded-xl bg-[#FF6200]/10' : 'text-[#828282]'}`}
                        onClick={() => setPage(index)}
                    >
                        <h1 className='text-4xl'>{index + 1}</h1>
                    </div>
                ))}

                <svg
                    onClick={() => setPage(page < totalPages - 1 ? page + 1 : totalPages - 1)}
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path opacity="0.4" d="M26.4594 17.0391L16.3594 24.6191V35.8391C16.3594 37.7591 18.6794 38.7191 20.0394 37.3591L30.3994 26.9991C32.0594 25.3391 32.0594 22.6391 30.3994 20.9791L26.4594 17.0391Z" fill="#171717" />
                    <path d="M16.3594 12.1599V24.6199L26.4594 17.0399L20.0394 10.6199C18.6794 9.27985 16.3594 10.2399 16.3594 12.1599Z" fill="#171717" />
                </svg>
            </div>


            {/* Call To Action */}
            <CTA />


        </div>


    )
}

export default BlogPost
