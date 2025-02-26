import React from "react";
import contactImg from "../images/contactus.jpg"

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around min-h-screen bg-[#E5D9F2] p-6">
            {/* Left Side - Image */}
            <img
                src={contactImg}
                alt="Contact Us"
                className="rounded-lg shadow-lg w-70 md:w-70 mb-6 md:mb-0"
            />

            {/* Right Side - Text Content & Form */}
            <div className="max-w-lg text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4 text-[#6A0572]">Contact Us</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Have questions or need assistance? We’re here to help! Reach out to us anytime.
                </p>

                {/* Contact Form */}
                <form className="flex flex-col space-y-4 mt-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded p-3"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded p-3"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="border border-gray-300 rounded p-3"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#6A0572] text-white font-semibold py-2 rounded hover:bg-[#54045E] transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
