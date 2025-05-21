import React, { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    userType: "Student",
    class: "1",
    city: "",
    state: "",
  });

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Validate required fields
    if (!formData.name || !formData.email) {
      setStatus("error");
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        to_name: "School Admin", // This will be the recipient name in your EmailJS template
        message: `
          School Name: ${formData.schoolName}
          User Type: ${formData.userType}
          Class: ${formData.class}
          Phone: ${formData.phone}
          Location: ${formData.city}, ${formData.state}
        `,
        email: formData.email,
        phone: formData.phone,
        school_name: formData.schoolName,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setStatus("success");
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          schoolName: "",
          userType: "Student",
          class: "1",
          city: "",
          state: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Request_Demo">
      <div className="bg-[#FF7C2A] m-4 p-8 flex rounded-3xl flex-col lg:flex-row">
        {/* Left Section */}
        <div>
          <Image
            src="/form_img.svg"
            alt="kid_img"
            width={600}
            height={400}
            priority
            className="w-[280px] sm:w-[400px] xl:w-[600px]"
          />

          <div className="flex flex-col gap-4 p-8">
            <h1 className="text-3xl text-white uppercase heading md:text-5xl">
              Let's Connect & Build the Future!
            </h1>
            <p className="text-xs tracking-wider capitalize text-white/90 md:text-sm">
              Have questions or want to bring future-ready learning to your
              school? Fill out the form, and our team will reach out to you
              shortly!
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col gap-8 px-8 py-10 bg-white rounded-3xl shadow-[10px_10px_0px_0px_#303030]">
          <h1 className="heading uppercase text-[#FF6200] md:text-7xl text-4xl drop-shadow-[2px_2px_0px_#303030]">
            request a demo
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="md:text-base text-sm font-medium font-[inter]"
              >
                Full Name
              </label>
              <div className="p-2.5 w-full bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 border-[#EBEBEB] inline-flex">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Bhubnesh Maharana"
                  className="text-sm w-full bg-[#F9FBFC] outline-none"
                  required
                />
              </div>
            </div>

            {/* School Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="schoolName"
                className="md:text-base text-sm font-medium font-[inter]"
              >
                School Name
              </label>
              <div className="p-2.5 w-full bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 border-[#EBEBEB] inline-flex">
                <input
                  type="text"
                  name="schoolName"
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="Kendriya Vidyalaya"
                  className="text-sm w-full bg-[#F9FBFC] outline-none"
                  required
                />
              </div>
            </div>

            {/* User Type and Class */}
            <div className="flex flex-col gap-4 md:flex-row md:w-full">
              {/* User Type */}
              <div className="flex flex-col w-full gap-2 md:w-1/2">
                <label
                  htmlFor="userType"
                  className="md:text-base text-sm font-medium font-[inter]"
                >
                  User Type
                </label>
                <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] text-sm rounded-lg gap-3 border-[#EBEBEB] inline-flex items-center w-full">
                  <select
                    name="userType"
                    id="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full bg-[#F9FBFC] border-none outline-none text-[#171717]"
                    required
                  >
                    <option value="Student">Student</option>
                    <option value="School">School</option>
                  </select>
                </div>
              </div>

              {/* Class */}
              <div className="flex flex-col w-full gap-2 md:w-1/2">
                <label
                  htmlFor="class"
                  className="md:text-base text-sm font-medium font-[inter]"
                >
                  Class
                </label>
                <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 text-sm border-[#EBEBEB] inline-flex items-center w-full">
                  <select
                    name="class"
                    id="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="w-full bg-[#F9FBFC] border-none outline-none text-[#171717]"
                    required
                  >
                    {[...Array(9)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        Class {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 md:flex-row md:w-full">
              {/* Phone Number */}
              <div className="flex flex-col w-full gap-2 md:w-1/2">
                <label
                  htmlFor="phone"
                  className="md:text-base text-sm font-medium font-[inter]"
                >
                  Phone Number
                </label>
                <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 border-[#EBEBEB] inline-flex items-center w-full">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="text-sm w-full bg-[#F9FBFC] outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col w-full gap-2 md:w-1/2">
                <label
                  htmlFor="email"
                  className="md:text-base text-sm font-medium font-[inter]"
                >
                  Email
                </label>
                <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 border-[#EBEBEB] inline-flex items-center w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="text-sm w-full bg-[#F9FBFC] outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-4 md:flex-row md:w-full">
              {/* City */}
              <div className="flex flex-col w-full gap-2 md:w-1/2">
                <label
                  htmlFor="city"
                  className="md:text-base text-sm font-medium font-[inter]"
                >
                  City
                </label>
                <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] text-sm rounded-lg gap-3 border-[#EBEBEB] inline-flex items-center w-full">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="text-sm w-full bg-[#F9FBFC] outline-none"
                    required
                  />
                </div>
              </div>

              {/* State */}
              <div className="flex flex-col w-full gap-2 md:w-1/2">
                <label
                  htmlFor="state"
                  className="md:text-base text-sm font-medium font-[inter]"
                >
                  State
                </label>
                <div className="p-2.5 bg-[#F9FBFC] border-[1.2px] rounded-lg gap-3 text-sm border-[#EBEBEB] inline-flex items-center w-full">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="text-sm w-full bg-[#F9FBFC] outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="px-6 mt-2 p-4 sub-heading inline-flex items-center justify-center text-xl uppercase tracking-wide rounded-full bg-[#FF6200] disabled:opacity-50"
            >
              {loading ? (
                <span className="text-white">Sending...</span>
              ) : (
                <span className="text-white">Send</span>
              )}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600">
                Error sending message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
