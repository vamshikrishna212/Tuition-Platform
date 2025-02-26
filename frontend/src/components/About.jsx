import React from "react";
import aboutImg from "../images/aboutus.jpg"
const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around min-h-screen bg-[#E5D9F2] p-6">
            {/* Left Side - Text Content */}
            <div className="max-w-lg text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4 text-[#6A0572]">About Us</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Welcome to <span className="font-semibold text-[#6A0572]">our Online Tuition Platform</span>, where expert tutors and quality education meet!
                    Our mission is to make learning flexible, engaging, and accessible for every student.
                </p>
                <p className="mt-4 text-gray-700">
                    Join us to experience interactive learning with live classes, personalized study plans, and expert guidance.
                </p>
            </div>

            {/* Right Side - Image */}
            <img
                src={aboutImg}
                alt="About Us"
                className="rounded-lg shadow-lg w-50 md:w-50 mt-6 md:mt-0"
            />
        </div>
    );
};

export default About;
