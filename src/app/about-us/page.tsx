import React from "react";

const AboutUsPage = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
        </header>

        <section className="space-y-6 text-gray-700 text-base leading-relaxed">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">
              Our Mission
            </h2>
            <p>
              Welcome to the Thurstan College Exhibition Navigation App!
              We&apos;re dedicated to providing an exceptional digital
              experience for navigating through our exhibitions and connecting
              with our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                <svg
                  className="w-6 h-6 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Innovation
              </h3>
              <p className="text-green-700">
                We leverage cutting-edge technology to create seamless
                navigation experiences that make exploration intuitive and
                engaging.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                <svg
                  className="w-6 h-6 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                Community
              </h3>
              <p className="text-purple-700">
                Building connections and fostering engagement within the
                Thurstan College community through accessible digital platforms.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Get in Touch
            </h2>
            <p className="mb-4">
              Have questions or feedback about the app? We&apos;d love to hear
              from you! Our team is committed to continuously improving your
              experience.
            </p>
            <div className="text-sm text-gray-600">
              <p>
                © 2025 SESC SLIIT - Thurstan College Exhibition Navigation App
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
