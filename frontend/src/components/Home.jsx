import React from 'react';
import onlineLearningImage from '../images/2534028.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-40">
                <h1 className="text-5xl font-bold mb-4">
                    Unlock Your Potential with <span className="text-yellow-300">Expert Tuition</span>!
                </h1>
                <p className="text-lg text-gray-200 max-w-2xl">
                    Learn from the best tutors at your convenience. Interactive sessions, personalized learning, and flexible schedules to fit your needs.
                </p>
                <button className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow-lg">
                    <Link to={'/login'}>Get Started</Link>
                </button>
            </div>

            {/* Features Section */}
            <div className="py-12 px-6">
                <h2 className="text-4xl font-semibold text-center mb-10">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">📚 Expert Tutors</h3>
                        <p className="text-gray-600">Learn from industry experts and top educators with personalized guidance.</p>
                    </div>
                    <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">💻 Flexible Learning</h3>
                        <p className="text-gray-600">Study at your own pace with 24/7 access to resources and recorded sessions.</p>
                    </div>
                    <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">🎥 Interactive Classes</h3>
                        <p className="text-gray-600">Live doubt-solving, engaging quizzes, and interactive whiteboards.</p>
                    </div>
                </div>
            </div>

            {/* Image Banner */}
            <div className="flex justify-center  my-12">
                <img
                    src={onlineLearningImage}
                    alt="Online Learning"
                    className="rounded-lg shadow-lg w-50 md:w-50"
                />
            </div>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-300">
                <p>&copy; 2025 Your Tuition Platform. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
