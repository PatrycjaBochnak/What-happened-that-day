import React, { useEffect } from "react";
import * as Icons from "react-bootstrap-icons";

const Contact = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
  }, [sr]);

  return (
    <div
      id="contact"
      className="min-h-screen bg-blue-200 flex flex-col items-center justify-center px-4"
    >
      <div id="text" className="text-4xl font-bold text-gray-800 mb-8">
        Hit me up!
      </div>
      <div id="content" className="flex space-x-6 text-gray-700">
        {/* Instagram */}
        <div className="relative group">
          <a
            href="https://www.instagram.com/patrycjabochnak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Icons.Instagram size={40} />
          </a>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all text-gray-700">
            Instagram
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Icons.Linkedin size={40} />
          </a>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all text-gray-700">
            LinkedIn
          </span>
        </div>

        {/* GitHub */}
        <div className="relative group">
          <a
            href="https://github.com/PatrycjaBochnak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Icons.Github size={40} />
          </a>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all text-gray-700">
            GitHub
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
