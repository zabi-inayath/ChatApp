import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

export default function Logout() {
  return (
    <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
      <div className="p-2 align-bottom">
        <form action="">
          <div className="flex space-x-3">
            <button>
              <HiOutlineLogout  className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300"></HiOutlineLogout>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
