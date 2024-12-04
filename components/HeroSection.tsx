import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-40 w-96 h-96 bg-white rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-white rounded-full opacity-30 blur-3xl"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center py-20">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
          Streamline your workflows
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Our AI solutions automate the mundane, letting you focus on what matters.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="/learn-more"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
          >
            Learn More
          </a>
          <a
            href="/sign-up"
            className="px-6 py-3 bg-gray-100 text-gray-800 text-lg font-medium rounded-lg hover:bg-gray-200"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Workflow Diagram */}
      <div className="relative mt-12 flex justify-center">
        <img
          src="/workflow-diagram.png"
          alt="Workflow Diagram"
          className="max-w-full h-auto rounded shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
