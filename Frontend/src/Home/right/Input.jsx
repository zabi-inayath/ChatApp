import React from "react";
import { IoSend } from "react-icons/io5";

function Input() {
  return (
    <>
      <div className="flex space-x-3 h-[8vh]">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full grow outline-none bg-slate-900 mt-1"
          />
        </div>
        <button className="text-3xl">
          <IoSend />
        </button>
      </div>
    </>
  );
}

export default Input;
