import { useRouter } from "next/router";
import Image from "next/image";
import blog_posts from "../../src/data/blog-posts"; // Updated path from "../data/blog-posts"
import { useEffect, useState } from "react";
import CTA from "../../components/_App/CTA";
import Sectionheading from "../../components/_App/Sectionheading";

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query; // Get slug from URL params
  const [post, setPost] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const displayedPosts = blog_posts.slice(0, 4);

  // Find the post based on the slug or index
  useEffect(() => {
    if (router.isReady) {
      // First try to find post by index if slug is numeric
      const index = parseInt(slug);
      if (!isNaN(index) && blog_posts[index]) {
        setPost(blog_posts[index]);
      } else {
        // Otherwise find by slug
        const foundPost = blog_posts.find((post) => post.slug === slug);
        setPost(foundPost);
      }
      setIsLoading(false);
    }
  }, [router.isReady, slug]);

  // Set up intersection observer for section tracking
  useEffect(() => {
    if (!post || !post.content) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Detect when 30% of a section is visible
    );

    post.content.forEach((section) => {
      const target = document.getElementById(section.heading);
      if (target) observer.observe(target);
    });

    return () => observer.disconnect();
  }, [post]);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        Loading...
      </div>
    );
  }

  // Handle post not found
  if (!post) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        Post not found
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full mt-24 ">
      {/* blog */}
      <div className="w-full p-2 md:p-12 ">
        <div className="flex flex-col items-center justify-center w-full gap-4 ">
          <div>
            <div className="flex flex-col items-center justify-center gap-6 ">
              <div className="inline-flex items-center justify-center gap-4">
                {post.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="p-1.5 px-3 rounded-[6px] items-center justify-center inline-flex
                                                bg-[#FFECE0] text-[#FF6200] uppercase text-xs min-w-[60px]"
                  >
                    <h5>{tag}</h5>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="md:text-6xl text-4xl text-center uppercase text-[#FF6200] sub-heading ">
                  {post.heading}
                </h1>
                <div className="md:text-base text-sm text-[#171717]/90 inline-flex items-center justify-center md:gap-6 gap-2">
                  <h6>{post.date}</h6>
                  <div className="rounded-full size-1 bg-[#616161]/50"></div>
                  <h6>{post.readTime}</h6>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={post.img}
            alt="blog image"
            width={960}
            height={500}
            className="object-cover w-full rounded-lg"
          />

          {/* content */}
          <div className="relative flex w-full bg-white">
            {/* Left Sticky Menu */}
            <div className="hidden w-[20%] h-screen p-4 overflow-y-auto md:sticky md:block top-24">
              <ul className="">
                {post.content.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${section.heading}`}
                      className={`block px-3 py-1 text-sm  ${
                        activeSection === section.heading
                          ? " text-[#1F1F1F]/90 border-l-2 border-[#FF6200] font-semibold "
                          : "text-[#1F1F1F]/60 border-l-2 border-[#FF6200]/20"
                      }`}
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Blog Content */}
            <div className="h-full p-2 space-y-6 text-justify md:p-6 md:w-[80%]">
              {post.content.map((section) => (
                <div
                  id={section.heading}
                  key={section.heading}
                  className="scroll-mt-20"
                >
                  <h5 className="text-2xl font-semibold">{section.heading}</h5>
                  <p className="text-gray-700">{section.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion */}
      <div className="flex flex-col my-24 ">
        <div className="md:px-12">
          <Sectionheading
            tag="Suggestion"
            heading="Blog-posts"
            desc="Explore expert articles, industry trends, and success stories in education and technology, helping students, parents, and schools stay ahead in the digital era."
          />
        </div>
        <div className="grid w-full grid-cols-1 gap-2 px-12 mt-6 md:gap-6 md:px-12 md:grid-cols-4">
          {displayedPosts.map((post, index) => (
            <div
              key={index}
              onClick={() => router.push(`/blog-post/${index}`)}
              className="relative inline-flex flex-col items-center justify-start gap-2 bg-white hover:border border-[#FF6200] rounded-2xl transition-all hover:shadow-[4px_4px_0px_#FF6200] hover:-translate-y-2 md:p-4 p-1 group"
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden rounded-2xl">
                <img
                  className="rounded-2xl transition-all duration-300 ease-in-out transform origin-center group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[16px_16px_0px_0px_#FF6200]"
                  src={post.img}
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
                    <h6>{post.date}</h6>
                    <div className="rounded-full size-1 bg-[#616161]/50"></div>
                    <h6>{post.readTime}</h6>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="p-1 px-2 rounded-[6px] bg-[#FFECE0] text-[#FF6200] uppercase text-[10px] min-w-[60px] text-center"
                      >
                        <h5>{tag}</h5>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Heading and Description */}
                <div className="flex flex-col items-start gap-2">
                  <h1 className="heading md:text-2xl text-xl uppercase text-[#FF6200]">
                    {post.heading}
                  </h1>
                  <p className="text-justify para md:line-clamp-6 line-clamp-4 text-[#1F1F1F]/80 text-xs">
                    {post.content[0].desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call To Action */}
      <CTA />
    </div>
  );
};

export default BlogDetail;
