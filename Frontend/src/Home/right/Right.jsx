import React from "react";
import Chatuser from "./Chatuser";
import Message from "./Messages";
import Input from "./Input";

export default function Right() {
  return (
    <div className="w-[70%] bg-slate-950 text-white">
      <Chatuser></Chatuser>
      <div
        style={{ maxHeight: "calc(88vh - 8vh)" }}
        className="py-2 flex-hide overflow-y-auto "
      >
        <Message></Message>
      </div>
      <Input></Input>
    </div>
  );
}
