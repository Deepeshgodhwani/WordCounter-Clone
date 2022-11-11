import React from "react";

import img from "../images/verified.png";

function Message(props) {
  return (
    <div className="fixed flex z-10 bg-[rgb(40,42,53)] left-[30%]    px-3  py-1  justify-center text-white rounded-md bottom-8 font-bold lg:left-[35%]">
      <img alt="" className="w-8" src={img}></img>
      <p className="mt-1 ml-1">{props.message}</p>
    </div>
  );
}

export default Message;
