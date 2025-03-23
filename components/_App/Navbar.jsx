"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Summer Camp", path: "/summer-camp" },
  { name: "Blog Post", path: "/blog-post" },
  { name: "Competition", path: "/competition" }
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.path === pathname)?.name || "Home"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 z-40 flex items-center justify-between w-full px-6 py-3 bg-white shadow-md"
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={160}
          height={50}
          priority
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden gap-6 lg:flex">
        <div className="flex items-center rounded-full p-1 bg-[#FFE2B2] text-lg text-[#FF6200] uppercase">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              onClick={() => setActiveTab(tab.name)}
              className={`px-6 py-2 text-base rounded-full cursor-pointer transition-all ${
                activeTab === tab.name ? "text-white bg-[#FF6200]" : ""
              }`}
            >
             <h2>
             {tab.name}
             </h2>
            </Link>
          ))}
        </div>
        <Link
          href="/request-demo"
          className="text-white text-lg uppercase bg-[#FF6200] inline-flex items-center justify-center rounded-full px-6 py-2 cursor-pointer"
        >
          <h2>Request Demo</h2>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 mx-2 rounded-full lg:hidden text-white bg-[#FF6200]"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute left-0 flex flex-col items-center w-full p-4 bg-white border-t-2 shadow-lg border-black/10 top-16 lg:hidden">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              onClick={() => {
                setActiveTab(tab.name);
                setMenuOpen(false);
              }}
              className={`w-52  text-center py-3 text-lg rounded-full text-[#FF6200] uppercase ${
                activeTab === tab.name ? "bg-[#FF6200] text-white" : ""
              }`}
            >
              <h2>{tab.name}</h2>
            </Link>
          ))}
          <Link
            href="/request-demo"
            onClick={() => setMenuOpen(false)}
            className="w-fit px-6 border-[#FF6200] border-2   text-center py-3 rounded-full text-[#FF6200] uppercase"
          >
            <h2>Request Demo</h2>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
