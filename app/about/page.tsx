"use client";
import Nav from "../components/nav";

export default function About() {
    return(
        <>
        <Nav/>
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4 text-center">
            About Vyoma.co
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-8 text-center max-w-xl">
            Vyoma.co is a startup founded by <span className="font-semibold">Prasoon Jadon</span>, a 16-year-old innovator from India. Our mission is to build tools and stories for the future, empowering individuals to learn, create, and grow.
            </p>
        </div>
        </>
    )
}