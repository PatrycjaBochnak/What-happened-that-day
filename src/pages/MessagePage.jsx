import React from "react";

const MessagePage = () => {
  return (
    <div className="min-h-screen bg-[#081325] text-white flex items-center justify-center px-4">
      <form
        method="POST"
        action="https://getform.io/f/lbkmlljb"
        className="flex flex-col max-w-[600px] w-full bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <div className="pb-8">
          <div
            id="text"
            className="text-4xl font-bold inline border-b-4 border-pink-600"
          >
            Contact
          </div>
          <p id="content" className="pt-4 text-gray-300">
            Feel free to submit the form below or hit me up by email -{" "}
            <span id="content" className="font-bold text-white">
              patrycjabochnak@protonmail.com
            </span>
          </p>
        </div>
        <input
          id="content-2"
          className="p-2 bg-gray-900 text-white placeholder-gray-400"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          id="content-2"
          className="my-4 p-2 bg-gray-900 text-white placeholder-gray-400"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          id="content-2"
          className="p-2 bg-gray-900 text-white placeholder-gray-400"
          cols="10"
          placeholder="Message"
          name="message"
        />
        <button
          id="content-2"
          className="text-white border-4 border-pink-600 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default MessagePage;
