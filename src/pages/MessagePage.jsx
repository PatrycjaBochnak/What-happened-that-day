import React from "react";

const MessagePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        method="POST"
        action="https://getform.io/f/lbkmlljb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <div
            id="text"
            className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray"
          >
            Contact
          </div>
          <p id="content" className="text-gray pt-4">
            Feel free to submit the form below or hit me an up by email -{" "}
            <span id="content" className="font-bold">
              patrycjabochnak@protonmail.com
            </span>
          </p>
        </div>
        <input
          id="content-2"
          className="p-2 bg-[#00000]"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          id="content-2"
          className="my-4 p-2 bg-[#00000]"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          id="content-2"
          className="p-2 bg-[#00000]"
          type="text"
          cols="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          id="content-2"
          className="text-gray border-4 border-pink-600 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default MessagePage;
