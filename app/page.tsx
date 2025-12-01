"use client";

import Nav from "./component/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4 text-center">
          Welcome to Vyoma.co
        </h1>
        <p className="text-lg md:text-xl text-gray-900 mb-8 text-center max-w-xl">
          A startup founded by <span className="font-semibold">Prasoon Jadon</span>, a 16-year-old innovator from India, building tools and stories for the future.
        </p>

        {/* Founder Highlight */}
        <div className="flex flex-col items-center bg-gray-100 shadow-md rounded-xl p-6 max-w-md text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">About the Founder</h2>
          <p className="text-gray-800">
            Vyoma is built by <span className="font-semibold">Prasoon Jadon</span>, a 16-year-old founder bringing his ideas to life from his room-office in India.  
            From tools to stories, Vyoma is the start of something big.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Tools</h3>
            <p className="text-gray-800">Innovative AI tools for learning, productivity, and creative projects.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Blockchain Playground</h3>
            <p className="text-gray-800">Practice Solidity and blockchain concepts in-browser with ease.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Lab</h3>
            <p className="text-gray-800">Learn e-business with interactive Q&A and practical exercises.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Journal Bot</h3>
            <p className="text-gray-800">A Node.js Telegram bot to manage personal and business journals effortlessly.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">LearnByte Integration</h3>
            <p className="text-gray-800">Connect and enhance your LearnByte experience with Vyoma tools.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Utilities</h3>
            <p className="text-gray-800">Smart AI-based utilities to help you learn, code, and create faster.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Newsletter</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-800 mb-4">Stay updated with Vyoma’s latest tools, articles, and stories.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l px-4 py-2 w-2/3 md:w-1/2 focus:outline-none"
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800 transition">
                <a href="https://vyomaco.substack.com/subscribe">Subscribe </a>
            </button>
          
          </div>
        </div>
      </section>
    </>
  );
}
