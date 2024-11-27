import React from "react";

function Chatuser() {
  return (
    <div>
      <>
        <div className="pl-5 pb-3 pt-5 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
          <div>
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JqLunOrDhmaNHaF2KdosIGfSLwHo7b1Emg&s" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl">Zabiullah S</h1>
            <span className="text-sm">Online</span>
          </div>
        </div>
      </>
    </div>
  );
}

export default Chatuser;
