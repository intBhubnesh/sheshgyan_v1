import React, { useState, useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Link from "@/utils/ActiveLink";
import { FaBars, FaTimes } from "react-icons/fa";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const tabs = [
  { name: "Home", path: "/" },
  { name: "Summer Camp", path: "/summer-camp" },
  { name: "Blog Post", path: "/blog-post" },
  { name: "Competition", path: "/competition" }
];

const Navbar = ({ user }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Check the current path to set active tab
  useEffect(() => {
    const currentPath = Router.pathname;
    const currentTab = tabs.find((tab) => tab.path === currentPath)?.name || "Home";
    setActiveTab(currentTab);
  }, []);

  // Sticky navbar effect from old component
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  }, []);

  return (
    <div id="navbar" className="">
      <nav className="fixed top-0  left-0 z-40 flex items-center justify-between w-full px-6 py-3 bg-white shadow-md">
        {/* Logo */}
        <Link href="/">
          <a>
            <img src="/images/logo.png" alt="Logo" className="w-32 " />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-6 lg:flex">
          <div className="flex items-center rounded-full p-1 bg-[#FFE2B2] text-lg text-[#FF6200] uppercase">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.path}
                activeClassName="active"
              >
                <a
                  onClick={() => setActiveTab(tab.name)}
                >
                  <h2 className={`sub-heading px-6 py-3 text-base rounded-full cursor-pointer transition-all ${
                    activeTab === tab.name ? "text-white bg-[#FF6200]" : ""
                  }`}>{tab.name}</h2>
                </a>
              </Link>
            ))}
          </div>
          <Link href="/authentication">
            <a className="w-fit px-12 border-[#FF6200] border-2 text-center inline-flex items-center justify-center rounded-full bg-[#FF6200] uppercase ">
              <h2 className="text-xl text-white sub-heading">Login</h2>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 h-16 inline-flex items-center justify-center w-16 mx-2 rounded-full lg:hidden bg-[#FF6200]"
        >
          {menuOpen ? (
            <span>
              <FaTimes className="text-white" size={24} />
            </span>
          ) : (
            <span>
              <FaBars className="text-white" size={24} />
            </span>
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className=" absolute left-0 flex flex-col items-center w-full p-4 bg-white border-t-2 shadow-lg border-black/10 top-16 lg:hidden">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.path}
                activeClassName="active"
              >
                <a
                  onClick={() => {
                    setActiveTab(tab.name);
                    setMenuOpen(false);
                  }}
                >
                  <h2 className={`sub-heading w-40 text-center py-2 text-lg rounded-full h-full ${
                    activeTab === tab.name ? "bg-[#FF6200] text-white" : ""
                  }`}>{tab.name}</h2>
                </a>
              </Link>
            ))}
            <Link href="/authentication">
              <a
                onClick={() => setMenuOpen(false)}
                className="w-fit py-3 mt-4 px-20 bg-[#FF6200] border-[#FF6200] border-2 text-center inline-flex items-center justify-center rounded-full uppercase">
                <h2 className="text-white sub-heading">Login</h2>
              </a>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;