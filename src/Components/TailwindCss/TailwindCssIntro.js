import React from "react";

function TailwindCssIntro() {
  return (
    <div>
      <label
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        // className="font-bold text-xl my-[10px] text-cyan-500"
      >
        Tailwind css Introduction..!!
      </label>
      {/* <div className="flex gap-2"> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 xl:grid-cols-4 2xl:grid-cols-5 p-4">
        <div className=" rounded-full border border-gray-500 scale-90 duration-300 hover:animate-bounce cursor-pointer hover:scale-100 p-[12px] hover:shadow-lg hover:shadow-purple-500 ">
          Container One
        </div>
        <div className=" rounded-full border border-gray-500 scale-90 duration-300 hover:animate-bounce cursor-pointer hover:scale-100 p-[12px] hover:shadow-lg hover:shadow-purple-500 ">
          Container Two
        </div>
        <div className=" rounded-full border border-gray-500 scale-90 duration-300 hover:animate-bounce cursor-pointer hover:scale-100 p-[12px] hover:shadow-lg hover:shadow-purple-500 ">
          Container Three
        </div>
        <div className=" rounded-full border border-gray-500 scale-90 duration-300 hover:animate-bounce cursor-pointer hover:scale-100 p-[12px] hover:shadow-lg hover:shadow-purple-500 ">
          Container Four
        </div>
        <div className=" rounded-full border border-gray-500 scale-90 duration-300 hover:animate-bounce cursor-pointer hover:scale-100 p-[12px] hover:shadow-lg hover:shadow-purple-500 ">
          Container Five
        </div>
      </div>
    </div>
  );
}
export default TailwindCssIntro;
