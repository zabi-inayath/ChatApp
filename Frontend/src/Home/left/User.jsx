import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-4 px-6 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div class="avatar online">
          <div class="w-14 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JqLunOrDhmaNHaF2KdosIGfSLwHo7b1Emg&s" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Zabiullah</h1>
          <span>zabi2201@hotmail.com</span>
        </div>
      </div>
      {/* <div className="flex space-x-4 px-6 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div class="avatar online">
          <div class="w-14 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC85m3oMKI22wfC-be9BDLTNZsJbvXAGbkXQ&s" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Asma</h1>
          <span>asmaulhusna@gmail.com</span>
        </div>
      </div> */}
    </div>
  );
}


export default User;
