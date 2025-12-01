"use client";
import Nav from "../component/nav";

export default function Contact() {
  return (
    <>
      <Nav />

      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4 text-center">
          Contact Vyoma.co
        </h1>

        <p className="text-lg md:text-xl text-gray-900 mb-8 text-center max-w-xl">
          We'd love to hear from you! Whether you have questions, feedback, or 
          collaboration ideas, feel free to reach out to us at{" "}
          <span className="font-semibold text-blue-600">
            coming soon .....
          </span>
        </p>
      </div>
    </>
  );
}
